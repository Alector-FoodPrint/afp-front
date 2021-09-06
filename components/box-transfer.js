import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"
import { SwitchHorizontalIcon } from "@heroicons/react/solid"

import useContractTransaction from "/hooks/useContractTransaction"

const BoxTransfer = ({ ownerAddress, tokenId }) => {
  const myContract = useContext(contextAfp)
  const globalData = useContext(contextData)

  // const [txLoading, setPromise] = useContractTransaction("message custom!!!", `v1/food-asset/${tokenId}`)

  const [txLoading, setTransferPromise] = useContractTransaction({ message: "Token transfered successfully", redirectTo: `v1/food-asset/${tokenId}` })

  const [category, setCategory] = useState(null)
  const [showAddress, setShowAddress] = useState(false)

  const [selectedUsers, setSelectedUsers] = useState(null)
  const [userOption, setUserOption] = useState(null)

  const handleTransferAsset = async () => {
    if (myContract) {
      console.log("button clicked!")
      const tokenIdNum = Number(tokenId)

      setTransferPromise(myContract.transferFrom(ownerAddress, userOption.hash, tokenId))
    }
  }

  useEffect(() => {
    console.log("ownerAddress", ownerAddress)
  }, [ownerAddress])

  useEffect(() => {
    if (globalData) {
      const producers = globalData.USERS.PRODUCERS
      const vendors = globalData.USERS.VENDORS
      const warehouses = globalData.USERS.WAREHOUSES

      console.log(">>>>>> producers ", producers)
      console.log(">>>>>> USERS ", vendors)
    }
  }, [globalData])

  useEffect(() => {
    if (category) {
      setUserOption(prev => null)

      if (category == "producer") {
        setSelectedUsers(prev => globalData.USERS.PRODUCERS)
      }

      if (category == "vendor") {
        setSelectedUsers(prev => globalData.USERS.VENDORS)
      }

      if (category == "warehouse") {
        setSelectedUsers(prev => globalData.USERS.WAREHOUSES)
      }
    }
  }, [category])

  const onSelectCategory = e => {
    setShowAddress(prev => true)
    console.log("dropdown category")
    setCategory(e.target.value)
    console.log(category)
  }

  const onSelectUser = e => {
    const userHash = e.target.value
    setUserOption(prev => globalData.USERS[userHash])
    console.log(userOption)
  }

  const listOptionUsers =
    selectedUsers?.map(user => (
      <option value={user.hash} key={user.id}>
        {user.name}
      </option>
    )) ?? []

  const BtnTransfer = userOption ? (
    <div className="" onClick={handleTransferAsset}>
      <div className="food-asset-add rounded-lg my-8  px-8  py-2  bg-red-300 hover:bg-red-700 text-center  font-black  text-white hover:text-white flex justify-center">
        <SwitchHorizontalIcon className=" h-5  mr-2   font-black " />
        <div>Transfer</div>
      </div>
    </div>
  ) : (
    ""
  )

  const showUserData = userOption ? (
    <div className="">
      <div className="">Selected User</div>
      <div className="">name: {userOption.name}</div>
      <div className="">Account: {userOption.hash}</div>
      <div className="">Street: {userOption.street}</div>

      <div className="">Country:{userOption.country}</div>
      <div className="">City:{userOption.city}</div>
      <div className="">Province: {userOption.province}</div>
      <div className="">Zip code: {userOption.zip_code}</div>
    </div>
  ) : (
    ""
  )

  // const listItems = selectedUsers.map(number => (
  //   <option value={user.hash} key={user.id}>

  //     {user.name}{" "}
  //   </option>
  // ))

  //   <input type="select" onChange={onDropdownCategory} label="Multiple Select" multiple>
  // <option value="producer">producer</option>
  // <option value="vendor">vendor</option>
  // <option value="warehouse">warehouse</option>
  // </input>

  return (
    <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
      <div className="info flex justify-start space-x-4 md:space-x-7">
        <div>
          <form>
            <label className="text-foodprint-700 block mb-4 flex items-center justify-start space-x-4">
              <div> Where would you like to transfer this NFT?</div>
              <select className="bg-gray-300 p-2 rounded-lg font-black block" onChange={onSelectCategory}>
                <option value="producer">producer</option>
                <option value="vendor">vendor</option>
                <option value="warehouse">warehouse</option>
              </select>
            </label>

            <label className={`${!showAddress ? "hidden" : ""} text-foodprint-700 block mb-4 flex items-center justify-start space-x-4`}>
              <div> Select the account you would like to transfer</div>
              <select className="bg-gray-300 p-2 rounded-lg font-black block" onChange={onSelectUser}>
                <option value="" key="0">
                  select user
                </option>

                {listOptionUsers}
              </select>
            </label>
          </form>

          <div> {showUserData}</div>
          <div>TRANSFER</div>
          <div>FROM: {ownerAddress}</div>
          <div>FROM: {userOption?.hash}</div>

          <div className="w-full flex justify-center"> {BtnTransfer}</div>
        </div>
      </div>
    </article>
  )
}

export default BoxTransfer
