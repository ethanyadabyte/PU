import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { MovieItem } from "../Components/Container/Movie/MovieItem";
import Cast from "../Components/Container/Cast/Cast";

const queryClient = new QueryClient();

function MovieItemPage(match) {
  return (
    <div className="bg-gray-700 p-4 ">
      <QueryClientProvider client={queryClient}>
        <Search Id={match.match.params.id} />
        <p className="text-2xl mt-7 ml-32 text-gray-200">Cast</p>
        <Cast ID={match.match.params.id} Type="movie" />
      </QueryClientProvider>
    </div>
  );
}

function Search(props: { Id: string }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.Id],
    () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${props.Id}?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;

  return (
    <div className="ml-20">
      <MovieItem
        Id={props.Id}
        overview={data?.overview || []}
        poster_path={data?.poster_path || []}
        original_title={data?.original_title || []}
        original_name={data?.original_name || []}
        first_air_date={data?.first_air_date || []}
        release_date={data?.release_date || []}
        status={data?.status || []}
        original_language={data?.original_language || []}
        runtime={data?.runtime || []}
        budget={data?.budget || []}
        revenue={data?.revenue || []}
        vote_average={data?.vote_average || []}
      />
    </div>
  );
}

export default MovieItemPage;
