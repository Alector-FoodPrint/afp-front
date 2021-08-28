import React from "react"
import { PlusIcon } from "@heroicons/react/solid"

const BtnAddFA = props => {
  return (
    <div className="food-asset-add rounded-lg my-8 mx-8 md:mx-16 px-8  py-2  bg-foodprint-70 hover:bg-foodprint-700 text-center text-foodprint-700 font-black text-foodprint-700 hover:text-white">
      <PlusIcon className="mx-auto h-5 w-5    font-black " />
    </div>
  )
}

export default BtnAddFA
