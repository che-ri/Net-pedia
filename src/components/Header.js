import React from "react";
import Styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const StyledHeader = Styled.header`
height:40px;
width:100%;
background:#141414;
    .inner{
        display:flex;
        justify-content:space-between;
        height:100%;
        padding:0 15px;
        margin:auto;
        .header__column--left{
            display:flex;
            height:25px;
            margin:auto 0;
            .logo{
                font-size:0;
                margin:auto 15px auto 0;
                p{
                    font-size: 1rem;
                    font-weight:600;
                    color:#e50914;
                    span{
                        color:white;
                    }
                }
            }
            .controls{
                font-size:0;
                height:max-content;
                margin: auto 0;
                a{
                    color:white;
                    font-size:.6rem;
                    margin:5px;
                }
            }
        }
        .header__column--right{
            height:25px;
            margin:auto 0;
                position:relative;
            input{
                background:#141414;
                font-size:.6rem;
                color:white;
                &::placeholder{
                padding: 7px;
                }
                &:focus{
                    border-bottom:1px solid white;
                }
                
            }
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <div className="inner">
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
            </div>
        </StyledHeader>
    );
};

export default withRouter(Header);
