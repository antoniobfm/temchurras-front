import React from 'react';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <div className="loader">Loading...</div>
    </Container>
  );
};

export default Loading;
