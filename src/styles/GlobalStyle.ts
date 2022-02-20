import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    html { font-size: 62.5%; }
    body { font-size: 1.4rem; }


    h1,h2,h3,h4,h5,h6{
        font-family: "Poppins";
        font-weight: 600;
    }

    h1 { font-size: 2.4rem; }
    h2{font-size:2.2rem}
    h3{font-size:2rem}
    h4{font-size:1.8rem}
    h5{font-size:1.6rem}
    h6{font-size:1.4rem}
`;
