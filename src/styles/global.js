import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
// default dark
:root {
  --body-background: #44444d;
  --background-header: #1c1c1f;
  --card-background: #1c1c1f;
  --item-background: #1c1c1f;
  --item-background-secondary: #282830;
  --item-background-secondary-active: rgb(43, 44, 49);
  --item-background-tertiary: #515161;

  --card-background-hover: #323238;
  --item-background-hover: #323238;
  --item-background-hover-secondary: #3d3d42;
  --item-background-hover-tertiary: #66667a;


  --card-inside-borders: #a8a8b3;
  --inside-borders: #64646b;
  --borders-lite: #606066bd;


  --logo-color-1: rgb(255, 255, 255);
  --logo-color-2: #ffcc33;

  --font-color: #fff;
  --font-color-secondary: rgb(187, 187, 187);
  --font-hover: #e1e1e6;


  --link-color: lightblue;

  --button-disabled-background: #bdbdd8;


  --gray-50: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-700: #323238;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #121214;
}

[data-theme="light"] {
  --body-background: rgb(235, 235, 235);
  --background-header: #ffffff;
  --card-background: #ffffff;
  --item-background: #ffffff;
  --item-background-secondary: #e6e6e6;
  --item-background-tertiary: #ffffff;


  --borders-lite: #58585e25;

  --card-background-hover: #fff;
  --item-background-hover: #fff;
  --item-background-hover-secondary: #d9d9df;
  --item-background-hover-tertiary: #b3b3c7;

  --font-hover: rgb(43, 43, 43);

  --button-disabled-background: #1c1c1f;


  --logo-color-1: rgb(34, 34, 34);


  --font-color: rgb(43, 43, 43);
  --font-color-secondary: rgb(102, 102, 102);


  --link-color: cornflowerblue;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.2s, color 0.1s;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--font-color);
    border-radius: 30px;
  }
}

p,
h1,
h2,
h3 {
  color: var(--font-color);
}

html,
body {
  overflow: hidden;
  height: 100vh;
  background-color: var(--body-background);
}

a {
  color: inherit;
  text-decoration: none;
  color: var(--link-color);
}

input:-webkit-autofill,
input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
}
input[data-autocompleted] {
    background-color: transparent !important;
}
`