import { Link } from "react-router-dom";

export const NavLinks = ({ showSideBar }) => {
  const linksData = [
    { id: 0, linkName: "Home", linkUrl: "/" },
    { id: 4, linkName: "Account Types", linkUrl: "/account-types" },
    { id: 1, linkName: "About Us", linkUrl: "/about-us" },
    { id: 5, linkName: "Support", linkUrl: "/support" },
    { id: 3, linkName: "News", linkUrl: "/news" },
    { id: 3, linkName: "Education", linkUrl: "/education" },
  ];

  return (
    <aside
      className={` globalTransition absolute w-[80%] bg-black bg-opacity-80 z-20  text-white h-screen top-0 left-0 
      ${!showSideBar ? "-translate-x-[100%]" : "translate-x-0"} p-2  pl-4 `}
    >
      <div className=" flex flex-col gap-y-3 text-xl">
        {linksData.map(({ linkName, id, linkUrl }) => (
          <Link to={linkUrl} key={id}>
            {linkName}
          </Link>
        ))}
      </div>
    </aside>
  );
};
