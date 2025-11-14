import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-fit">
      <div className="glass-nav px-4 py-2 flex flex-wrap items-center justify-center gap-5 md:gap-10">
        <nav className="flex items-center gap-6">
          <Link to={"/"} className="font-medium text-gray-600 hover:text-gray-950">
            Home
          </Link>
          <Link to={'/todo'} className="font-medium text-gray-600 hover:text-gray-950">Todo</Link>
          <Link to={'/form'} className="font-medium text-gray-600 hover:text-gray-950">Form</Link>
          <Link to={'/shop'} className="font-medium text-gray-600 hover:text-gray-950">Shop</Link>

          <span className="bg-gray-300 w-0.5 h-10"></span>

          <a className="ml-4 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
            Hire <span className='hidden md:block lg:block'>Me</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
