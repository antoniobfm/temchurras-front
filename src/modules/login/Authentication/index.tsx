import SubmitButton from '@/components/SubmitButton';
import { TelephoneInput } from '@/components/TelephoneInput';
import { TextInput } from '@/components/TextInput';
import VerificationCodeInput from '@/components/VerificationCodeInput';
import {
  sendVerificationCode,
  verifyVerificationCode,
} from '@/redux/authentication.actions';
import { AppDispatch, RootState } from '@/redux/store';
import { updateName } from '@/redux/user.actions';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Container } from './styles';

interface IFormData {
  name: string;
}

const Authentication: React.FC = () => {
  const [step, setStep] = useState<
    'phone_number' | 'verification_code' | 'onboarding'
  >('phone_number');

  const [phoneNumber, setPhoneNumber] = useState('');
  const user = useSelector((state: RootState) => state.user.userInfo);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const redirect = router.query.redirect as string;

  useEffect(() => {
    if (user.phone_number && !user.name) {
      setStep('onboarding');
    } else if (user.phone_number && user.name) {
      if (redirect) {
        router.push(`/c/${redirect}`);
      } else {
        router.push('/');
      }
    }
  }, [router, user, redirect]);

  const handleSubmitPhoneNumber = useCallback(() => {
    if (phoneNumber.length >= 16) {
      dispatch(sendVerificationCode(phoneNumber));
      setStep('verification_code');
    }
  }, [dispatch, phoneNumber]);

  const handleSubmitVerificationCode = useCallback(() => {
    const codeInput = document.getElementsByClassName('code-input');

    if (codeInput) {
      const code = [...codeInput].map(({ value }: any) => value).join('');

      if (code.length === 5) {
        dispatch(
          verifyVerificationCode({
            phone_number: phoneNumber,
            verification_code: code,
          }),
        );
      }
    }
  }, [dispatch, phoneNumber]);

  const handleGoBack = useCallback(() => {
    setStep('phone_number');
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>();

  const handleFinishOnboarding = useCallback(
    (data: IFormData) => {
      dispatch(updateName(data.name));
      router.push('/');
    },
    [dispatch, router],
  );

  if (step === 'phone_number')
    return (
      <Container
        key={1}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 style={{ paddingBottom: 16 }}>Seu telefone</h1>
        <TelephoneInput
          name="phone"
          labelName="(00) 00000 - 0000"
          setState={setPhoneNumber}
          value={phoneNumber}
        />
        <SubmitButton handleClick={handleSubmitPhoneNumber}>
          RECEBER CÓDIGO DE VERIFICAÇÃO
        </SubmitButton>
      </Container>
    );

  if (step === 'verification_code')
    return (
      <Container
        key={2}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 style={{ paddingBottom: 16 }}>Código de Verificação</h1>
        <VerificationCodeInput />
        <SubmitButton handleClick={handleSubmitVerificationCode}>
          ENTRAR
        </SubmitButton>
        <button
          style={{ marginTop: 32 }}
          type="button"
          onClick={handleGoBack}
          className="go-back"
        >
          VOLTAR
        </button>
      </Container>
    );

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 style={{ paddingBottom: 16 }}>Seu nome</h1>
      <form onSubmit={handleSubmit(handleFinishOnboarding)}>
        <TextInput
          name="name"
          isErrored={!!errors.name}
          register={{
            ...register('name', {
              required: true,
              pattern: /^[A-Za-z ]+$/i,
            }),
          }}
        />
        {errors?.name?.type === 'required' && <p>Campo obrigatório</p>}
        {errors?.name?.type === 'pattern' && (
          <p>Apenas caracteres alfabéticos</p>
        )}
        <SubmitButton>SALVAR</SubmitButton>
      </form>
    </Container>
  );
};

export default Authentication;
