import React from "react";
import NowPlaying from "../Components/Feed/NowPlaying";
import Popular from "../Components/Feed/Popular";
import PopularTv from "../Components/Feed/PopularTv";
import TopRated from "../Components/Feed/TopRated";
import TopRatedTv from "../Components/Feed/TopRatedTv";
import AirToday from "../Components/Feed/AirToday";

function FeedPage() {
  return (
    <div className="h-full dark:bg-gray-700">
      <div className="mt-20">
        <h1 className="text-6xl text-gray-400 font-bold text-center mb-8 subpixel-antialiased">
          Top 3 Movies
        </h1>
        <Popular />
      </div>
      <div className="mt-20">
        <h1 className="text-xl text-gray-400 text-center  mb-5">
          Movies Now Playing
        </h1>
        <NowPlaying />
      </div>
      <div className="mt-20">
        <h1 className="text-xl text-gray-400 text-center  mb-5">
          Top Rated Movies
        </h1>
        <TopRated />
      </div>
      <div className="mt-20">
        <h1 className="text-xl text-gray-400 text-center  mb-5">
          Popular Tv Show
        </h1>
        <PopularTv />
      </div>
      <div className="mt-20">
        <h1 className="text-xl text-gray-400 text-center  mb-5">
          Tv Shows Thats Air Today
        </h1>
        <AirToday />
      </div>
      <div className="mt-20 pb-20">
        <h1 className="text-xl text-gray-400 text-center  mb-5">
          Top Rated Tv Shows
        </h1>
        <TopRatedTv />
      </div>
    </div>
  );
}

export default FeedPage;
