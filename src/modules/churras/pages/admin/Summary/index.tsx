import { Card } from '@/components/Card/styles';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

const Summary: React.FC = () => {
  const router = useRouter();
  const churras_slug = router.query.churras_slug as string;

  const data = useSelector((state: RootState) => {
    const churrasData = state.user.churras.filter(
      churras => churras.id === churras_slug,
    )[0];
    const organizing = state.user.organizing.filter(
      churras => churras.id === churras_slug,
    )[0];
    return { ...churrasData, ...organizing };
  });

  return (
    <Card>
      <div className="card-header">
        <div className="card-header-title">
          <h1>{data.name}</h1>

          <h2 style={{ paddingTop: 16 }}>Total Arrecadado</h2>
          <p style={{ paddingTop: 8 }}>R${data.total_revenue}</p>

          <h2 style={{ paddingTop: 16 }}>Total confirmados</h2>
          <p style={{ paddingTop: 8 }}>{data.total_participants} pessoas</p>
        </div>
      </div>
    </Card>
  );
};

export default Summary;
