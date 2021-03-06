import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button, button:focus{
  outline: none;
  background: transparent;
  border: none;
}

button:active{
  outline: none;
  background: transparent;
  border: none;
}

h2 {
  font-family: 'Work Sans', sans-serif;
  font-size: 5rem;
  color: #CDFD34;
}

h3 {
  color: white;
}

p {
  padding: 3rem 0rem;
  color: black;
  font-size: 1.4rem;
  line-height: 150%;
}

h4 {
  font-size: 2rem;
  font-weight: bold;
  color: #CDFD34;
}

a {
  text-decoration: none;
  font-style: 1.1rem;
}

a:link { text-decoration: none; color: #A7A7A7}

a:active { text-decoration: none; color: #A7A7A7}

a:visited { text-decoration: none; color: #A7A7A7}


span {
  color: white;
}
`;

export { GlobalStyle };
