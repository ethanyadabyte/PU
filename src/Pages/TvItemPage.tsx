import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { TvItem } from "../Components/Container/TV/TvItem";
import Cast from "../Components/Container/Cast/Cast";

const queryClient = new QueryClient();

function ItemPage(match) {
  return (
    <div className="bg-gray-700 p-4 ">
      <QueryClientProvider client={queryClient}>
        <Search Id={match.match.params.id} />
        <p className="text-2xl mt-7 ml-32 text-gray-200">Cast</p>
        <Cast ID={match.match.params.id} Type="tv" />
      </QueryClientProvider>
    </div>
  );
}

function Search(props: { Id: string }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.Id],
    () =>
      fetch(
        `https://api.themoviedb.org/3/tv/${props.Id}?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;

  return (
    <div className="ml-20">
      <TvItem
        Id={props.Id}
        overview={data?.overview || []}
        poster_path={data?.poster_path || []}
        original_name={data?.original_name || []}
        first_air_date={data?.first_air_date || []}
        release_date={data?.release_date || []}
        status={data?.status || []}
        original_language={data?.original_language || []}
        vote_average={data?.vote_average || []}
        number_of_episodes={data?.number_of_episodes || []}
        number_of_seasons={data?.number_of_seasons || []}
        episode_run_time={data?.episode_run_time || []}
      />
    </div>
  );
}

export default ItemPage;
