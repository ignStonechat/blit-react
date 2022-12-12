import React from "react";

interface Props {
  text: string;
  backgroundColor: string;
  onClick: any;
}

export const ControllerButton: React.FC<Props> = ({
  text,
  backgroundColor,
  onClick,
}) => {
  return (
    <div
      className={`flex w-fit p-2 text-lg justify-center items-center rounded-md cursor-pointer ${backgroundColor}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
