import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: fixed;
  right: 0;
  z-index: 14;
  top: 0;
`;

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
}

export const Container = styled(motion.div)<ContainerProps>`
  width: calc(100vw - 48px);
  margin-right: 24px;
  margin-top: 2vh;

  background: rgba(249, 244, 224, 0.88);
  outline: 4px solid rgba(125, 125, 125, 0.15);
  box-shadow: 0px 2px 5px rgba(50, 50, 105, 0.15),
    0px 1px 1px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);
  border-radius: 4px;

  > div {
    padding: 16px 16px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  strong {
    padding-left: 16px;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #272105;
  }

  :hover {
    cursor: pointer;
  }
`;
