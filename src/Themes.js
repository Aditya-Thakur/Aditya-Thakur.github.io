import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "var(--blue-background)",
    fontColor: "var(--black)",
    navBackground: "var(--blue-color)",
    navTileBackground: "var(--baby-pink-background)",
    oppColor: "var(--black)"
};

export const darkTheme = {
    body: "var(--indigo-background)",
    fontColor: "var(--black)",
    navBackground: "var(--indigo-color)",
    navTileBackground: "var(--pink-background)",
    oppColor: "var(--white)"
};

export const GlobalStyles = createGlobalStyle `
	body {
		background-color: ${(props) => props.theme.body};
	}
  .nav-container {
    background-color: ${(props) => props.theme.navBackground};
    color: ${(props) => props.theme.oppColor};
  }
  .nav-container .active {
    background-color: ${(props) => props.theme.navTileBackground};
    color: ${(props) => props.theme.fontColor};
  }
`;