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

		::-webkit-scrollbar {
			display: none;
		}
  }

  :root {
		font-size: 14px;
  }

  h1 {
    letter-spacing: -0.02em;
    font-size: 1.777rem;
		font-family: 'futura-pt';
  }

  h2 {
    font-size: 1.333rem;
		font-family: 'futura-pt';
  }

  h3 {
    font-size: 1.414rem;
		font-family: 'futura-pt';
  }

  p {
    font-size: 1rem;
    line-height: 17px;
		font-family: 'futura-pt';
  }

  h4 {
    font-size: 1rem;
		font-family: 'futura-pt';
  }

  h5 {
    font-size: 0.75rem;
		font-family: 'futura-pt';
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
    max-width: 768px;

    margin: auto;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: -72px;

    .go-back {
      height: 32px;
      padding: 0 24px;

      @media (min-width: 768px) {
        padding: 0;
      }

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
`;