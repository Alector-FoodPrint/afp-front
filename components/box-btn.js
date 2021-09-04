import React from "react"
import { PlusIcon } from "@heroicons/react/solid"
import { useContext } from "react"

const BoxBtn = ({ description }) => {
  return (
    <>
      <button className="mt-5 p-2 w-60 bg-foodprint-700 w-30 text-center rounded-md text-white text-lg font-bold hover:bg-foodprint-800 text-center ">{description}</button>
    </>
  )
}

export default BoxBtn
