import React, { Component } from "react"
import SpinnerSyncLoader from "/components/spinner-syncloader"
import { InformationCircleIcon } from "@heroicons/react/solid"

const BoxProfile = ({ user, title }) => {
  if (user) {
    return (
      <section className="content-half md:w-3/6 ">
        <div className="content-title text-foodprint-700 font-black mb-8 ml-3">{title}</div>

        <div className="content-white  bg-white rounded-lg p-8 pb-10 ">
          <div className="row flex ">
            <div className="name text-foodprint-700 text-md mb-10 w-1/2">{user.name}</div>
            <div className="type text-foodprint-700 text-md mb-10 w-1/2">{user.role}</div>
          </div>

          <div className="row flex ">
            <div className="label-row mb-4 pr-4 w-1/2">
              <div className="label-name text-foodprint-100 text-sm  min-w-max pr-1 ">Street</div>
              <div className=" label-content text-sm">{user.street}</div>
            </div>

            <div className="label-row mb-4  w-1/2">
              <div className="label-name text-foodprint-100 text-sm  min-w-max pr-1 ">City</div>
              <div className=" label-content text-sm ">{user.city}</div>
            </div>
          </div>

          <div className="row flex ">
            <div className="label-row mb-4 pr-4 w-1/2">
              <div className="label-name text-foodprint-100 text-sm  min-w-max pr-1 ">Province</div>
              <div className=" label-content text-sm ">{user.province}</div>
            </div>

            <div className="label-row mb-4  w-1/2">
              <div className="label-name text-foodprint-100 text-sm  min-w-max pr-1 ">Zip Code</div>
              <div className=" label-content text-sm ">{user.zip_code}</div>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="content-half md:w-3/6 ">
        <div className="content-title text-foodprint-700 font-black mb-8 ml-3">My Profile</div>

        <div className="content-white flex bg-white rounded-lg p-8 pb-10 flex justify-center text-foodprint-300">
          {/* <div className="left-block md:w-3/5 flex justify-left text-foodprint-300"> */}
          <InformationCircleIcon className="mx-auto h-10 w-10  text-foodprint-300" />
          <div className="ml-5">
            <p className="mb-5 font-bold">Current account is not registered as Producer, Warehouse or Vendor.</p>
            <p>You may contact the Admin if you want to participate</p>
          </div>
          {/* </div> */}
        </div>
      </section>
    )
  }
}

export default BoxProfile
