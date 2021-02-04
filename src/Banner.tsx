import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './request';
import { base_url } from './Row';

interface Props {}

const Banner: React.FC<Props> = () => {
  const [movie, setMovie] = useState<any>([]);

  function truncate(str: string, n: number): string {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const request: any = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
        "${base_url}${movie?.backdrop_path}"
        )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  );
};

export default Banner;
