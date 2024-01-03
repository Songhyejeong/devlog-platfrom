import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Rubik', 'sans-serif';
    color: #393c41;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
  body{
    font-family: 'Rubik', 'sans-serif';
    color: #393c41;
    width: 100%;
    overflow-x: hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

`;
export default GlobalStyle;
