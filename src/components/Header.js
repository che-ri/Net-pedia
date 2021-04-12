import React from "react";
import Styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const StyledHeader = Styled.header`
    height:40px;
    width:100%;
    background:#141414;
    font-size:15px;
    display:flex;
    justify-content:space-between;
    height:100%;
    padding:10px;
    margin:auto;
    .header__column--left{
        display:flex;
        align-items:center;
        height:100%;
        .logo{
            font-size:0;
            margin-right:15px;
            p{
                font-size: 1.5rem;
                font-weight:600;
                color:#e50914;
                span{
                    color:white;
                }
            }
        }
        .controls{
            height:100%;
            a{
                color:white;
                font-size:1rem;
                margin:5px;
            }
        }
    }
    .header__column--right{
        height:25px;
        margin-top:auto;
        position:relative;
        font-size:15px;
        input{
            background:#141414;
            font-size:1rem;
            color:white;
            &::placeholder{
            padding: 7px;
            }
            &:focus{
                border-bottom:1px solid white;
            }
            
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <div className="header__column--left">
                <div className="logo">
                    <p>
                        NET<span>PEDIA</span>
                    </p>
                </div>
                <div className="controls">
                    <Link to="/test">영화</Link>
                    <Link to="/test">TV 프로그램</Link>
                    <Link to="/test">책</Link>
                </div>
            </div>
            <div className="header__column--right">
                <input type="text" placeholder="검색" />
            </div>
        </StyledHeader>
    );
};

export default withRouter(Header);
