import { createGlobalStyle } from "styled-components";
import { Colors } from "../index";
import "rsuite/dist/styles/rsuite-default.css";

const GlobalStyles = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  
  body {
    font-size: 2rem;
    line-height: 1.9rem;
    color: ${Colors.textPrimary}; 
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow-x: hidden;
    min-width: 320px;
  }
      
  iframe {
    width: 100%;
    height: 50vh;
    margin: 0;
  }
`;

export default GlobalStyles;
