import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Grid1 } from "../Components/Container/All/Grid1";
import { TvList } from "../Components/Container/TV/TvList";

const queryClient = new QueryClient();

function TvShowsPage() {
  const [page, setPage] = useState(1);
  function Plus() {
    setPage((PP) => PP + 1);
  }
  function Min() {
    setPage((PP) => PP - 1);
  }
  if (page < 1) {
    setPage(1);
  }
  return (
    <div className="dark:bg-gray-700">
      <QueryClientProvider client={queryClient}>
        <div className="mx-36 mt-14">
          <TvShows Page={page} />
        </div>
        <div className="text-lg  flex justify-center mt-8 ml-4 pb-4">
          <button
            onClick={Min}
            className="px-4 m-1 bg-gray-500 rounded font-extrabold text-gray-700 hover:bg-gray-300 focus:outline-none"
          >
            {"<"}
          </button>
          <p className="px-3 m-1 bg-gray-500 rounded font-bold text-gray-900">
            {page}
          </p>
          <button
            onClick={Plus}
            className="px-4 m-1 bg-gray-500 rounded font-extrabold text-gray-700 hover:bg-gray-300 focus:outline-none"
          >
            {">"}
          </button>
        </div>
      </QueryClientProvider>
    </div>
  );
}

function TvShows(props: { Page: any }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.Page],
    () =>
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&page=${props.Page}`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div> {JSON.stringify(error)} </div>;

  return (
    <div className="flex justify-center">
      <Grid1 results={data?.results || []} />
    </div>
  );
}

export default TvShowsPage;
