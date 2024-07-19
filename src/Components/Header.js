import React from "react";

const Header = () => {
  return (
    <div className="header w-full flex justify-center items-center">
      <div className="h-24 justify-center items-center flex rounded sm:h-28">
        <ul className="list bg-nav-color flex rounded-full py-1 min-w-fit min-h-fit">
          <li className="bg-white rounded-3xl py-3 px-5 mx-1 sm:px-8 sm:cursor-pointer">Home</li>
          <li className="rounded-3xl py-3 px-5 mx-1 sm:px-8 sm:cursor-pointer">Profile</li>
          <li className="rounded-3xl py-3 px-5 mx-1 sm:px-8 sm:cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
