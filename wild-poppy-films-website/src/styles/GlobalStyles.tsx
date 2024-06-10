"use client";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Helvetica", sans-serif, Arial;
        // to change font
    }
    
    body {
        background: #fff9f0;
    }

    html body {
        width: 100%;
        overflow-x: auto;
    }
`;
export default GlobalStyles;
