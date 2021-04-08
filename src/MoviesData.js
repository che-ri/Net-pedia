import React from "react";
import PropTypes from "prop-types";

function MoviesData({ id, year, title, summary, poster }) {
  //data를 잘 가져왔다면, data 안에 title을 렌더링 할 것이다.
  return <h4>{title}</h4>;
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
