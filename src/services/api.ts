/* eslint-disable no-console */
import axios, { AxiosError } from 'axios';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { AuthTokenError } from './errors/AuthTokenError';

const urls = {
  test: process.env.NEXT_PUBLIC_PRODUCTION_BACKEND_URL,
  development: `http://localhost:${process.env.NEXT_PUBLIC_BACKEND_DEV_PORT}`,
  production: process.env.NEXT_PUBLIC_PRODUCTION_BACKEND_URL,
};

let isRefreshing = false;
let failedRequestsQueue: any[] = [];

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);
  const api = axios.create({
    baseURL: urls[process.env.NODE_ENV],
    headers: {
      Authorization: `Bearer ${cookies['temchurras.token']}`,
    },
  });

  api.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error: any) => {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Invalid token') {
          cookies = parseCookies(ctx);

          const { 'temchurras.refreshToken': refreshToken } = cookies;
          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            api
              .post('/authentication/refresh', {
                token: refreshToken,
              })
              .then(response => {
                const { token } = response.data;

                setCookie(ctx, 'temchurras.token', token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                });

                setCookie(
                  ctx,
                  'temchurras.refreshToken',
                  response.data.refresh_token,
                  {
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    path: '/',
                  },
                );

                api.defaults.headers.common.Authorization = `Bearer ${token}`;

                failedRequestsQueue.forEach(request =>
                  request.onSuccess(token),
                );
                failedRequestsQueue = [];
              })
              .catch(err => {
                failedRequestsQueue.forEach(request => request.onFailure(err));
                failedRequestsQueue = [];

                if (process.browser) {
                  destroyCookie(undefined, 'temchurras.token');
                  destroyCookie(undefined, 'temchurras.refreshToken');
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers.Authorization = `Bearer ${token}`;

                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        }
        if (process.browser) {
          destroyCookie(undefined, 'temchurras.token');
          destroyCookie(undefined, 'temchurras.refreshToken');
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }

      return Promise.reject(error);
    },
  );

  return api;
}
