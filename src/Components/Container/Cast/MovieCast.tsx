import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { MovieCastList } from "./MovieCastList";

const queryClient = new QueryClient();

interface Id {
  ID?: any;
  Type?: any;
}
function MovieCast(props: Id) {
  return (
    <div className="dark:bg-gray-700">
      <QueryClientProvider client={queryClient}>
        <Search query={props.ID} Type={props.Type} />
      </QueryClientProvider>
    </div>
  );
}

function Search(props: { query?: string; Type?: any }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.query, props.Type],
    () =>
      fetch(
        `
        https://api.themoviedb.org/3/${props.Type}/${props.query}/movie_credits?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;

  return (
    <div className="-ml-7 mt-0">
      <MovieCastList results={data?.cast || []} />
    </div>
  );
}

export default MovieCast;
