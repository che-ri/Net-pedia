import React from "react";
import PropTypes from "prop-types";

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

export default MoviesData;
