import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:before {
        box-sizing: border-box;
    }

    &:after {
        box-sizing: border-box;
    }
}

html {
    --color-primary: rgba(95, 86, 69, 1);
    --color-primary-hover: rgba(74,72,32,1);
    --color-white: hsla(22, 18%, 96%, 1);

    --border-radius: 4px;
    --form-element-height: 40px;
}

body {

        font-family: arial,sans-serif;
        background: #fbfbf9;
        margin: 0;
    }
`;
