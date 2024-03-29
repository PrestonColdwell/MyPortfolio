import React from "react";
import NavItem from "./NavItem";

import PrestonColdwellResume from "/PrestonColdwellResume.pdf"

const Navbar = ({ routes }) => {
  const allNavItems = [];

  for (const route of routes) {
    allNavItems.push(
      <NavItem key={route[0]} label={route[0]} func={route[1]} />
    );
  }

  return (
    <nav className="bg-transparent h-auto">
      <div className="max-w-screen-xl md:flex md:flex-wrap justify-between mx-auto p-4 pl-10 pr-10">

        {/* Personal Logo */}
        <div className="border-2 border-text rounded-md px-3 pb-1 max-w-fit mx-auto md:mx-0">
          <h1 className="text-5xl font-bold text-text font-Genos">P</h1>
        </div>

        {/* Navigation Routes */}
        <div className="w-fit mx-auto md:mx-0 lg:w-auto my-auto">
          <ul className="font-medium items-center flex flex-row space-x-6 my-4 md:flex-row md:space-x-8">
            {allNavItems}
            <li>
              {/* Download Resume Button */}
              <a 
                className="border-2 border-text rounded-md text-text bg-tertiary p-2" 
                href={PrestonColdwellResume} 
                download={PrestonColdwellResume}>
                  Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
