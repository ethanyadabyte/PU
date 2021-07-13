import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Grid1 } from "../Components/Container/All/Grid1";

const queryClient = new QueryClient();

function MoviePage() {
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
    <QueryClientProvider client={queryClient}>
      <div className="mx-36 mt-14">
        <Movies Page={page} />
      </div>
      <div className="text-lg  flex justify-center mt-8 pb-4">
        <button
          onClick={Min}
          className="px-4 m-1 bg-gray-300 dark:bg-gray-500 text-gray-700 rounded font-extrabold dark:text-gray-700 hover:bg-gray-300 focus:outline-none"
        >
          {"<"}
        </button>
        <p className="px-3 m-1 bg-gray-300 dark:bg-gray-500 text-gray-700 rounded font-bold dark:text-gray-900">
          {page}
        </p>
        <button
          onClick={Plus}
          className="px-4 m-1 bg-gray-300 dark:bg-gray-500 text-gray-700 rounded font-extrabold dark:text-gray-700 hover:bg-gray-300 focus:outline-none"
        >
          {">"}
        </button>
      </div>
    </QueryClientProvider>
  );
}

function Movies(props: { Page: any }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.Page],
    () =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&page=${props.Page}`
      ).then((res) => res.json()),
    {}
  );
  const Load = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  if (isLoading)
    return (
      <div className="ml-20">
        <ul className="grid mx-36 mt-14 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-none pl-4 dark:bg-gray-700 ">
          {Load.map((movie) => (
            <div className="my-3">
              <div className="w-220 h-330 rounded-md animate-pulse bg-gray-600 mx-2 "></div>
            </div>
          ))}
        </ul>
      </div>
    );

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;
  return (
    <div className="flex justify-center">
      <Grid1 results={data?.results || []} />
    </div>
  );
}

export default MoviePage;
