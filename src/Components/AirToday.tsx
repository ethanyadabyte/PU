import React from "react";
import { useQuery } from "react-query";
import { TvRow } from "../Components/TvRow";

function AirToday() {
  const { isLoading, error, data } = useQuery(
    ["AirToday"],
    () =>
      fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;
  return (
    <div className="-ml-7 mx-10 bg-gray-700">
      <div className="ml-20">
        <TvRow results={data?.results || []} />
      </div>
    </div>
  );
}

export default AirToday;
