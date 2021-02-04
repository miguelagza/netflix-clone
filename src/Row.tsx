import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import axios from './axios'; // instance is exported as default
import './Row.css';

export const base_url: string = 'https://image.tmdb.org/t/p/original/';

interface IProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row: React.FC<IProps> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const request: AxiosResponse<any> = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              style={{
                display:
                  `${base_url}${movie.poster_path}` ===
                  'https://image.tmdb.org/t/p/original/null'
                    ? 'none'
                    : '',
              }}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt=''
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
