import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset, Window, WindowHeader, WindowContent } from "react95";
// pick a theme of your choice
import original from "react95/dist/themes/original";

const ResetStyles = createGlobalStyle`
  ${styleReset}
`;
import Items from "./components/Items";

const App = () => (
  <div id='outer-container'>
    <ResetStyles />
    <ThemeProvider theme={original}>
      <Window id='window'>
        <WindowHeader id='header'>FetchRewardsCodeChallenge.exe</WindowHeader>
        <WindowContent id='window-content'>
          <Items />
        </WindowContent>
      </Window>
    </ThemeProvider>
  </div>
);

export default App;
