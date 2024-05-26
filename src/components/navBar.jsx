import { IoMdMenu } from "react-icons/io";
import { NavLinks } from "./navLinks";
import { useState } from "react";
export const NavBar = () => {
  const [showSideBar, setSideBar] = useState(false);

  return (
    <nav className=" bg-[#111517] p-2 ">
      <div className=" flex items-center justify-between">
        {/* logo */}
        <p className=" font-bold text-3xl text-[#ea7133] ">
          {" "}
          <span className=" text-white">Project</span>Logo
        </p>
        {/* menu button */}
        <button onClick={() => setSideBar(!showSideBar)}>
          <IoMdMenu color="white" size={30} />
        </button>
      </div>
      <NavLinks {...{ showSideBar, setSideBar }} />
    </nav>
  );
};
