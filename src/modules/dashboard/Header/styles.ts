import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
  margin: auto;
  background-color: var(--primary);
  padding-bottom: 16px;

  @media (min-width: 768px) {
    padding: 0px 24px 16px;
  }

  .header-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 24px 24px;

    @media (min-width: 768px) {
      margin: auto;
      max-width: 768px;
      padding: 40px 0 24px;
    }
  }

  button {
    background: none;
    outline: none;
    border: none;

    transition: 0.3s all;

    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  h1 {
    color: var(--text);
  }
`;
