import React from "react"
import { useState } from "react"
import Link from "next/link"

// hover?bg-foodprint-800:bg-white
// className={`text-black font-bold inline-block rounded-full bg-yellow-400 py-1 px-3 ${
//  router.pathname === link.path
//  ? 'text-white'
//  : 'hover:bg-yellow-500'
// }`}

// className={`text-black font-bold inline-block rounded-full bg-yellow-400 py-1 px-3 ${router.pathname === link.path? 'text-white': 'hover:bg-yellow-500'}`}
// " link-bar w-2  h-10 rounded-r-lg " + hover ? "bg-foodprint-800" : "bg-white"

const NavBtnLong = ({ description = "", active = false, myLink = "" } = {}) => {
  const [hover, setHover] = useState(false)

  const jsxInactive = (
    <div className="link h-20 w-full h-full hidden lg:flex" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className={`link-bar w-2  h-10 rounded-r-lg " ${hover ? "bg-white" : "bg-white"}`}></div>
      <div className={`link-bar  w-full h-10 pt-2 pl-5 font-black ${hover ? "text-foodprint-700" : "text-foodprint-300"} `}>{description}</div>
    </div>
  )

  const jsxActive = (
    <div className="link h-20 w-full h-full hidden lg:flex">
      <div className="link-bar w-2 bg-foodprint-800 h-10 rounded-r-lg"></div>
      <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-800">{description}</div>
    </div>
  )

  return (
    <Link href={myLink} passHref>
      <a href="">{active ? jsxActive : jsxInactive}</a>
    </Link>
  )
}

export default NavBtnLong
