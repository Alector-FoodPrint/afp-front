import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"
import { SwitchHorizontalIcon } from "@heroicons/react/solid"
import { XIcon } from "@heroicons/react/solid"
import SpinnerSyncLoader from "/components/spinner-syncloader"
import { useRouter } from "next/router"

import useContractTransaction from "/hooks/useContractTransaction"

const BoxTransfer = ({ ownerAddress, tokenId, setButtonClicked, setRefreshed }) => {
  const myContract = useContext(contextAfp)
  const globalData = useContext(contextData)
  const router = useRouter()

  // const [txLoading, setPromise] = useContractTransaction("message custom!!!", `v1/food-asset/${tokenId}`)

  const [txLoading, setTransferPromise, txSuccess] = useContractTransaction({ message: "Token transfered successfully", redirectTo: `v1/food-asset/${tokenId}` })

  const [category, setCategory] = useState(null)
  const [showAddress, setShowAddress] = useState(false)

  const [selectedUsers, setSelectedUsers] = useState(null)
  const [userOption, setUserOption] = useState(null)

  const handleTransferAsset = async e => {
    e.preventDefault()
    if (myContract) {
      console.log("button clicked!")
      const tokenIdNum = Number(tokenId)

      setTransferPromise(myContract.transferFrom(ownerAddress, userOption.hash, tokenId))
    }
  }

  useEffect(() => {
    setRefreshed(prev => prev + 1)
    console.log("txSuceess!")

    // router.push(`/v1/food-asset/${tokenId}`)
  }, [txSuccess])

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

  const resetValues = () => {
    setCategory(prev => null)
    setSelectedUsers(prev => null)
    setUserOption(prev => null)
  }

  const onCloseBtn = e => {
    setButtonClicked(prev => !prev)
    // handleOnClose()
    resetValues()
  }

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
    <a className="" onClick={handleTransferAsset} href="">
      <div className="food-asset-add rounded-lg my-8  px-8  py-2  bg-red-300 hover:bg-red-700 text-center  font-black  text-white hover:text-white flex justify-center">
        <div>Transfer</div>
      </div>
    </a>
  ) : (
    ""
  )

  const showUserData =
    !txLoading && userOption ? (
      <div className="">
        <div className="text-foodprint-100">
          <div className="text-foodprint-700">Transfer to this account:</div>

          <div className="content mx-10 p-4">
            <div className="p-4  ">{userOption?.hash}</div>
            <div className="pl-4 ">Name: {userOption.name}</div>
            <div className="pl-4">Street: {userOption.street}</div>
            <div className="pl-4">Country: {userOption.country}</div>
            <div className="pl-4">City: {userOption.city}</div>
            <div className="pl-4">Province: {userOption.province}</div>
            <div className="pl-4">Zip code: {userOption.zip_code}</div>
          </div>
        </div>
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
      <div className="info ">
        <div className="content-title  mb-8 w-full flex justify-start">
          <div className="flex-grow text-foodpribnt-300 ">Transfer ownership of Food Asset</div>
          <div className="" onClick={onCloseBtn}>
            <XIcon className="mx-auto h-4 w-4    text-gray-400 inline-block" />
          </div>
        </div>
        <div className="w-full  w-full">
          <form className="w-full">
            <label className="text-foodprint-700 block mb-4 flex flex-col justify-center items-center  md:flex-row md:items-center md:justify-start space-x-4">
              <div className="w-4/6 mb-3"> Transfer to producer, warehouse or vendor?</div>
              <select className="mb-3 block bg-foodprint-700 text-white  p-2 rounded-lg font-black block" onChange={onSelectCategory}>
                <option value="producer">producer</option>
                <option value="vendor">vendor</option>
                <option value="warehouse">warehouse</option>
              </select>
            </label>

            <label className={`${!showAddress ? "hidden" : ""} text-foodprint-700 block mb-4 flex flex-col justify-center items-center  md:flex-row md:items-center md:justify-start space-x-4`}>
              <div className="w-4/6 mb-3"> Select the account you would like to transfer</div>
              <select className="mb-3  block bg-foodprint-700 text-white p-2 rounded-lg font-black block" onChange={onSelectUser}>
                <option value="" key="0">
                  select user
                </option>

                {listOptionUsers}
              </select>
            </label>
          </form>

          <div> {showUserData}</div>

          {txLoading ? (
            <div className="w-full flex justify-center">
              <SpinnerSyncLoader loading={true} />
            </div>
          ) : (
            ""
          )}
          <div className="w-full flex justify-center"> {BtnTransfer}</div>
        </div>
      </div>
    </article>
  )
}

export default BoxTransfer
