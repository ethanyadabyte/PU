import React, { useState } from "react";
import { ItemList } from "../Components/ItemList copy";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default {
  title: "components/ItemList",
};
const queryClient = new QueryClient();

export const ItemListStory = (url: string) => {
  const [page, setPage] = useState(1);
  function Plus() {
    setPage((PP) => PP + 1);
  }
  function Min() {
    setPage((PP) => PP - 1);
  }
  return (
    <div className="mx-36">
      <QueryClientProvider client={queryClient}>
        <Items Page={page} />
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
};

function Items(props: { Page: any }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.Page],
    () =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&page=${props.Page}`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;

  return (
    <div className="ml-20">
      <ItemList results={data?.results || []} />
    </div>
  );
}
/*      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_bestv2/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg)`,
        backgroundRepeat: "no-repeat",
      }} */
