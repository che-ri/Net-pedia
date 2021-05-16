import React, { useState, useEffect } from 'react';
import Header from './Header';
const Layout = ({ children }) => {
    const [isLoading, setIsloading] = useState(true);
    const Loading = async () => {
        setIsloading(false);
    };

    useEffect(() => {
        Loading();
    }, []);
    return (
        <>
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
        </>
    );
};
export default Layout;
