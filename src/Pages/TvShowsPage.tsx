import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { TvList } from "../Components/TvList";

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
    <div className="bg-gray-700">
      <QueryClientProvider client={queryClient}>
        <div className="mx-36 mt-14 bg-gray-700">
          <Search Page={page} />
        </div>
        <div className="text-lg  flex justify-center mt-8 ml-4 pb-4">
          <button onClick={Min} className="px-4 m-1 bg-gray-500 rounded">
            {"<"}
          </button>
          <p className="px-3 m-1 bg-gray-500 rounded">{page}</p>
          <button
            onClick={Plus}
            className="px-4 m-1 focuse-ring-none bg-gray-500 rounded"
          >
            {">"}
          </button>
        </div>
      </QueryClientProvider>
    </div>
  );
}

function Search(props: { Page: any }) {
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
    <div className="ml-20">
      <TvList results={data?.results || []} />
    </div>
  );
}

export default TvShowsPage;
