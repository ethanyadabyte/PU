import React, { useState } from "react";

function Search(props: { query?: string; Page?: any }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.query, props.Page],
    () =>
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&page=${props.Page}&include_adult=false&query=${props.query}`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div></div>;
  return data?.results;
}

export const PageNav = () => {
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
  );
};
