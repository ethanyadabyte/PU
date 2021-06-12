import React from "react";
import { NF } from "../Components/Icons/NF";
interface II {
  Profile?: any;
  Poster?: any;
  Type?: any;
}

export const ItemImg = (Profile?: any, Poster?: any, Type?: any) => {
  let R = Poster;
  if (Type === "person") {
    R = Profile;
  }
  let B = `https://image.tmdb.org/t/p//w342${R}`;
  if (R === "") {
    let B = "../Components/Icons/NF.svg";
  }
  return `https://image.tmdb.org/t/p//w342${R}`;
};
