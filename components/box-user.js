import React, { Component } from "react"
import { ArrowRightIcon } from "@heroicons/react/solid"
import SpinnerSyncLoader from "/components/spinner-syncloader"
import HashPreview from "/components/hash-preview"
import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"
import useReadFoodAsset from "/hooks/useReadFoodAsset"
import Link from "next/link"

const JsxLoaded = ({ user }) => {
  return (
    <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
      <div className="info flex justify-center space-x-4 md:space-x-7">
        <div className="col1 ml-5 w-36 lg:w-48  flex-grow md:flex-1">
          <div className="type h-full   items-center">
            <div className="name text-lg font-bold">{user.name}</div>
            <HashPreview hash={user.hash} />
          </div>
        </div>

        <div className="col3">
          <div className="label text-foodprint-100 text-xs min-w-max">USER ID</div>
          <div className="content mt-1">{user.id}</div>
        </div>

        <div className="col4 pr-4 lg:pr-0">
          <div className="label text-foodprint-100 text-xs ">Country</div>
          <div className="content mt-1">{user.country}</div>
        </div>

        <div className="col5 hidden sm:block ">
          <div className="label text-foodprint-100 text-xs ">City</div>
          <div className="content mt-1">{user.city}</div>
        </div>

        <div className="col5 hidden sm:block">
          <div className="label text-foodprint-100 text-xs ">Province</div>
          <div className="content mt-1">{user.province}</div>
        </div>

        <div className="col8 hidden md:flex items-center flex-grow justify-end">
          <div className="arrow-context  bg-foodprint-70 rounded-full h-16 w-16 flex items-center hover:bg-foodprint-700">
            <Link href={`/v1/food-asset/${"ah"}`} passHref>
              <ArrowRightIcon className="mx-auto h-10 w-10 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col8 md:hidden w-full mt-5  bg-foodprint-70 hover:bg-foodprint-700 rounded-lg">
        <Link href={`/v1/food-asset/${"blabla"}`} passHref>
          <a href="">
            <ArrowRightIcon className="mx-auto h-10 w-10 text-white" />
          </a>
        </Link>
      </div>
    </article>
  )
}

const jsxError = <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 h30 text-center ">User not found</article>

const BoxUser = ({ user }) => {
  user = {
    hash: "0x429dcf7b3b61036a8f9f1c58e6664a32d2167e43",
    id: "4",
    name: "Florent X.",
    role: "producer",
    country: "France",
    street: "67 Chemin Des Bateliers",
    city: "ANGERS",
    province: "Pays de la Loire",
    zip_code: "4367"
  }

  if (user) {
    return <JsxLoaded user={user} />
  } else {
    return jsxError
  }
}

export default BoxUser
