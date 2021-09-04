import React, { Component } from "react"
import SpinnerSyncLoader from "/components/spinner-syncloader"
import { InformationCircleIcon } from "@heroicons/react/solid"

const BoxProfile = ({ user }) => {
  if (user) {
    return (
      <section className="content-half md:w-3/6 ">
        <div className="content-title text-foodprint-700 font-black mb-8 ml-3">My Profile</div>

        <div className="content-white flex bg-white rounded-lg p-8 pb-10">
          <div className="left-block md:w-3/5">
            <div className="name text-foodprint-700 text-md mb-10">{user.name}</div>

            <div className="label-row mb-4  flex">
              <div className="label-name text-foodprint-100 text-sm w-2/6 min-w-max pr-1 ">Street</div>
              <div className="w-4/6 label-content text-sm flex-grow">{user.street}</div>
            </div>

            <div className="label-row  flex">
              <div className="label-name text-foodprint-100 text-sm w-2/6  min-w-max pr-1">Province</div>
              <div className="w-4/6 label-content text-sm flex-grow">{user.province}</div>
            </div>
          </div>

          <div className="right-block w-2/5 ml-5">
            <div className="type text-foodprint-700 text-md mb-10">{user.role}</div>
            <div className="label-row mb-4 flex">
              <div className="label-name text-foodprint-100 w-2/6 text-sm">City</div>
              <div className="label-content text-sm w-3/6">{user.city}</div>
            </div>

            <div className="label-row  flex">
              <div className="label-name text-foodprint-100  w-2/6 text-sm min-w-max">Zip Code</div>
              <div className="w-3/6 label-content text-sm">{user.zip_code}</div>
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
