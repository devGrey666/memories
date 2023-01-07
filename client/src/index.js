import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import {createRoot} from "react-dom/client";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";
import theme from "./theme";
import {ThemeProvider} from "@mui/styles";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const container = document.getElementById("root")
// console.log("store", store);
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>

    </Provider>)
