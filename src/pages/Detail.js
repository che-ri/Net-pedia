import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const StyledDetail = Styled.div`
position:relative;
        background-color:rgba(0,0,0,0.6);
        .detail__splash{
            position:absolute;
            z-index:-1;
            width:100%;
            height:500px;
        }
        .detail__inner{
            display:flex;
            justify-content:space-between;
            height:500px;
            padding:7% 15%;
            font-size:15px;
        .detail__img{
            img{
                height:100%;
                width:250px;
                object-fit:fill;
            }
        }
        .detail__summary{
            margin-top:38px;
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            margin-left: 7%;
            h4{
                margin-bottom:20px;
                font-size:2rem;
            }
            p{
                font-size:1rem;
            }
        }
        .detail__controls{
                display:flex;
                justify-content:space-between;
                a{
                    width:20px;
                    margin-top:auto;
                    color:#fff;
                }
            } 
      }
`;

const Detail = props => {
    useEffect(() => {
        if (props === undefined) {
            props.history.push('/');
        }
    }, []);
    const movie = props.location.state;
    return (
        <Layout>
            <StyledDetail>
                <img className="detail__splash" alt={movie.title} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                <div className="detail__inner">
                    <div className="detail__img">
                        <img src={movie.poster_path} alt={movie.title} title={movie.title} />
                    </div>
                    <div className="detail__summary">
                        <div className="detail__info">
                            <h4>{movie.title}</h4>
                            <p>{movie.overview}</p>
                        </div>

                        <div className="detail__controls">
                            <div>
                                평점 ★{movie.vote_average}
                                <span> ({movie.vote_count}명)</span>
                                <p>장르 : {movie.genres.join(' ')}</p>
                            </div>
                            <Link to="/">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-left"
                                    class="svg-inline--fa fa-arrow-left fa-w-14"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </StyledDetail>
        </Layout>
    );
};

export default Detail;
