import React, { Component } from "react"
import { UserIcon, FingerPrintIcon, TruckIcon, ShoppingBagIcon, ViewGridIcon } from "@heroicons/react/solid"
import NavBtnLong from "/components/navbar-button-long"
import Link from "next/link"
const Navbar = ({ page }) => {
  return (
    <aside className="h-screen sticky top-0  lg:w-52 bg-white flex-shrink-0">
      <div className="logo text-foodprint-70 lg:text-foodprint-800 text-sm lg:text-3xl my-10 mx-auto font-black text-center  lg:visible">AFP</div>

      <div className="navigation">
        <NavBtnLong description="Profile" active={page == "profile"} myLink="/v1/profile" />
        <NavBtnLong description="Producers" myLink="/v1/producers" active={page == "producers"} />
        <NavBtnLong description="Warehouses" myLink="/v1/warehouses" active={page == "warehouses"} />
        <NavBtnLong description="Vendors" myLink="/v1/vendors" active={page == "vendors"} />
        <NavBtnLong description="Food Assets" myLink="/v1/food-assets" active={page == "food-assets"} />

        <Link href="/v1/profile" passHref>
          <div className={`link h-20 w-full h-full   sm:flex  lg:hidden  p-3 hover:bg-foodprint-700 hover:text-white  ${page == "profile" ? "bg-foodprint-700 text-white" : "bg-white text-foodprint-700"}`}>
            <UserIcon className="mx-auto h-6 w-6    font-black " />
          </div>
        </Link>
        <Link href="/v1/producers" passHref>
          <div className={`link h-20 w-full h-full   sm:flex  lg:hidden  p-3 hover:bg-foodprint-700 hover:text-white  ${page == "producers" ? "bg-foodprint-700 text-white" : "bg-white text-foodprint-700"}`}>
            <FingerPrintIcon className="mx-auto h-6 w-6    font-black " />
          </div>
        </Link>

        <Link href="/v1/warehouses" passHref>
          <div className={`link h-20 w-full h-full   sm:flex  lg:hidden  p-3 hover:bg-foodprint-700 hover:text-white  ${page == "warehouses" ? "bg-foodprint-700 text-white" : "bg-white text-foodprint-700"}`}>
            <TruckIcon className="mx-auto h-6 w-6    font-black " />
          </div>
        </Link>

        <Link href="/v1/vendors" passHref>
          <div className={`link h-20 w-full h-full   sm:flex  lg:hidden  p-3 hover:bg-foodprint-700 hover:text-white  ${page == "vendors" ? "bg-foodprint-700 text-white" : "bg-white text-foodprint-700"}`}>
            <ShoppingBagIcon className="mx-auto h-6 w-6    font-black " />
          </div>
        </Link>

        <Link href="/v1/food-assets" passHref>
          <div className={`link h-20 w-full h-full   sm:flex  lg:hidden  p-3 hover:bg-foodprint-700 hover:text-white  ${page == "food-assets" ? "bg-foodprint-700 text-white" : "bg-white text-foodprint-700"}`}>
            <ViewGridIcon className="mx-auto h-6 w-6    font-black " />
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default Navbar
