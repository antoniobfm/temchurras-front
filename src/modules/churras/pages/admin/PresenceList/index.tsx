import { Card } from '@/components/Card/styles';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ManagePresenceModal from './ManagePresenceModal';
import { PresenceListItem, PresenceListWrapper } from './styles';

const PresenceList: React.FC = () => {
  const [showManagePresenceModal, setShowManagePresenceModal] = useState(false);
  const [selectedPresence, setSelectedPresence] = useState<string>('');

  const router = useRouter();
  const churras_slug = router.query.churras_slug as string;

  const presenceList = useSelector((state: RootState) => {
    const churrasData = state.user.churras.filter(
      churras => churras.id === churras_slug,
    )[0];
    const organizing = state.user.organizing.filter(
      churras => churras.id === churras_slug,
    )[0];
    return { ...churrasData, ...organizing };
  });

  const handleManagePresence = useCallback((id: string) => {
    setShowManagePresenceModal(true);
    setSelectedPresence(id);
  }, []);

  return (
    <>
      {showManagePresenceModal && (
        <ManagePresenceModal
          setState={setShowManagePresenceModal}
          contributor_id={selectedPresence}
        />
      )}
      <Card>
        <div className="card-header">
          <div className="card-header-title">
            <h1>Lista de presença</h1>
          </div>
        </div>
        <div className="card-content">
          <PresenceListWrapper>
            {presenceList.presence_list &&
              presenceList.presence_list.map(item => (
                <PresenceListItem
                  confirmed={!!item.amount_contributed}
                  onClick={() => handleManagePresence(item.id)}
                >
                  <div>
                    <div className="check" />
                    <h3>{item.name}</h3>
                  </div>
                  <h3>
                    {item.amount_contributed
                      ? `R$${item.amount_contributed}`
                      : '-'}
                  </h3>
                </PresenceListItem>
              ))}
          </PresenceListWrapper>
        </div>
      </Card>
    </>
  );
};

export default PresenceList;
