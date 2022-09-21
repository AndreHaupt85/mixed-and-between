import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box
    }
    body {
        background-color: #eee;
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;