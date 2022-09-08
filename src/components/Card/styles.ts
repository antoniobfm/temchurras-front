import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Card = styled(motion.div)`
  width: 100%;
  max-width: 768px;
  position: relative;
  z-index: 2;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(50, 50, 105, 0.15),
    0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  padding: 24px 16px;

  .card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .card-header-title {
      h1 {
        color: ${props => props.theme.colors.text};
      }

      h2 {
        color: ${props => props.theme.colors.text_medium_emphasis};
      }

      h3 {
        color: ${props => props.theme.colors.text_medium_emphasis};
      }

      h4 {
        font-family: 'futura-pt';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        /* identical to box height */

        color: rgba(0, 0, 0, 0.75);
      }

      .card-header-details {
        padding-top: 8px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        column-gap: 24px;

        .card-header-details-item {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          column-gap: 8px;
        }
      }
    }

    .card-header-actions {
      .card-header-actions-item {
        transition: 0.3s all;

        :hover {
          cursor: pointer;
        }
      }
    }
  }

  .card-content {
    padding-top: 24px;

    p {
      padding-bottom: 24px;

      font-family: 'futura-pt';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      color: #413813;
    }

    h4 {
      font-family: 'futura-pt';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      color: rgba(0, 0, 0, 0.77);
    }

    .error {
      font-family: 'futura-pt';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      padding-top: 8px;
      color: red;
    }

    .link-and-copy-link {
      display: flex;

      column-gap: 16px;

      button {
        flex-shrink: 0;
        width: 56px;
        height: 56px;
        background: #fafafa;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
      }
    }

    #churras-link {
      width: 100%;
      height: 56px;

      padding-left: 24px;

      outline: none;
      background: #fafafa;
      border: 1px solid #e6e6e6;
      border-radius: 4px;

      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      color: rgba(0, 0, 0, 0.75);
    }
  }
`;
