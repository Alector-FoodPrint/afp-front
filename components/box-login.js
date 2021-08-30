import React from "react"
import { PlusIcon } from "@heroicons/react/solid"
import { useContext } from "react"
import { Web3Context } from "web3-hooks"

const BoxLogin = props => {
  const [web3State, login] = useContext(Web3Context)

  return (
    <>
      <div className="box-login rounded-lg my-8 mx-8 md:mx-16 px-8  py-2     bg-text-white h-56 text-center pt-12">
        <button onClick={login} className="p-2 w-60 bg-foodprint-700 w-30 text-center rounded-md text-white text-lg font-bold hover:bg-foodprint-800 text-center ">
          Login with Metamask
        </button>
      </div>
    </>
  )
}

export default BoxLogin
