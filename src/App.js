import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js";
import { useStickyState } from "./LocalStorage";
import NavBar from "./NavBar/NavBar.jsx";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
    const [theme, setTheme] = useStickyState("light", "theme");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <div className="navbar">
                    <NavBar onToggle={themeToggler} theme={theme} />
                </div>
                <div className="background">
                    <h1>Coming Soon</h1>
                    <h3>{theme} mode activated</h3>
                </div>
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;