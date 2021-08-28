import React, { Component } from "react"
import { ArrowRightIcon } from "@heroicons/react/solid"

const BoxFAtop = props => {
  return (
    <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
      <div className="info flex justify-center space-x-4 md:space-x-7">
        <div className="col1 ml-5 w-36 lg:w-48  flex-grow md:flex-1">
          <div className="type h-full  lg:flex items-center">
            <div className="name text-lg font-bold">Eggs</div>
            <div className="quantity ml-0 md:ml-2 mt-2 md:mt-0 font-light min-w-max ">(200 Items)</div>
          </div>
        </div>

        <div className="col2 hidden lg:block">
          <div className="label text-foodprint-100 text-xs min-w-max">Farming type</div>
          <div className="content mt-1">Biological</div>
        </div>

        <div className="col3">
          <div className="label text-foodprint-100 text-xs min-w-max">AFD ID</div>
          <div className="content mt-1">4267</div>
        </div>

        <div className="col4">
          <div className="label text-foodprint-100 text-xs">Produced by</div>
          <div className="content mt-1">Alexios B</div>
          <div className="hash mt-1    ">
            <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
          </div>
        </div>

        <div className="col5 hidden md:block">
          <div className="label text-foodprint-100 text-xs ">Produced In</div>
          <div className="content mt-1">Germany</div>
        </div>

        <div className="col6 hidden sm:block">
          <div className="label text-foodprint-100 text-xs">Currently held by</div>
          <div className="content mt-1">G. Markus</div>
          <div className="hash mt-1    ">
            <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
          </div>
        </div>

        <div className="col7 hidden md:block">
          <div className="label text-foodprint-100 text-xs">Currently in</div>
          <div className="content mt-1">Italy</div>
        </div>
      </div>
    </article>
  )
}

export default BoxFAtop
