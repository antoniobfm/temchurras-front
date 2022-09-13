/* eslint-disable @typescript-eslint/no-empty-function */
import Button from '@/components/Button';
import { DateInput } from '@/components/DateInput';
import InputTextArea from '@/components/InputTextArea';
import { TextInput } from '@/components/TextInput';
import ValueInput from '@/components/ValueInput';
import { createChurras } from '@/redux/churras.actions';
import { AppDispatch } from '@/redux/store';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface IFormInput {
  name: string;
  description: string;
  date: Date;

  suggested_contribution_with_drinks: number;
  suggested_contribution_without_drinks: number;

  pix_key: string;
  pix_type: string;
}

const CreateChurrasForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = useCallback(
    (data: IFormInput) => {
      dispatch(
        createChurras({ ...data, description: encodeURI(data.description) }),
      );
    },
    [dispatch],
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  return (
    <div className="card">
      <div className="card-header">
        <h1>Adicionar novo churras</h1>
      </div>
      <div className="card-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Nome</h2>
          <TextInput
            name="name"
            isErrored={!!errors.name}
            register={{
              ...register('name', {
                required: true,
                maxLength: 30,
                pattern: /^[A-Za-z ]+$/i,
              }),
            }}
            data-test="name-input"
          />
          {errors?.name?.type === 'required' && (
            <p className="error">Campo obrigatório</p>
          )}
          {errors?.name?.type === 'maxLength' && (
            <p className="error">
              O nome do churras não pode passar de 30 caracteres
            </p>
          )}
          {errors?.name?.type === 'pattern' && (
            <p className="error">Apenas caracteres alfabéticos</p>
          )}
          <h2>Data</h2>
          <DateInput
            isErrored={!!errors.date}
            register={{
              ...register('date', {
                required: true,
              }),
            }}
          />
          {errors?.date?.type === 'required' && (
            <p className="error">O churras tem que ter data</p>
          )}

          <h2>Descrição</h2>
          <InputTextArea
            id="description"
            isErrored={!!errors.description}
            register={{ ...register('description', { required: true }) }}
            data-test="description-input"
          />
          {errors?.description?.type === 'required' && (
            <p className="error">A descrição é obrigatória</p>
          )}

          <h1 style={{ paddingTop: 32 }}>Valores sugeridos</h1>
          <h2>Com bebida</h2>
          <ValueInput
            isErrored={!!errors.suggested_contribution_with_drinks}
            register={{
              ...register('suggested_contribution_with_drinks', {
                required: true,
                maxLength: 4,
                pattern: /^[0-9.]+$/i,
              }),
            }}
            data-test="with-drinks-input"
          />
          {errors?.suggested_contribution_with_drinks?.type === 'required' && (
            <p className="error">O valor com drinks inclusos é obrigatório</p>
          )}

          <h2>Sem bebida</h2>
          <ValueInput
            isErrored={!!errors.suggested_contribution_without_drinks}
            register={{
              ...register('suggested_contribution_without_drinks', {
                required: true,
                maxLength: 4,
                pattern: /^[0-9.]+$/i,
              }),
            }}
            data-test="without-drinks-input"
          />
          {errors?.suggested_contribution_without_drinks?.type ===
            'required' && (
            <p className="error">O valor sem drinks inclusos é obrigatório</p>
          )}

          <h1 style={{ paddingTop: 32 }}>Pagamento</h1>

          <h2>Tipo de Chave Pix</h2>
          <TextInput
            name="pix_type"
            isErrored={!!errors.pix_type}
            register={{
              ...register('pix_type', {
                required: true,
                maxLength: 30,
              }),
            }}
            data-test="pix-type-input"
          />
          {errors?.pix_type?.type === 'required' && (
            <p className="error">Campo obrigatório</p>
          )}
          {errors?.pix_type?.type === 'maxLength' && (
            <p className="error">
              O nome do churras não pode passar de 30 caracteres
            </p>
          )}
          <h2>Chave Pix</h2>
          <TextInput
            name="pix_key"
            isErrored={!!errors.pix_key}
            register={{
              ...register('pix_key', {
                required: true,
                maxLength: 30,
              }),
            }}
            data-test="pix-key-input"
          />
          {errors?.pix_key?.type === 'required' && (
            <p className="error">Campo obrigatório</p>
          )}
          {errors?.pix_key?.type === 'maxLength' && (
            <p className="error">
              O nome do churras não pode passar de 30 caracteres
            </p>
          )}

          <Button style={{ marginTop: 24 }} handleClick={() => {}}>
            CRIAR CHURRAS
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateChurrasForm;
