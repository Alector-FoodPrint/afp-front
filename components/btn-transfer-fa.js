import React from "react"
import { SwitchHorizontalIcon } from "@heroicons/react/solid"

const BtnTransferFA = () => {
  return (
    <a className="" href="">
      <div className="food-asset-add rounded-lg my-8 mx-8 md:mx-16 px-8  py-2  bg-foodprint-70 hover:bg-foodprint-700 text-center text-foodprint-700 font-black text-foodprint-700 hover:text-white flex justify-center">
        <SwitchHorizontalIcon className=" h-5  mr-2   font-black " />
        <div>Transfer</div>
      </div>
    </a>
  )
}

export default BtnTransferFA
