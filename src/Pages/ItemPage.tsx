import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Item } from "../Components/Item";
import { SearchBox } from "../Components/SearchBox";
import { StorageIcon } from "../Components/Icons/StorageIcon";
import { Link } from "react-router-dom";
import Cast from "../Components/Cast";

const queryClient = new QueryClient();

function ItemPage(match) {
  const [search, setSearch] = useState("Search");
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
                    <Link to="/Tv Shows">
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
                <div className=" ml-96">
                  <SearchBox value={search} onChange={setSearch} />
                </div>
              </div>
              <button className="bg-transparent p-1 ml-0 rounded-full text-blue-500 hover:text-gray-300 focus:outline-none focus:ring-none text-xl">
                SignIn
              </button>
            </div>
          </div>
        </div>

        <Search
          query={search}
          Id={match.match.params.id}
          Type={match.match.params.type}
        />

        <p className="text-2xl mt-7 ml-32 text-gray-200">Cast</p>
        <Cast ID={match.match.params.id} Type={match.match.params.type} />
      </QueryClientProvider>
    </div>
  );
}

function Search(props: { query: string; Id: string; Type: string }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.query],
    () =>
      fetch(
        `https://api.themoviedb.org/3/${props.Type}/${props.Id}?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;

  return (
    <div className="ml-20">
      <Item
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

export default ItemPage;
