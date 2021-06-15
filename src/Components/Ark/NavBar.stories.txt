import React from "react";
import { NavBar } from "../Components/NavBar1";
import { NavBar2 } from "../Components/NavBar2";
import { NavBar3 } from "../Components/NavBar3";

export default {
  title: "components/NavBar",
};

export const NavBarStory = () => {
  return (
    <div className="p-0 m-0 bg-gray-700 h-screen w-screen">
      <div className="mb-20">
        <NavBar />
      </div>
      <div className="mb-20">
        <NavBar2 />
      </div>
      <div className="mb-20 mx-0">
        <NavBar3 />
      </div>
    </div>
  );
};
export const NavBar2Story = () => {
  return <NavBar2 />;
};

export const NavBar3Story = () => {
  return <NavBar3 />;
};
