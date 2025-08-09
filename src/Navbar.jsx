import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <>
      {/* open button  */}
      <h2
        className={`md:hidden text-4xl absolute right-10 top-3 cursor-pointer z-50  text-emerald-50  ${
          open && "hidden"
        }`} 
        onClick={() => setopen(!open)}
      >
        <FiMenu />{" "}
      </h2>
       {/* menu container  */}
      <div
        className={`fixed inset-0 md:static md:h-auto md:flex w-full h-screen  z-40 md:bg-transparent ${
          open ? `bg-black/50` : `bg-transparent `
        } overflow-x-hidden transition-opacity duration-500`}
      >
        {/* {menu items container}  */}
        <div
          className={`w-1/2 md:w-full h-screen flex-col md:flex-row md:h-20 justify-start absolute md:static md:translate-x-0 right-0 md:right-auto ${
            open ? `translate-x-0` : `translate-x-full`
          } bg-emerald-700 transition-transform duration-500 ease-in-out
    text-emerald-50 flex md:justify-between px-5 items-center`}
       onClick={e => e.stopPropagation()}
        >
          {/* {menu heading}  */}
          <div>
          <h2 className="text-sm sm:text-2xl tracking-wide absolute md:static top-6 left-5">
            CloudFlex 
          </h2>
          <p className="absolute md:static top-12 left-5 text-[10px]">Next-Gen Cloud Hosting</p>
          </div>
           {/* menu close button  */}
          <h2
            className={`md:hidden absolute text-3xl font-bold right-10 top-5 cursor-pointer hover:text-emerald-500`}
            onClick={() => setopen(!open)}
          >
            <IoMdClose />
          </h2>
          {/* menu navigation links  */}
          <nav
            className="text-sm md:text-lg list-none flex gap-4 capitalize 
      absolute md:static top-20 hover:cursor-pointer [&>li]:hover:text-emerald-400 flex-col md:flex-row text-center"
          >
            <li>home</li>
            <li>features</li>
            <li>pricing</li>
            <li>Testimonials</li>
            <li>contact</li>

          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
