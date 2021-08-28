import React, { Component } from "react"

class BoxProfile extends Component {
  render() {
    return (
      <section className="content-half md:w-3/6 ">
        <div className="content-title text-foodprint-700 font-black mb-8 ml-3">My Profile</div>

        <div className="content-white flex bg-white rounded-lg p-8 pb-10">
          <div className="left-block md:w-3/5">
            <div className="name text-foodprint-700 text-md mb-10">Alex Bornhast</div>

            <div className="label-row mb-4  flex">
              <div className="label-name text-foodprint-100 text-sm w-2/6 min-w-max pr-1 ">Street</div>
              <div className="w-4/6 label-content text-sm flex-grow">67 Chemin Des Bateliers</div>
            </div>

            <div className="label-row  flex">
              <div className="label-name text-foodprint-100 text-sm w-2/6  min-w-max pr-1">Province</div>
              <div className="w-4/6 label-content text-sm flex-grow">Pays de la Loire</div>
            </div>
          </div>

          <div className="right-block w-2/5 ml-5">
            <div className="type text-foodprint-700 text-md mb-10">PRODUCER</div>
            <div className="label-row mb-4 flex">
              <div className="label-name text-foodprint-100 w-2/6 text-sm">City</div>
              <div className="label-content text-sm w-3/6">ANGERS</div>
            </div>

            <div className="label-row  flex">
              <div className="label-name text-foodprint-100  w-2/6 text-sm min-w-max">Zip Code</div>
              <div className="w-3/6 label-content text-sm">4367</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default BoxProfile
