import React from "react";

interface Props {
  text: string;
  link: string;
}

export const NavLink: React.FC<Props> = ({ text, link }) => {
  return (
    <a className="text-xl duration-200 hover:text-primary-400" href={link}>
      {text}
    </a>
  );
};
