import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Link as HyperLink,
  Stack,
} from "@mui/material";

import "./App.css";
import {
  useColorMode,
} from "./contexts";
import { Header } from "./components/Header/Header";
import { Claim } from "./components/Claim";
import { Close } from "./components/Close";
import { Create } from "./components/Create";

const WHITESPACE = "\u00A0";

type AboutProps = {};

const About = (
  props : AboutProps,
) => {
  return (<div>You need a link!</div>);
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

// eslint-disable-next-line
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

function App() {
  const colorModeCtx = useColorMode();

  React.useEffect(() => {}, [colorModeCtx.mode]);

  const theme = React.useMemo(
    () => {
      let mode;
      if (colorModeCtx.mode === "dark" || !colorModeCtx.mode) {
        mode = "dark";
      } else {
        mode = "light";
      }

      return createTheme({
        palette: {
          mode,
        },
      })
    },
    [colorModeCtx.mode]
  );

  const { width } = useWindowDimensions();

  return (
    <div className="App" style={{ backgroundColor: "transparent" }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Header narrow={width < 670}/>
          <Box
            maxWidth="60ch"
            width="calc(100% - 60px)"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Box height="40px" />
            <Switch>
              <Route path="/gumdrop/create" component={Create} />
              <Route path="/gumdrop/claim" component={Claim} />
              <Route path="/gumdrop/close" component={Close} />
              <Route path="/gumdrop/" component={About} />
            </Switch>
            <Box height="80px" />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
