import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalContainer = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 7;
  /* background: rgba(10, 10, 11, 0.6); */
  /* backdrop-filter: blur(8px); */

  overflow-y: scroll;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 40px;

  ::-webkit-scrollbar {
    display: none;
  }

  #settings {
    width: 100%;
    max-width: 414px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    > div > div {
    }

    > button {
      margin-top: 1.5rem;
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;

  background: rgba(212, 208, 220, 0.06);
  box-shadow: 0px 4px 24px rgba(10, 9, 12, 0.25),
    inset 4px 4px 25px rgba(255, 255, 255, 0.05),
    inset -4px -4px 25px rgba(0, 0, 0, 0.25);
  // backdrop-filter: blur(45px);
  border-radius: 16px;
  box-sizing: border-box;
  /* border: 1px solid rgba(34, 36, 37, 1); */

  /* overflow: hidden; */
  overflow: hidden;

  flex: 1;
  padding: 24px 16px;

  .scroll {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .cart-menu {
    display: flex;
  }

  .inactive {
    padding-left: 16px;
    color: #e4e3e8;

    opacity: 0.25;
  }

  .divider {
    margin: 40px 16px;
    height: 2px;
    background: rgba(255, 255, 255, 0.05);
  }
`;
