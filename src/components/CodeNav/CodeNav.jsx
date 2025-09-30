import { CircleX, Menu } from "lucide-react";
import React, { useState } from "react";

const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
  },
];

const links = navbar.map((item) => {
  return (
    <li>
      <a href={item.path}>{item.title}</a>
    </li>
  );
});
const CodeNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center mx-2">
      <span
        onClick={() => setOpen(!open)}
        className="flex gap-1 cursor-pointer"
      >
        {open ? (
          <CircleX className="md:hidden" />
        ) : (
          <Menu className="md:hidden" />
        )}
        <ul
          className={`md:hidden absolute ${
            !open ? "-top-40" : "top-10"
          }  bg-amber-200 px-4 rounded-md py-2  duration-1000 `}
        >
          {links}
        </ul>
        <h2 className="hidden md:block">MyUI</h2>
      </span>
      <ul className="bg-amber-100 hidden md:flex gap-6 justify-center">
        {links}
      </ul>
      <button className="btn">Button</button>
    </nav>
  );
};

export default CodeNav;
