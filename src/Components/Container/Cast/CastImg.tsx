import React from "react";
import { useQuery } from "react-query";
interface P {
  id?: any;
}

export function CastImg(props: P) {
  const { isLoading, error, data } = useQuery(
    ["CastImg", props.id],
    () =>
      fetch(
        `
          https://api.themoviedb.org/3/person/${props.id}/images?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <div className="">
      <img
        className="rounded-lg shadow-2xl"
        src={
          "https://image.tmdb.org/t/p//w342" + `${data.profiles[0].file_path}`
        }
        alt=""
      />
    </div>
  );
}
