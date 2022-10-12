import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        background-color: #3C3D3F;
        padding: 0;
        margin: 1;
        font-family: 'Libre Caslon Display', serif;
    }
`;

export default GlobalStyle;
