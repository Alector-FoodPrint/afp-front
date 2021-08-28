import React from "react"
import { FingerPrintIcon } from "@heroicons/react/solid"

const Footer = props => {
  return (
    <footer className=" pt-12 p-5 mx-8 md:mx-12 text-foodprint-100 flex justify-end">
      <FingerPrintIcon className="mr-2 h-5 w-5 text-foodprint-100" />
      <div className="description text-left">2021 by @alector</div>
    </footer>
  )
}

export default Footer
