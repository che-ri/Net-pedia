import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import Layout from "../components/Layout";
import { Link} from "react-router-dom";

const Movies = () => {
    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState([]);
    const [popular,setPopular] = useState({});
    const GetMovie = async () => {
        //themoviedb에서 인기있는 영화목록을 가져왔다.
        const {
            data: { results },
        } = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=d7d1e7b43a6581ecf72c793c35505402"
        );

        //state에 영화목록을 저장한다.
        setIsloading(false);
        setPopular(results.shift());
        setData(results);
        
        //영화 포스터의 값을 얻고자 했다.
        //https://image.tmdb.org/t/p/w500//{소스값} 을 적으면, 이미지가 나타난다.
        //자세한 것은 https://stockant.tistory.com/564 블로그 참조.

    };

    //마운트가 끝나자마자 API를 가져올 것이다.
    useEffect(() => {
        GetMovie();

        // data.map((item) => console.log(item.poster_path));
    }, []);
    
    const StyledPopularMovie = Styled.main`
        position:relative;
        height:300px;
        display:flex;
        justify-content:space-between;
        padding:0 15%;
        margin-top:30px;
        font-size:15px;
        .popular__img{
            img{
                height:100%;
                width:200px;
                object-fit:fill;
            }
        }
        .popular__summary{
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            margin-left: 20px;
            h3{
                font-size:2em;
                top:0;
                color:#e50914;
                text-transform:uppercase;
            }
            h4{
                margin-bottom:10px;
                font-size:1.5em;
            }
            p{
                font-size:1em;
            }
            .popular__controls{
                display:flex;
                justify-content:space-between;
                a{
                    color:#fff;
                    border-bottom: 1px solid #fff
                }
            }
            
        } 
`;

    return (
        <Layout>
            <StyledPopularMovie>
                    <div className="popular__img">
                        <img src={`https://image.tmdb.org/t/p/original/${popular.poster_path}`} alt={popular.title} title={popular.title}/>
                    </div>
                    <div className="popular__summary">
                        <h3>Popular Movie</h3>
                        <div className="popular__info">
                            <h4>{popular.title}</h4>
                            <p>{popular.overview}</p>
                        </div>
                        <div className="popular__controls">
                            <span>평점 ★{popular.vote_average}
                                <span> ({popular.vote_count}명)</span>
                            </span>
                             <Link to="/test">더보기</Link>
                        </div>
                    </div>
            </StyledPopularMovie>
            <section className="movies__container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies__list">
                        {data.map((movie) => (
                            <MoviesData
                                //data안에 사용할 정보들을 prop으로 선언해주었다.
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                overview={movie.overview}
                                vote_average={movie.vote_average}
                                vote_count={movie.vote_count}
                                poster_path={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            />
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    );
};

function MoviesData({
    id,
    title,
    overview,
    vote_average,
    vote_count,
    poster_path,
}) {
    //data를 잘 가져왔다면, data 안에 title을 렌더링 할 것이다.
    return (
        <div className="movies__movie">
            <img src={poster_path} alt={title} title={title} />
            <h3 className="movie__title">{title}</h3>
            <p className="movie__summary">{overview}</p>
        </div>
    );
}

//data가 타입에 맞게 잘 가져왔는지 확인하는 작업이다.
MoviesData.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
};

export default Movies;
