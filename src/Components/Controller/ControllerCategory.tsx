import React from "react";
import { ControllerButton } from "./ControllerButton";

interface Props {
  title: string;
  buttons: { text: string; onClick: any }[];
  color: string;
}

export const ControllerCategory: React.FC<Props> = ({
  title,
  buttons,
  color,
}) => {
  return (
    <div className="flex flex-col w-fit gap-2 h-full justify-center">
      <div className="w-fit flex gap-2">
        {buttons.map((val) => {
          return (
            <ControllerButton
              text={val.text}
              backgroundColor={color}
              onClick={val.onClick}
            />
          );
        })}
      </div>
      <div className="w-full text-center text-gray-300">{title}</div>
    </div>
  );
};
