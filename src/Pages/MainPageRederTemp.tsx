import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import MoviePage from "./MoviePage";
import TvShowsPage from "./TvShowsPage";
import MovieItemPage from "./MovieItemPage";
import TvItemPage from "./TvItemPage";
import Cast from "../Components/Container/Cast/Cast";
import { StorageIcon } from "../Components/Icons/StorageIcon";
import { SearchBox } from "../Components/SearchBox";
import FeedPage from "./FeedPage";
import Player from "../Components/Video/VideoPlayer";
import { ItemList } from "../Components/ItemList";
import VideoJs from "../Components/Video/Video";

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
            <div className="bg-gray-700 rounded-md p-3 ml-14 mr-10 pt-7 ">
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
                        <Link to="/MoviesPage">
                          <li className="text-red-500 hover:bg-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium ">
                            Movies
                          </li>
                        </Link>
                        <Link to="/ShowsPage">
                          <li className="text-red-500 hover:bg-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                            Tv Shows
                          </li>
                        </Link>
                        <Link to="/Feed">
                          <li className="text-pink-600 hover:bg-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                            Feed
                          </li>
                        </Link>

                        <li className="text-pink-600 hover:bg-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                          List
                        </li>

                        <li className="text-pink-700 hover:bg-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                          About
                        </li>
                      </ul>
                    </div>
                    <div className=" ml-96">
                      <Link to="/Search">
                        <SearchBox value={search} onChange={setSearch} />
                      </Link>
                    </div>
                  </div>
                  <button className="bg-transparent p-1 ml-0 rounded-full text-blue-500 hover:text-gray-400 focus:outline-none focus:ring-none text-xl">
                    SignIn
                  </button>
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
              <Route path="/Video/:id/" exact component={VideoJs} />
              <Route path="/Search" component={Cast}>
                <div className="bg-gray-700 h-full">
                  <div className=" mx-36 mt-14">
                    <Search query={search} Page={page} />
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
                  </div>
                </div>
              </Route>
            </Switch>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </div>
  );
}
function Search(props: { query?: string; Page?: any }) {
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
