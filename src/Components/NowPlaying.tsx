import React from "react";
import { useQuery } from "react-query";
import { MovieRow } from "./MovieRow";

function NowPlaying() {
  const { isLoading, error, data } = useQuery(
    ["NowPlaying"],
    () =>
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&page=1`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;
  return (
    <div className="-ml-7 mx-10 bg-gray-700">
      <div className="ml-20">
        <MovieRow results={data?.results || []} />
      </div>
    </div>
  );
}

export default NowPlaying;
