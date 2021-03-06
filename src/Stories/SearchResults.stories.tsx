import React from "react";
import { MovieList } from "../Components/MovieList";
import result from "../Components/Data/movies.json";

export default {
  title: "components/SearchResults",
};

export const StaticList = () => {
  return <MovieList results={result.results as any} />;
};

/*
Build 2

import React, { useEffect, useState } from "react";
import { MovieList } from "./MovieList";
import result from "./movies.json";
import { SearchBox } from "./SearchBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/SearchResults",
};

export const StaticList = () => {
  return <MovieList results={result.results as any} />;
};

export const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-1/4">
      {" "}
      <SearchBox
        onChange={(value) => {
          setValue(value);
          action("searchBox changed")(value);
        }}
        value={value}
      />
    </div>
  );
};
*/
/*
First build

import React, { useEffect, useState } from "react";
import { MovieList } from "./MovieList";
import result from "./movies.json";
import { SearchBox } from "./SearchBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/SearchResults",
};

export const StaticList = () => {
  return <MovieList results={result.results as any} />;
};

export const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-1/4">
      {" "}
      <SearchBox
        onChange={(value) => {
          setValue(value);
          action("searchBox changed")(value);
        }}
        value={value}
      />
    </div>
  );
};
*/
