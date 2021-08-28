import React, { Component } from "react"
import { UserIcon, FingerPrintIcon, TruckIcon, ShoppingBagIcon, ViewGridIcon } from "@heroicons/react/solid"

const Navbar = props => {
  return (
    <aside className="h-screen sticky top-0  lg:w-52 bg-white flex-shrink-0">
      <div className="logo text-foodprint-70 lg:text-foodprint-800 text-sm lg:text-3xl my-10 mx-auto font-black text-center  lg:visible">AFP</div>

      <div className="navigation">
        <div className="link h-20 w-full h-full  hidden lg:flex">
          <div className="link-bar w-2 bg-foodprint-800 h-10 rounded-r-lg"></div>

          <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-800 ">My Profile</div>
        </div>

        <div className="link h-20 w-full h-full hidden lg:flex">
          <div className="link-bar w-2 bg-white h-10 rounded-r-lg"></div>
          <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-300">Producers</div>
        </div>

        <div className="link h-20 w-full h-full hidden lg:flex">
          <div className="link-bar w-2 bg-white h-10 rounded-r-lg"></div>
          <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-300">Warehouses</div>
        </div>

        <div className="link h-20 w-full h-full hidden lg:flex">
          <div className="link-bar w-2 bg-white h-10 rounded-r-lg"></div>
          <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-300">Vendors</div>
        </div>

        <div className="link h-20 w-full h-full  hidden lg:flex">
          <div className="link-bar w-2 bg-white h-10 rounded-r-lg"></div>
          <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-300">Food Assets</div>
        </div>

        <div className="link h-20 w-full h-full   sm:flex  lg:hidden text-foodprint-700 p-3 hover:bg-foodprint-700 hover:text-white">
          <UserIcon className="mx-auto h-6 w-6    font-black " />
        </div>

        <div className="link h-20 w-full h-full   sm:flex  lg:hidden text-foodprint-700 p-3 hover:bg-foodprint-700 hover:text-white">
          <FingerPrintIcon className="mx-auto h-6 w-6    font-black " />
        </div>

        <div className="link h-20 w-full h-full   sm:flex  lg:hidden text-foodprint-700 p-3 hover:bg-foodprint-700 hover:text-white">
          <TruckIcon className="mx-auto h-6 w-6    font-black " />
        </div>

        <div className="link h-20 w-full h-full   sm:flex  lg:hidden text-foodprint-700 p-3 hover:bg-foodprint-700 hover:text-white">
          <ShoppingBagIcon className="mx-auto h-6 w-6    font-black " />
        </div>

        <div className="link h-20 w-full h-full   sm:flex  lg:hidden text-foodprint-700 p-3 hover:bg-foodprint-700 hover:text-white">
          <ViewGridIcon className="mx-auto h-6 w-6    font-black " />
        </div>
      </div>
    </aside>
  )
}

export default Navbar
