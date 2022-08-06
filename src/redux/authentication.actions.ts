import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/services/apiClient';
import cookie from 'js-cookie';

export const sendVerificationCode = createAsyncThunk(
  '/authentication/send-verification-code',
  async (phone_number: string) => {
    const response = await api.post('/authentication/send-verification-code', {
      phone_number,
    });

    // mixpanel.identify(response.data.user.id);

    return response.data;
  },
);

interface IVerifyCode {
  phone_number: string;
  verification_code: string;
}

interface IChurras {
  id: string;
  name: string;
  description: string;
  contact_number: string;
  date: Date;
  suggested_contribution_with_drinks: number;
  suggested_contribution_without_drinks: number;
  pix_key: string;
  pix_type: string;
  total_participants: number;
  total_revenue: number;
}

interface IVerifyCodeResponse {
  token: string;
  refresh_token: string;

  user: {
    id: string;
    name?: string;
    phone_number: string;
  };

  churras: IChurras[];

  calendar: {
    id: string;
    amount_contributed?: number;
  }[];

  organizing: {
    id: string;
    presence_list: {
      id: string;
      name?: string;
      contribution?: number;
    }[];
  }[];
}

export const verifyVerificationCode = createAsyncThunk(
  '/authentication/verify-verification-code',
  async ({
    phone_number,
    verification_code,
  }: IVerifyCode): Promise<IVerifyCodeResponse> => {
    const response = await api.post(
      '/authentication/verify-verification-code',
      {
        phone_number,
        verification_code,
      },
    );

    cookie.set('temchurras.token', response.data.token, {
      expires: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    cookie.set('temchurras.refreshToken', response.data.refresh_token, {
      expires: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    // mixpanel.identify(response.data.user.id);

    return response.data;
  },
);

export const signOut = createAsyncThunk('/authentication/logout', async () => {
  cookie.set('temchurras.token', '', {
    expires: 0,
    path: '/',
  });

  cookie.set('temchurras.refreshToken', '', {
    expires: 0,
    path: '/',
  });
});
