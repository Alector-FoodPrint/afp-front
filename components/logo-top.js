import React, { Component } from "react"

const LogoTop = props => {
  return (
    <div className="row-top mt-10 mb-24 lg:flex items-center">
      <div className="top-title flex-grow  text-foodprint-800 flex justify-center">
        <div className="logoName mx-auto">
          <span className="title-alector font-ubuntu text-4xl font-light">Alector</span> <span className="text-4xl font-black">FoodPrint</span>
        </div>
      </div>
      <div className="login pr-10 text-sm invisible lg:visible hidden">Logout with Metamask</div>
    </div>
  )
}

export default LogoTop
