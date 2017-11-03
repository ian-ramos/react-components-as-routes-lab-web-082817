import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesArr = movies.map(movie => {
    return (
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.time} minutes</p>
        <p>{movie.metascore} from Metacritic</p>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesArr}
    </div>
  );
};

export default Movies;
