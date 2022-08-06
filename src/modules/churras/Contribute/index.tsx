/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Card } from '@/components/Card/styles';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Button from '@/components/Button';
import { useToast } from '@/hooks/toast';
import Link from 'next/link';

const Contribute: React.FC = () => {
  const router = useRouter();

  const { addToast } = useToast();

  const churras_slug = router.query.churras_slug as string;

  const user_name = useSelector((state: RootState) => state.user.userInfo.name);

  const data = useSelector((state: RootState) => {
    const churrasData = state.user.churras.filter(
      churras => churras.id === churras_slug,
    )[0];
    const calendar = state.user.calendar.filter(
      churras => churras.id === churras_slug,
    )[0];
    return { ...churrasData, ...calendar };
  });

  const copyToClipboard = () => {
    /* Get the text field */
    const copyText = document.getElementById(
      'churras-link',
    ) as HTMLInputElement;

    if (copyText) {
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);

      addToast({
        type: 'success',
        title: 'Pix copiado para a área de transferência',
      });
    }
  };

  return (
    <Card>
      <div className="card-header">
        <div className="card-header-title">
          <h1>Contribuição</h1>

          <h2 style={{ paddingTop: 16 }}>Com bebidas</h2>
          <p style={{ paddingTop: 8 }}>
            R${data.suggested_contribution_with_drinks}
          </p>

          <h2 style={{ paddingTop: 16 }}>Sem bebidas</h2>
          <p style={{ paddingTop: 8 }}>
            R${data.suggested_contribution_without_drinks}
          </p>
          <h1 style={{ paddingTop: 24 }}>Chave pix ({data.pix_type})</h1>
        </div>
      </div>
      <div className="card-content">
        <input
          id="churras-link"
          type="text"
          value={data.pix_key}
          disabled
          style={{ marginBottom: 24 }}
        />
        <Link
          href={`https://api.whatsapp.com/send?phone=55${data.contact_number}&text=Segue+aqui+o+comprovante+da+${data.name}.+Meu+nome+%C3%A9%3A+${user_name}`}
          rel="noopener noreferrer"
        >
          <a target="_blank">
            <Button handleClick={() => {}}>ENVIAR COMPROVANTE</Button>
          </a>
        </Link>
      </div>
    </Card>
  );
};

export default Contribute;
