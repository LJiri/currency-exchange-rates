import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --color-primary: rgba(95, 86, 69, 1);
    --color-primary-hover: rgba(74,72,32,1);
    --color-white: hsla(22, 18%, 96%, 1);

    --border-radius: 4px;
    --form-element-height: 40px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: arial,sans-serif;

    &:before {
        box-sizing: border-box;
    }

    &:after {
        box-sizing: border-box;
    }
}


body {
        background: #fbfbf9;
    }
`;
