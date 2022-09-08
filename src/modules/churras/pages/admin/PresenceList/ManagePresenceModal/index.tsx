/* eslint-disable no-nested-ternary */
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import {
  confirmContribution,
  removeParticipant,
} from '@/redux/churras.actions';
import { AppDispatch, RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AnotherOption, Container, Option } from './styles';

interface IProps {
  setState: any;
  contributor_id: string;
}

const ManagePresenceModal: React.FC<IProps> = ({
  setState,
  contributor_id,
}: IProps) => {
  const [selectedOption, setSelectedOption] = useState<
    'with-drink' | 'without-drink' | 'another-value'
  >();
  const [otherValue, setOtherValue] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const churras_slug = router.query.churras_slug as string;

  const data = useSelector((state: RootState) => {
    const churrasData = state.user.churras.filter(
      churras => churras.id === churras_slug,
    )[0];
    const organizing = state.user.organizing.filter(
      churras => churras.id === churras_slug,
    )[0];
    const contributor = organizing.presence_list.filter(
      presence => presence.id === contributor_id,
    )[0];
    return { ...churrasData, ...organizing, ...contributor };
  });

  useEffect(() => {
    if (
      data.amount_contributed ===
      parseInt(`${data.suggested_contribution_with_drinks}`, 10)
    ) {
      setSelectedOption('with-drink');
    } else if (
      data.amount_contributed ===
      parseInt(`${data.suggested_contribution_without_drinks}`, 10)
    ) {
      setSelectedOption('without-drink');
    } else if (data.amount_contributed) {
      setSelectedOption('another-value');
      setOtherValue(data.amount_contributed.toString());
    }
  }, []);

  const handleConfirmPresenceAndSave = useCallback(() => {
    const value =
      selectedOption === 'another-value'
        ? otherValue
        : selectedOption === 'with-drink'
        ? data.suggested_contribution_with_drinks
        : data.suggested_contribution_without_drinks;
    dispatch(
      confirmContribution({
        churras_id: churras_slug,
        contributor_id,
        amount_contributed: parseFloat(`${value}`),
      }),
    );
  }, [
    selectedOption,
    otherValue,
    data.suggested_contribution_with_drinks,
    data.suggested_contribution_without_drinks,
    dispatch,
    churras_slug,
    contributor_id,
  ]);

  const handleRemovePresence = useCallback(() => {
    dispatch(
      removeParticipant({
        churras_id: churras_slug,
        participant_id: contributor_id,
      }),
    );
    setState(false);
  }, [dispatch, churras_slug, contributor_id, setState]);

  return (
    <Modal setState={setState}>
      <Container>
        <h1>Confirmar Presença</h1>
        <p style={{ paddingTop: 8 }}>{data.name}</p>
        <h2 style={{ paddingTop: 24 }}>Contribuição</h2>
        <div className="option-list">
          <Option
            isSelected={selectedOption === 'with-drink'}
            onClick={() => setSelectedOption('with-drink')}
          >
            <p>R${data.suggested_contribution_with_drinks} - Com bebida</p>
          </Option>
          <Option
            isSelected={selectedOption === 'without-drink'}
            onClick={() => setSelectedOption('without-drink')}
          >
            <p>R${data.suggested_contribution_without_drinks} - Sem bebida</p>
          </Option>
          <AnotherOption
            isSelected={selectedOption === 'another-value'}
            className="another-option"
            type="number"
            onChange={e => setOtherValue(e.target.value)}
            value={otherValue}
            onClick={() => setSelectedOption('another-value')}
            placeholder="Outro valor"
          />
        </div>
        <Button handleClick={handleConfirmPresenceAndSave}>
          SALVAR & CONFIRMAR PRESENÇA
        </Button>
        <button
          className="remove-button"
          type="button"
          onClick={handleRemovePresence}
          style={{ marginTop: 16 }}
        >
          REMOVER PARTICIPANTE
        </button>
      </Container>
    </Modal>
  );
};

export default ManagePresenceModal;
