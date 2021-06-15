import React from "react";
import { FList } from "../Components/FLIst";

export default {
  title: "components/ItemList",
};

export const FListStory = () => {
  const Load = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  return <FList Load={Load} />;
};
