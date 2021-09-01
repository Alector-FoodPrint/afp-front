import React, { Component } from "react"
import { ArrowRightIcon } from "@heroicons/react/solid"
import SpinnerSyncLoader from "/components/spinner-syncloader"

// <BoxTemplate className = "my-8 mx-8 md:mx-16 px-8  py-5"/>

const BoxTemplate = ({ loading }) => {
  const jsxLoading = (
    <article className="food-asset-row bg-white content-white rounded-lg flex justify-center">
      <SpinnerSyncLoader loading={true} />
    </article>
  )
  const jsxLoaded = <article className="food-asset-row bg-white content-white rounded-lg flex justify-center"> add content here</article>

  if (loading) {
    return jsxLoading
  }

  if (!foodObject) {
    return <div>no objects yet</div>
  }

  return jsxLoaded
}

export default BoxTemplate
