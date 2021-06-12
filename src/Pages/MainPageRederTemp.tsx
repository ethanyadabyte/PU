import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import MoviePage from "./MoviePage";
import TvShowsPage from "./TvShowsPage";
import MovieItemPage from "./MovieItemPage";
import TvItemPage from "./TvItemPage";
import FeedPage from "./FeedPage";
import Player from "../Components/Video/VideoPlayer";
import VideoJs from "../Components/Video/Video";
import { NavBar } from "../Components/NavBar";
import { ItemList } from "../Components/ItemList";
import { Link } from "react-router-dom";
import { StorageIcon } from "../Components/Icons/StorageIcon";
import { SearchBox } from "../Components/SearchBox";
import CastItemPage from "./CastItemPage";

const queryClient = new QueryClient();

function Router() {
  const [search, setSearch] = useState("");
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
  if (search.length <= 0) {
  }
  return (
    <div className="bg-gray-700 h-screen scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-800 scrollbar-track-rounded-sm scrollbar-thumb-rounded-sm">
      <div className="overflow-visible ">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="h-20 bg-gray-700 p-4">
              <div className="flex justify-between py-5">
                <div className="flex">
                  <div className=" mr-10 ml-14">
                    <Link to="/MoviesPage">
                      <StorageIcon />
                    </Link>
                  </div>
                  <div className="hidden lg:block">
                    <ul className="flex items-baseline space-x-4">
                      <Link to="/MoviesPage">
                        <li className="text-red-500 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium ">
                          Movies
                        </li>
                      </Link>
                      <Link to="/ShowsPage">
                        <li className="text-red-500 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                          Shows
                        </li>
                      </Link>
                      <li className="text-pink-600 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                        Library
                      </li>
                      <Link to="/Feed">
                        <li className="text-pink-600 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                          Feed
                        </li>
                      </Link>
                      <li className="text-pink-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                        About
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="flex">
                    <Link to="/Search">
                      <SearchBox value={search} onChange={setSearch} />
                    </Link>
                    <button className="mx-14 text-blue-500 hover:text-gray-400 focus:outline-none text-xl">
                      SignIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Switch>
              <Route path="/" exact component={MoviePage} />
              <Route path="/MoviesPage" exact component={MoviePage} />
              <Route path="/ShowsPage" exact component={TvShowsPage} />
              <Route path="/Feed" exact component={FeedPage} />
              <Route path="/Player/:id/:type" exact component={Player} />
              <Route path="/Item/:id/movie" exact component={MovieItemPage} />
              <Route path="/Item/:id/tv" exact component={TvItemPage} />
              <Route path="/item/:id/person" exact component={CastItemPage} />
              <Route path="/Video/:id/" exact component={VideoJs} />
              <Route path="/Search" exact>
                <div className="mx-36 mt-14 ">
                  <Search query={search} Page={page} />
                </div>
                <div className="text-lg  flex justify-center mt-8 ml-4">
                  <button
                    onClick={Min}
                    className="px-4 m-1 bg-gray-500 rounded"
                  >
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
              </Route>
            </Switch>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
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

export default Router;
//https://api.themoviedb.org/3/search/multi?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&query=samurai&page=500&include_adult=false
