import React from "react";
import { useQuery } from "react-query";
import { MovieRow } from "../Components/MovieRow";

function TopRatedTv() {
  const { isLoading, error, data } = useQuery(
    ["TopRatedTv"],
    () =>
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US`
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

export default TopRatedTv;
