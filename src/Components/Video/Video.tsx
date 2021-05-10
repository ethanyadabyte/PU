import React from "react";

import Movies from "../Data/MovieLibrary.json";

const VideoJs = (match) => {
  console.log(match.match.params.id);
  console.log(Movies[match.match.params.id]);

  let B = `http://localhost:8000/video/${match.match.params.id}`;
  let C = `http://192.168.100.14:8000/video/${match.match.params.id}`;

  return (
    <div className="flex justify-center m-20">
      <video src={C} width={1280} height={720} controls></video>
    </div>
  );
};
export default VideoJs;
