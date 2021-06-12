import React, { useState } from "react";
import { SearchBoxD } from "../Components/SearchBoxD";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/SearchBox",
};

export const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-1/4">
      {" "}
      <SearchBoxD
        onChange={(value) => {
          setValue(value);
          action("searchBox changed")(value);
        }}
        value={value}
      />
    </div>
  );
};
