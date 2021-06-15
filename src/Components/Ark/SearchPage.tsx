import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ItemList } from "../Components/ItemList";

const queryClient = new QueryClient();

export function SearchPage(SearchQ: string) {
  const [page, setPage] = useState(1);
  function Plus() {
    setPage((PP) => PP + 1);
  }
  function Min() {
    setPage((PP) => PP - 1);
  }

  return (
    <div className="bg-gray-700 p-4 ">
      <QueryClientProvider client={queryClient}>
        <Search query={SearchQ} Page={page} />
        <div className="text-lg  flex justify-center mt-8 ml-4">
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

export function Search(props: { query?: string; Page?: any }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.query, props.Page],
    () =>
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&page=${props.Page}&include_adult=false&query=${props.query}`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading)
    return (
      <h1 className="text-green-200 text-6xl text-center py-96">Loading...</h1>
    );
  if (error)
    return <h1 className="text-red-500 text-6xl text-center py-96">Error</h1>;
  if (props.query.length <= 0) {
    return (
      <h1 className="text-green-200 text-6xl text-center py-96 animate-pulse ">
        Please Enter What You Are Searching For
      </h1>
    );
  }
  return (
    <div className="ml-20">
      <ItemList results={data?.results || []} />
    </div>
  );
}
