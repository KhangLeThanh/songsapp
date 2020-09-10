import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        "&&&&:hover:before": {
          borderBottom: "0 none"
        }
      }
    }
  },
  palette: {
    secondary: {
      main: "#E33E7F",
      "&:first-child": {
        color: "#6fc13e !important",
      },
    },
  },
  typography: {
    "fontFamily": `"Montserrat", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "color":"#fff",
    "h1":{
      color:"#fff",
      fontWeight:'700'
    },
    "h2":{
      color:"#fff",
      fontWeight:'700'
    },
    "h3":{
      color:"#fff",
    },
    "h4":{
      color:"#fff",
    },
    "h5":{
      color:"#fff",
    },
    "body2":{
      fontWeight:'500',
      color:"#fff",
    },
    "body1":{
      fontWeight:'300',
      color:"#fff",
    }
  }
});
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
