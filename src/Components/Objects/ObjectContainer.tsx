import React from "react";

interface Props {
  name: string;
}

export const ObjectContainer: React.FC<Props> = ({ name }) => {
  return (
    <div className="flex items-center text-lg w-[90%] h-12 bg-gray-700 rounded-lg">
      <div className="pl-2">{name}</div>
      <div className="ml-auto pr-2">Eye Icon</div>
    </div>
  );
};
