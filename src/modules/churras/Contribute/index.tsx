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
        <div className="link-and-copy-link">
          <input
            id="churras-link"
            type="text"
            value={data.pix_key}
            disabled
            style={{ marginBottom: 24 }}
          />
          <button type="button" className="copy-link" onClick={copyToClipboard}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                fill="#807D8E"
              />
              <path
                d="M17.1 2H12.9C9.81693 2 8.37099 3.09409 8.06975 5.73901C8.00673 6.29235 8.465 6.75 9.02191 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V14.9781C17.25 15.535 17.7077 15.9933 18.261 15.9303C20.9059 15.629 22 14.1831 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z"
                fill="#807D8E"
              />
            </svg>
          </button>
        </div>
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
