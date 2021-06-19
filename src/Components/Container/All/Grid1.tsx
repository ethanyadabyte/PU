import React from "react";
import { GridItem } from "./GridItem";
import { ItemImg } from "../../ItemImg";

interface ItemInfo {
  poster_path?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  id?: string;
  media_type?: string;
  profile_path?: string;
  name?: string;
}

interface ItemInfoProps {
  results: ItemInfo[];
}

export const Grid1 = (props: ItemInfoProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-16 gap-y-8 grid-flow-rows dark:bg-gray-700 p-3">
      {props.results.map((movie) => (
        <div className="">
          <GridItem
            Title={movie.original_title}
            Title1={movie.original_name}
            Title2={movie.name}
            Img={ItemImg(
              movie.profile_path,
              movie.poster_path,
              movie.media_type
            )}
            OverView={movie.overview}
            id={movie.id}
            Type={movie.media_type}
          />
        </div>
      ))}
    </ul>
  );
};
