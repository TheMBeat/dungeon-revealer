import { css } from "@emotion/react";

export const globalStylesDark = css`
  @font-face {
    font-family: "folkard";
    src: url("${buildUrl("/fonts/folkard.woff")}") format("woff");
  }

  @font-face {
    font-family: "KnightsTemplar";
    src: url("${buildUrl("/fonts/KnightsTemplar.woff")}") format("woff");
  }

  * {
    box-sizing: border-box;
  }

  button {
    font: unset;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 16px;
    overflow: hidden;
    background-color: #121212; /* Dark background */
    color: #f5f5f5; /* Light text */
  }

  #root {
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background: #424242; /* Dark track */
  }

  input[type="range"]::-webkit-slider-thumb {
    background: #f5f5f5; /* Light thumb */
  }
`;
