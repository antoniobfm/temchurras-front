import Button from '@/components/Button';
import { Card } from '@/components/Card/styles';
import { useToast } from '@/hooks/toast';
import { useRouter } from 'next/router';
import React from 'react';

const ShareChurras: React.FC = () => {
  const router = useRouter();
  const churras_slug = router.query.churras_slug as string;

  const { addToast } = useToast();

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
        title: 'Link copiado para a área de transferência',
      });
    }
  };

  return (
    <Card>
      <div className="card-header">
        <div className="card-header-title">
          <h1>Compartilhe o Churras</h1>
        </div>
      </div>
      <div className="card-content">
        <input
          id="churras-link"
          type="text"
          value={`https://temchurras.app/c/${churras_slug}`}
          disabled
          style={{ marginBottom: 24 }}
        />
        <Button handleClick={copyToClipboard}>COPIAR LINK</Button>
      </div>
    </Card>
  );
};

export default ShareChurras;
