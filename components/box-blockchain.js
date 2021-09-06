import React, { Component } from "react"

const BoxBlockchain = ({ web3State, totalFoodAssets }) => {
  const MyContents = web3State ? (
    <>
      <div className="label-row flex w-full mb-4">
        <div className="label-name text-foodprint-100  w-3/6 text-sm">Network</div>
        <div className="w-3/6 label-content text-sm">
          {web3State.networkName} ({web3State.chainId})
        </div>
      </div>
      <div className="label-row flex w-full mb-4">
        <div className="label-name text-foodprint-100  w-3/6 text-sm">Eth Balance</div>
        <div className="w-3/6 label-content text-sm">{web3State.balance}</div>
      </div>
      <div className="label-row flex w-full mb-4">
        <div className="label-name text-foodprint-100  w-3/6 text-sm">Total AFPs</div>
        <div className="w-3/6 label-content text-sm">{totalFoodAssets}</div>
      </div>
    </>
  ) : (
    ""
  )

  return (
    <section className="content-half md:w-3/6 md:ml-10 ">
      <div className="content-title text-foodprint-700 font-black mb-8 ml-3 mt-10 md:mt-0">Blockchain</div>
      <div className="content-white  bg-white rounded-lg  p-8 pb-10">{MyContents}</div>
    </section>
  )
}

export default BoxBlockchain
