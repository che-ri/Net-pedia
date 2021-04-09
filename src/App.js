import { GlobalStyle } from "./modules/GlobalStyle";
import React from "react";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <React.StrictMode>
            <GlobalStyle />
            <AppRouter />
        </React.StrictMode>
    );
};
export default App;
