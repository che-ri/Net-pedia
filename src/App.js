import React from "react";
import axios from "axios";
import MoviesData from "./MoviesData";

class App extends React.Component {
    state = {
        isLoading: true,
        data: [],
    };

    getMovie = async () => {
        //themoviedb에서 인기있는 영화목록을 가져왔다.
        const {
            data: { results },
        } = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=d7d1e7b43a6581ecf72c793c35505402"
        );

        //state에 영화목록을 저장한다.
        this.setState({ isLoading: false, data: results });
        console.log(this.state.data);

        //영화 포스터의 값을 얻고자 했다.
        //https://image.tmdb.org/t/p/w500//{소스값} 을 적으면, 이미지가 나타난다.
        //자세한 것은 https://stockant.tistory.com/564 블로그 참조.
        this.state.data.map((item) => {
            console.log(item.poster_path);
        });
    };

    //마운트가 끝나자마자 API를 가져올 것이다.
    componentDidMount() {
        this.getMovie();
    }

    render() {
        //state안에 있는 key들을 쉽게 사용하기 위해 es6 문법을 사용했다.
        const { isLoading, data } = this.state;

        return (
            <div>
                {isLoading
                    ? "Loading"
                    : data.map((movie) => {
                          console.log(movie);
                          return (
                              <MoviesData
                                  //data안에 사용할 정보들을 prop으로 선언해주었다.
                                  id={movie.id}
                                  title={movie.title}
                                  overview={movie.overview}
                                  vote_average={movie.vote_average}
                                  vote_count={movie.vote_count}
                              />
                          );
                      })}
            </div>
        );
    }
}

export default App;
