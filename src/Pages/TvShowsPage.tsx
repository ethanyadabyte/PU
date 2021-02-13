import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { SearchBox } from "../Components/SearchBox";
import { StorageIcon } from "../Components/Icons/StorageIcon";
import { Link } from "react-router-dom";
import { TvList } from "../Components/TvList";

const queryClient = new QueryClient();

function TvShowsPage() {
  const [search, setSearch] = useState("Search");
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
        <div className="bg-gray-700 rounded-md p-3 mx-10 ">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="ml-2 ">
                    <StorageIcon />
                  </div>
                </div>
                <div className="hidden md:block mr-96">
                  <ul className="ml-10 flex items-baseline space-x-4 ">
                    <Link to="/Movies">
                      <li className="text-red-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                        Movies
                      </li>
                    </Link>
                    <Link to="Tv Shows">
                      <li className="text-red-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                        Tv Shows
                      </li>
                    </Link>
                    <li className="text-pink-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                      Feed
                    </li>
                    <li className="text-pink-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                      List
                    </li>
                    <li className="text-pink-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                      About
                    </li>
                  </ul>
                </div>
                <Link to="/Search">
                  <div className=" ml-96">
                    <SearchBox value={search} onChange={setSearch} />
                  </div>
                </Link>
              </div>
              <button className="bg-transparent p-1 ml-0 rounded-full text-blue-500 hover:text-gray-300 focus:outline-none focus:ring-none text-xl">
                SignIn
              </button>
            </div>
          </div>
        </div>

        <Search query={search} Page={page} />
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

function Search(props: { query: string; Page: any }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.query, props.Page],
    () =>
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&page=${props.Page}`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;

  return (
    <div className="ml-20">
      <TvList results={data?.results || []} />
    </div>
  );
}

export default TvShowsPage;
