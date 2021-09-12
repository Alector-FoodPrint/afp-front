import React from "react"
import { AfpAddress, AfpAbi } from "../contracts/AFP"
import { AfaAddress, AfaAbi } from "../contracts/AFA"

import { useState, useEffect } from "react"

// import { Web3Provider } from "web3-hooks"
import { useContract } from "web3-hooks"
import { USERS } from "/data/users"
import { SOLD } from "/data/sold"
import { FOOD_TYPES } from "/data/food-types"

export const contextAfp = React.createContext(null)
export const contextData = React.createContext(null)

const userFilter = function (obj, predicate) {
  let result = [],
    key

  for (key in obj) {
    // console.log({ key })
    // console.log("object:", obj[key])

    if (obj.hasOwnProperty(key) && predicate(obj[key])) {
      console.log("key", key)

      console.log("object", obj[key])
      result.push(obj[key])
    }
  }

  console.log(result)
  return result
}

const ContextWrapper = props => {
  const myNFT = useContract(AfaAddress, AfaAbi)

  const [globalData, setGlobalData] = useState(null)

  useEffect(() => {
    console.log("-----globalData:", globalData)
  }, [globalData])

  useEffect(() => {
    let fetchUsers = async () => {
      // const result = await fetch("/data/users")
      let result = {}
      result.userFilter = userFilter
      result.USERS = USERS
      result.SOLD = SOLD
      result.FOOD_TYPES = FOOD_TYPES
      result.USERS.VENDORS = userFilter(USERS, item => item["role"] == "vendor")
      result.USERS.PRODUCERS = userFilter(USERS, item => item["role"] == "producer")
      result.USERS.WAREHOUSES = userFilter(USERS, item => item["role"] == "warehouse")

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
