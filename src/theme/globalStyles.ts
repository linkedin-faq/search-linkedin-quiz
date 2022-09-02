import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    font-family: -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, 
    Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", 
    "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  }
  
  html,
  body,
  #root,#root > div{
    margin:0 auto;
    height: 100%;
  }
`;

export default GlobalStyle;