import React, { useState } from "react";
import { SearchBox } from "../Components/SearchBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/SearchBox",
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
