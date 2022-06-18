import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html {
    font-family: 'Ubuntu Mono', monospace;
    height: 100%;
    background: #00aeb0;
    transition: background 0.4s ease;
    button{
      font-family: 'Ubuntu Mono', monospace;
    }
  }
  
  #root{
    max-width: 500px;
    margin: 25px auto;
    overflow: hidden;
    border: 1px solid #4C5A65;
    border-radius: 10px;
    position: relative
  }
`;

export default Global;
