import React, { Component } from "react"
import { ArrowRightIcon } from "@heroicons/react/solid"
import SpinnerSyncLoader from "/components/spinner-syncloader"
import HashPreview from "/components/hash-preview"

const JsxLoaded = ({ foodObject }) => {
  return (
    <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
      <div className="info flex justify-center space-x-4 md:space-x-7">
        <div className="col1 ml-5 w-36 lg:w-48  flex-grow md:flex-1">
          <div className="type h-full  lg:flex items-center">
            <div className="name text-lg font-bold">{foodObject.foodName}</div>
            <div className="quantity ml-0 md:ml-2 mt-2 md:mt-0 font-light min-w-max ">
              ({foodObject.quantity} {foodObject.unit})
            </div>
          </div>
        </div>

        <div className="col2 hidden lg:block">
          <div className="label text-foodprint-100 text-xs min-w-max">Farming type</div>
          <div className="content mt-1">{foodObject.foodSubname}</div>
        </div>

        <div className="col3">
          <div className="label text-foodprint-100 text-xs min-w-max">AFA ID</div>
          <div className="content mt-1">{foodObject.tokenId}</div>
        </div>

        <div className="col4">
          <div className="label text-foodprint-100 text-xs">Produced by</div>
          <div className="content mt-1">{foodObject.producerName}</div>
          <div className="hash mt-1    ">
            <HashPreview hash={foodObject.producerHash} />
          </div>
        </div>

        <div className="col5 hidden md:block">
          <div className="label text-foodprint-100 text-xs ">Produced In</div>
          <div className="content mt-1">{foodObject.producerCountry}</div>
        </div>

        <div className="col6 hidden sm:block">
          <div className="label text-foodprint-100 text-xs">Currently held by</div>
          <div className="content mt-1">{foodObject.ownerName}</div>
          <div className="hash mt-1    ">
            <HashPreview hash={foodObject.ownerHash} />
          </div>
        </div>

        <div className="col7 hidden md:block">
          <div className="label text-foodprint-100 text-xs">Currently in</div>
          <div className="content mt-1">{foodObject.ownerCountry}</div>
        </div>
      </div>
    </article>
  )
}

const BoxFAtop = ({ foodObject, isLoading, isError, tokenId }) => {
  // <BoxTemplate className = "my-8 mx-8 md:mx-16 px-8  py-5"/>
  const jsxLoading = (
    <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 flex justify-center">
      <SpinnerSyncLoader loading={true} />
    </article>
  )

  const jsxError = <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 h30 text-center ">Food asset {tokenId} is not found</article>

  if (isLoading) {
    return jsxLoading
  } else if (foodObject) {
    return <JsxLoaded foodObject={foodObject} />
  } else if (isError) {
    return jsxError
  } else {
    return jsxLoading
  }
}

export default BoxFAtop
