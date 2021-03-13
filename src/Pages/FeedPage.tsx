import React from "react";
import NowPlaying from "../Components/NowPlaying";
import Popular from "../Components/Popular";
import TopRated from "../Components/TopRated";

function FeedPage() {
  return (
    <div className="h-full bg-gray-700">
      <div className="mt-20">
        <h1 className="text-6xl text-gray-50 text-center mb-8">Top 3 Movies</h1>
        <Popular />
      </div>
      <div className="mt-20">
        <h1 className="text-xl text-gray-400 text-center  mb-5">
          Movies Now Playing
        </h1>
        <NowPlaying />
      </div>
      <div className="mt-20 pb-10">
        <h1 className="text-xl text-gray-400 text-center  mb-5">
          Top Rated Movies
        </h1>
        <TopRated />
      </div>
    </div>
  );
}

export default FeedPage;
