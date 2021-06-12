import React from "react";

const VideoJs = (match) => {
  console.log(match.match.params.id);

  let A = `http://localhost:8000/video/${match.match.params.id}`;
  let B = `http://192.168.100.14:8000/video/${match.match.params.id}`;

  return (
    <div className="flex justify-center m-20">
      <video
        className="rounded-2xl shadow-2xl"
        src={B}
        width={1280}
        height={720}
        controls
      ></video>
    </div>
  );
};
export default VideoJs;
