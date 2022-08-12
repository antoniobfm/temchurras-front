import Button from '@/components/Button';
import { Card } from '@/components/Card/styles';
import { TextInput } from '@/components/TextInput';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { updateName } from '@/redux/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';

interface IFormData {
  name: string;
}

const EditProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.user.userInfo);

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

  return (
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
  );
};

export default EditProfile;
