import React from "react";

import { ObjectContainer } from "../Objects/ObjectContainer";

export const SideBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-80 h-full bg-gray-600">
      <div className="text-2xl font-bold h-20 flex items-center">Objects</div>

      <div className="flex w-full justify-center">
        <ObjectContainer name="Random Object" />
      </div>
    </div>
  );
};
