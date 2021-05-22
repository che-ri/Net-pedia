import React, { useEffect } from 'react';
import Styled from 'styled-components';

const StyledDetail = Styled.div`
width:100%;
height:100%;
text-align: center;
`;

const Detail = props => {
    useEffect(() => {
        if (props === undefined) {
            props.history.push('/');
        }
    }, []);
    console.log(props);
    const movie = props.location.state;
    return (
        <StyledDetail>
            <h1>{movie.title}</h1>
            <img src={movie.poster_path} alt={movie.title} title={movie.title} />
            <p>평점 ★{movie.vote_average}</p>
            <h3 className="movie__title">{movie.title}</h3>
            <p>{movie.overview}</p>
        </StyledDetail>
    );
};

export default Detail;
