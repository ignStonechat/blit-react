import React from "react";
import Nav from "../Components/Basic/Nav";
import { SideBar } from "../Components/Basic/SideBar";
import { ControllerNav } from "../Components/Controller/ControllerNav";

export default function Home() {
  return (
    <div className="flex flex-col w-[100%] h-[100vh] flex-auto">
      <Nav />
      <div className="flex h-full w-full">
        <SideBar />
        <ControllerNav />
      </div>
    </div>
  );
}
