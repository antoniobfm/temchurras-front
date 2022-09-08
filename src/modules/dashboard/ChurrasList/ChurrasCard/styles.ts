import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  .card-churras-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    h2 {
      color: var(--text-medium);
    }
  }
`;
