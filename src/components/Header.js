import React from "react";
import Styled from "styled-components";
import { Link, withRouter } from "react-router-dom";


const StyledHeader = Styled.header`
height:40px;
background:black;
    .inner{
        width:95%;
        height:100%;
        margin:auto;
        background:pink;
    }
`;

const Header = () => {
    return <StyledHeader>
        <div className="inner">
            <div className="header__column--left">
                <div className="logo">
                    <span>NETPEDIA</span>
                </div>
                <div className="controls">
                    <Link to="/test"></Link>
                </div>
                
            </div>
            <div className="header__column--right">
                
            </div>
        </div>
    </StyledHeader>;
};

export default withRouter(Header);
