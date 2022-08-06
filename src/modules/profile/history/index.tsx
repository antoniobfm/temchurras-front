import { Card } from '@/components/Card/styles';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import { Container } from './styles';

const History: React.FC = () => {
  const history = useSelector(
    (state: RootState) => state.user.userInfo.history,
  );

  return (
    <Container>
      <Card>
        <div className="card-header">
          <div className="card-header-title">
            <h1>Histórico</h1>
          </div>
        </div>
        <div className="history-list">
          {history &&
            history.map(item => (
              <div className="history-list-item">
                <div className="history-list-item-header">
                  <h5>{format(item.date, 'dd/MM')}</h5>
                  <h5 style={{ paddingLeft: 24 }}>{item.name}</h5>
                </div>
                <h6>R${item.contribution}</h6>
              </div>
            ))}
        </div>
      </Card>
    </Container>
  );
};

export default History;
