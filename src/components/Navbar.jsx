import React from "react";
import NavItem from "./NavItem";

const Navbar = ({ routes }) => {
  const allNavItems = [];

  for (const route of routes) {
    allNavItems.push(
      <NavItem key={route[0]} label={route[0]} func={route[1]} />
    );
  }

  return (
    <nav className="bg-transparent h-auto border-b-1 border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pl-10 pr-10">
        {/* Personal Logo */}
        <div className="border-2 border-text rounded-md px-3 py-0">
          <h1 className="text-5xl font-bold text-text font-Genos">P</h1>
        </div>

        {/* Navigation Routes */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium items-center flex flex-col p-4 md:p-0 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0">
            {allNavItems}
            <li>
              {/* add button functionality for resume downloading */}
              <button className="border-2 border-text rounded-md text-text bg-tertiary p-2">
                Download Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
