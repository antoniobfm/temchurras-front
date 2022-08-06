import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 768px;
  padding: 24px;
  position: relative;

  .go-back {
    width: 100%;
    height: 56px;

    background: none;
    border: none;
    outline: none;

    font-family: 'futura-pt';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #272105;

    transition: 0.3s all;

    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  .verification-input {
    input {
      width: 90px;
    }
  }
`;
