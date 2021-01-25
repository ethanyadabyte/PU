import React from "react";
import VideoPlayer from "react-video-js-player";
import Billie from "../Video/Billie.mp4";

const VideoJs = () => {
  const VS = Billie;

  return;
  <div>
    <VideoPlayer src={VS} width="1920" hight="1080" />
  </div>;
};
