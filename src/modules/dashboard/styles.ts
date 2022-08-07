import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  min-height: 100vh;
  background-color: #ffd836;

  // media query desktop
  @media (min-width: 768px) {
    width: 100vw;
  }

  img {
    height: 122px;
    object-fit: cover;
    width: 100%;
  }

  .header {
    margin: auto;
    max-width: 768px;

    .header-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 40px 24px 24px;

      @media (min-width: 768px) {
        padding: 40px 0;
      }

      background-image: url() ('/assets/background.png');
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
      color: ${props => props.theme.colors.text};
    }

    .organizing {
      margin: auto;
      max-width: 768px;

      > h4 {
        line-height: 17px;

        letter-spacing: -0.02em;

        padding-left: 24px;

        @media (min-width: 768px) {
          padding: 0;
        }

        color: #2f2e2c;
      }

      .organizing-list {
        padding-top: 16px;

        @media (min-width: 768px) {
          padding: 16px 0 0;

          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 24px;
        }

        padding-left: 24px;
        padding-right: 24px;

        display: flex;
        align-items: center;

        overflow-x: scroll;

        column-gap: 24px;

        padding-bottom: 4px;
        margin-bottom: -4px;

        ::-webkit-scrollbar {
          display: none;
        }

        .organizing-list-item {
          flex: 1 0 calc(100% / 1.9);

          padding: 24px 16px;

          background: #ffffff;
          box-shadow: 0px 2px 5px rgba(50, 50, 105, 0.15),
            0px 1px 1px rgba(0, 0, 0, 0.05);
          border-radius: 4px;

          h4 {
            color: ${props => props.theme.colors.text_medium_emphasis};
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
        }

        .organizing-list-add {
          flex: 0 0 calc(100% / 1.9);

          display: flex;
          align-items: center;
          justify-content: center;

          opacity: 1;

          position: relative;

          overflow: hidden;

          .organizing-list-add-content {
            width: 100%;
            height: 100%;

            padding: 24px 16px;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 4px;
            opacity: 0.9;

            row-gap: 8px;

            z-index: 1;

            box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.8);

            :hover {
              cursor: pointer;
            }
          }

          img {
            position: absolute;
            top: 0;
            left: 0;

            border-radius: 4px;
            z-index: 0;
          }

          h4 {
            color: white;
          }
        }
      }
    }
  }
`;
