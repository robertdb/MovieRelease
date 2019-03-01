import { createGlobalStyle } from "styled-components";
import media from "./media";

export default createGlobalStyle`

    html {
        font-size: 62.5%;
        ${media.sm`
            font-size: 57.5%;
        `}
    }
    body {
        box-sizing: border-box;
        color: #9a918c;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.4;
        background-color: #000;
    }
    button,
    a:link,
    a:visited {
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }
    #root {
        overflow: hidden;
        background-color: #000
    }
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        text-align: left;
        margin-bottom: 2rem;
        text-aling: center;
        color: #fff
    }
    p {
        margin-bottom: 1.6rem;
    }
   
`;