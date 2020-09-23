import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
// If you don't know about react95 I like to use it in these code challenges
// It is one of my favorite things!
import { styleReset, Window, WindowHeader, WindowContent } from "react95";
// pick a theme of your choice
// some of my favorites are below
import original from "react95/dist/themes/original";
import theSixtiesUSA from "react95/dist/themes/theSixtiesUSA";
import matrix from "react95/dist/themes/matrix";
import highContrast from "react95/dist/themes/highContrast";
import ninjaTurtles from "react95/dist/themes/ninjaTurtles";

const ResetStyles = createGlobalStyle`
  ${styleReset}
`;
import Items from "./components/Items";

const App = () => (
  <div id='outer-container'>
    <ResetStyles />
    {/* Change the theme below to other options above for a different look */}
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
