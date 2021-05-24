import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Header from './Header';
const Layout = ({ children }) => {
    const [isLoading, setIsloading] = useState(true);
    const Loading = async () => {
        setIsloading(false);
    };
    useEffect(() => {
        Loading();
    }, []);

    const StyledLayout = Styled.div`
    width: 1000px;
    margin : auto;
    `;
    return (
        <StyledLayout>
            {isLoading ? (
                <div className="loader">
                    <span className="loader__text">Loading...</span>
                </div>
            ) : (
                <div className="App">
                    <Header />
                    {children}
                </div>
            )}
        </StyledLayout>
    );
};
export default Layout;
