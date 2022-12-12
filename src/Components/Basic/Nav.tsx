import Logo from "./Logo";
import { NavLink } from "./NavLink";

export default function Nav() {
  return (
    <div className="w-[100vw] h-28 bg-gray-700 flex justify-center items-center gap-12">
      <div className="absolute left-0 pl-8">
        <Logo />
      </div>
      <NavLink text="Modeling" link="#" />
      <NavLink text="Mesh" link="#" />
      <NavLink text="Simulation" link="#" />
      <NavLink text="Result" link="#" />
    </div>
  );
}
