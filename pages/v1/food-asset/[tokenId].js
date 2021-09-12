import { ArrowRightIcon, PlusIcon, UserIcon, FingerPrintIcon, TruckIcon, ShoppingBagIcon, ViewGridIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Navbar from "/components/navbar"
import LogoTop from "/components/logo-top"
import BoxFAtop from "/components/box-fa-top-dynamic"
import Footer from "/components/footer"
import BoxFAhistory from "/components/box-fa-history"
import BtnTransferFA from "/components/btn-transfer-fa"
import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"
import { Web3Context } from "web3-hooks"
import { ethers } from "ethers"
import { useRouter } from "next/router"
import useReadFoodAsset from "/hooks/useReadFoodAsset"
import DashboardLayout from "/components/layout-dashboard"
import BoxTransfer from "/components/box-transfer"

import Link from "next/link"

const FoodAsset = props => {
  const myContract = useContext(contextAfp)
  const globalData = useContext(contextData)
  const [web3State, login] = useContext(Web3Context)

  // const [web3State] = useContext(Web3Context)
  // const [foodObject, setFoodObject] = useState("")

  // const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const { tokenId } = router.query
  const [foodObject, isLoading, isError, setFaRefreshed] = useReadFoodAsset(myContract, tokenId)

  const allAssetsLink = "v1/food-assets"

  const [ownerLoggedIn, setOwnerLoggedIn] = useState(false)
  const [ownerAddress, setOwnerAddress] = useState(null)
  const [refreshed, setRefreshed] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(false)

  useEffect(() => {
    console.log("ownerLoggedIn!", ownerLoggedIn)

    // router.push(`/v1/food-asset/${tokenId}`)
  }, [ownerLoggedIn])

  useEffect(() => {
    if (foodObject && web3State) {
      console.log("logged in address", web3State.account)
      console.log("owner", foodObject.ownerHash)
      setOwnerAddress(prev => web3State.account)
      setOwnerLoggedIn(prev => false)

      if (web3State.account === foodObject.ownerHash) {
        // console.log("ownerLoggedIn", ownerLoggedIn)
        setOwnerLoggedIn(prev => true)
      } else {
        setOwnerLoggedIn(prev => false)
        setButtonClicked(prev => false)
      }
    }
  }, [foodObject, web3State])

  useEffect(() => {
    setFaRefreshed(prev => prev + 1)
    console.log("refreshed", refreshed)
  }, [refreshed])

  const handleButtonClicked = e => {
    e.preventDefault()
    setButtonClicked(prev => true)
    console.log("I am clicked!")
  }

  return (
    <DashboardLayout page="food-assets">
      <section className="all-assets-row ">
        <div className="content-title  text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">
          <Link href={`/v1/food-assets`} passHref>
            <a className="text-foodprint-300 hover:text-foodprint-700" href="">
              All Assets
            </a>
          </Link>{" "}
          / Food Asset / {tokenId}
        </div>

        <BoxFAtop foodObject={foodObject} isLoading={isLoading} isError={isError} tokenId={tokenId} />
      </section>
      <section>
        <BoxFAhistory tokenId={tokenId} refreshed={refreshed} />
        <div>{ownerLoggedIn && buttonClicked ? <BoxTransfer tokenId={tokenId} ownerAddress={ownerAddress} setButtonClicked={setButtonClicked} setRefreshed={setRefreshed} /> : ""}</div>

        <div onClick={handleButtonClicked}>{ownerLoggedIn && !buttonClicked ? <BtnTransferFA /> : ""}</div>
      </section>
    </DashboardLayout>
  )
}

export default FoodAsset
