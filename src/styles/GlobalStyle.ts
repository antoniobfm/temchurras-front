import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:not(input, textarea){
    -webkit-touch-callout: none;
    -webkit-user-select: none; // locks fields on Safari
    -khtml-user-select: none; // locks fields on Safari
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: futura-pt, Arial, Helvetica, sans-serif;
    font-style: normal;

		::-webkit-scrollbar {
			display: none;
		}
  }

  :root {
		font-size: 14px;

    --primary: #ffd836;
    --text: #2F2E2C;
    --text-medium: #807D8E;
  }

  h1 {
    font-weight: 700;
    font-size: 1.777rem;
    line-height: 32px;
  }

  h2 {
    font-weight: 700;
    font-size: 1.333rem;
    line-height: 24px;
  }

  h3 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 18px;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 18px;
    color: var(--text-medium);
  }

  a {
    color: var(--high-emphasis);
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  button {
    font-family: futura-pt, Arial, Helvetica, sans-serif;
  }

  input {
    font-family: futura-pt, Arial, Helvetica, sans-serif;
  }

  body:not(.user-is-tabbing) button:focus,
	body:not(.user-is-tabbing) input:focus,
	body:not(.user-is-tabbing) select:focus,
	body:not(.user-is-tabbing) textarea:focus {
		outline: none;
	}


  .actions {
    width: 100%;
    max-width: calc(768px + 48px);

    margin: auto;
    margin-top: -72px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .go-back {
      height: 32px;
      padding: 0 24px;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      transition: 0.3s all;

      span {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */

        color: #292d32;
        padding-top: 2px;
      }

      :hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }

  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;

    background: ${props => props.theme.colors.primary};
    background-image: url("/assets/background-fadeless.png");
    background-size: 100%;
    background-repeat: repeat;
    background-blend-mode: luminosity;

    @media (min-width: 768px) {
      background-size: auto;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    row-gap: 24px;

    img {
      width: 30vw;

      @media (min-width: 768px) {
        width: 20vw;
        max-width: 214px;
      }

      border: 3px solid #000000;
      box-shadow: 0px 60px 77px #706433;
      border-radius: 16px;

      position: relative;
    }
  }
`;
