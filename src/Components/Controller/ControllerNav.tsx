import React from "react";
import { ControllerCategory } from "./ControllerCategory";

export const ControllerNav: React.FC = () => {
  const buttons: { text: string; onClick: any }[] = [
    {
      text: "Upload Mesh",
      onClick: () => {
        console.log("onclick works!");
      },
    },
    {
      text: "Upload Mesh",
      onClick: () => {
        console.log("onclick works!");
      },
    },
  ];

  return (
    <div className="w-full h-28 bg-gray-500">
      <ControllerCategory
        title="Default Category"
        buttons={buttons}
        color={"bg-error-400"}
      />
    </div>
  );
};
