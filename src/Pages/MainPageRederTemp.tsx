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
import { Link } from "react-router-dom";
import { StorageIcon } from "../Components/Icons/StorageIcon";
import { SearchBox } from "../Components/SearchBox";
import CastItemPage from "./CastItemPage";
import { Grid1 } from "../Components/Container/All/Grid1";
import Modal from "../Components/Container/Modal/Modal";

const queryClient = new QueryClient();

function Router() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState("");

  const closeModal = () => {
    setIsOpen(false);
  };

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
  let Block;
  if (search == "") {
    Block = "opacity-0";
  }
  return (
    <div className=" bg-white dark:bg-gray-700 h-screen w-screen scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-800 scrollbar-track-rounded-sm scrollbar-thumb-rounded-sm absolute">
      <div className="overflow-visible ">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="h-20 bg-white dark:bg-gray-700 p-4">
              {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                      className="fixed inset-0 transition-opacity"
                      aria-hidden="true"
                    >
                      <div
                        className="absolute inset-0 bg-gray-700 opacity-75 "
                        onClick={() => setIsOpen(false)}
                      ></div>
                    </div>

                    <span
                      className="hidden sm:inline-block sm:align-middle sm:h-screen"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>

                    <div className="  bg-white dark:bg-gray-700 inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      <input
                        id="search"
                        name="search"
                        className=" h-12 row-span-full block w-full pl-4 pr-3 py-2 rounded-md border border-none leading-5 bg-gray-300 dark:bg-gray-600 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-none focus:ring-none focus:border-none sm:text-sm text-gray-400"
                        placeholder="Search a movie"
                        type="search"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        onKeyUp={(event: any) => {
                          if (event.keyCode === 13) {
                            // Cancel the default action, if needed
                            event.preventDefault();
                            props.onChange &&
                              props?.onChange(event.target.value);
                          }
                        }}
                      />
                      <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse grid grid-cols-auto grid-rows-auto gap-4 pb-5">
                        <button
                          onClick={closeModal}
                          type="button"
                          className=" w-1/2 h-10 rounded-lg text-2xl text-blue-500 mt-8 mb-0 pt-0.5 text-center border-2 border-blue-500 hover:border-red-600 hover:text-red-600"
                        >
                          Sign up
                        </button>
                        <button
                          onClick={closeModal}
                          type="button"
                          className=" w-1/2 h-10 rounded-lg text-2xl text-blue-500 mt-8 mb-0 pt-0.5 text-center border-2 border-blue-500 hover:border-red-600 hover:text-red-600"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                    <button
                      className="mx-14 text-blue-500 hover:text-gray-400 focus:outline-none text-xl"
                      onClick={() => setIsOpen(true)}
                    >
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
                <div className="mx-36 mt-14">
                  <Search query={search} Page={page} />
                </div>
                <div className={Block}>
                  <div className="text-lg flex justify-center mt-8 mb-4 ">
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
    <div className="flex justify-center">
      <Grid1 results={data?.results || []} />
    </div>
  );
}

export default Router;
//https://api.themoviedb.org/3/search/multi?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&query=samurai&page=500&include_adult=false
