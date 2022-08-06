/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Button from '@/components/Button';
import { Card } from '@/components/Card/styles';
import { TextInput } from '@/components/TextInput';
import { Container } from '@/modules/profile/styles';
import { AppDispatch, RootState } from '@/redux/store';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateName } from '@/redux/user.actions';
import { signOut } from '@/redux/authentication.actions';

interface IFormData {
  name: string;
}

const Profile: React.FC = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.user.userInfo);

  useEffect(() => {
    if (!user.name) {
      router.push('/login');
    }
  }, [user.name, router]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>();

  const handleUpdateName = useCallback(
    (data: IFormData) => {
      dispatch(updateName(data.name));
    },
    [dispatch],
  );

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Meu Perfil | TemChurras</title>
      </Head>
      <Container>
        <img src="/assets/background.png" alt="background" />
        <div className="actions">
          <div className="go-back" onClick={() => router.back()}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.65 4.43331L8.975 7.10831L7.33333 8.74164C6.64167 9.43331 6.64167 10.5583 7.33333 11.25L11.65 15.5666C12.2167 16.1333 13.1833 15.725 13.1833 14.9333V10.2583V5.06664C13.1833 4.26664 12.2167 3.86664 11.65 4.43331Z"
                fill="#292D32"
              />
            </svg>

            <span>VOLTAR</span>
          </div>
          <div className="go-back" onClick={handleSignOut}>
            <span>SAIR</span>
          </div>
        </div>
        <div className="dashboard">
          <Card>
            <div className="card-header">
              <div className="card-header-title">
                <h1>Editar perfil</h1>
              </div>
            </div>
            <div className="card-content">
              <h4 style={{ paddingBottom: 16 }}>Seu nome</h4>
              <form onSubmit={handleSubmit(handleUpdateName)}>
                <TextInput
                  name="name"
                  isErrored={!!errors.name}
                  defaultValue={user.name}
                  register={{
                    ...register('name', {
                      required: true,
                      pattern: /^[A-Za-z ]+$/i,
                    }),
                  }}
                />
                {errors?.name?.type === 'required' && (
                  <p className="error">Campo obrigatório</p>
                )}
                {errors?.name?.type === 'pattern' && (
                  <p className="error">Apenas caracteres alfabéticos</p>
                )}
                <Button style={{ marginTop: 24 }}>SALVAR</Button>
              </form>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Profile;
