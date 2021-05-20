import React from 'react';
import { GlobalStyle } from './modules/GlobalStyle';
import AppRouter from './components/AppRouter';

const App = () => {
    return (
        <React.StrictMode>
            <GlobalStyle />
            <AppRouter />
        </React.StrictMode>
    );
};
export default App;
