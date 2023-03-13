import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    --color-primary: rgba(95, 86, 69, 1);
    --color-white: hsla(22, 18%, 96%, 1);

    --border-radius: 4px;
}

body {

        font-family: arial,sans-serif;
        background: #fbfbf9;
        margin: 0;
    }
`;
