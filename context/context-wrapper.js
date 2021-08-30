import React from "react"
import { AfpAddress, AfpAbi } from "../contracts/AFP"
import { useState, useEffect } from "react"

// import { Web3Provider } from "web3-hooks"
import { useContract } from "web3-hooks"
import { USERS } from "/data/users"
import { SOLD } from "/data/sold"
import { FOOD_TYPES } from "/data/food-types"

export const contextAfp = React.createContext(null)
export const contextData = React.createContext(null)

const ContextWrapper = props => {
  const myNFT = useContract(AfpAddress, AfpAbi)

  const [globalData, setGlobalData] = useState(null)

  useEffect(() => {
    console.log("-----globalData:", globalData)
  }, [globalData])

  useEffect(() => {
    let fetchUsers = async () => {
      // const result = await fetch("/data/users")
      let result = {}
      result.USERS = USERS
      result.SOLD = SOLD
      result.FOOD_TYPES = FOOD_TYPES

      setGlobalData(result)
    }

    fetchUsers()
  }, [])

  return (
    <contextData.Provider value={globalData}>
      <contextAfp.Provider value={myNFT}>
        <div>{props.children}</div>
      </contextAfp.Provider>
    </contextData.Provider>
  )
}

export default ContextWrapper
