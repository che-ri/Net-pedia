import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviesData from "./MoviesData";

const App = () => {
    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState([]);

    const getMovie = async () => {
        //themoviedb에서 인기있는 영화목록을 가져왔다.
        const {
            data: { results },
        } = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=d7d1e7b43a6581ecf72c793c35505402"
        );

        //state에 영화목록을 저장한다.
        setIsloading(false);
        setData(results);
        console.log(data);

        //영화 포스터의 값을 얻고자 했다.
        //https://image.tmdb.org/t/p/w500//{소스값} 을 적으면, 이미지가 나타난다.
        //자세한 것은 https://stockant.tistory.com/564 블로그 참조.
    };

    //마운트가 끝나자마자 API를 가져올 것이다.
    useEffect(() => {
        getMovie();
        data.map((item) => {
            console.log(item.poster_path);
        });
    }, []);

    return (
        <section className="container">
            {isLoading ? (
                <div className="loader">
                    <span className="loader__text">Loading...</span>
                </div>
            ) : (
                <div className="movies">
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
    );
};
export default App;
