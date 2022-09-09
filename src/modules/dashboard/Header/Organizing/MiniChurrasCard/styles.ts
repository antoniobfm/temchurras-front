import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  flex: 1 0 calc(100% / 1.9);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px;
  gap: 4px;

  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(50, 50, 105, 0.15),
    0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  h4 {
    color: var(--text-medium);
  }

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  :hover {
    cursor: pointer;
  }
`;
