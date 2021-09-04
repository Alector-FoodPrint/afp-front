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
import useReadFoodAsset from "../../../hooks/useReadFoodAsset"

const FoodAsset = props => {
  const myContract = useContext(contextAfp)
  const globalData = useContext(contextData)

  // const [web3State] = useContext(Web3Context)
  // const [foodObject, setFoodObject] = useState("")

  // const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { tokenId } = router.query
  const [foodObject, isLoading, isError] = useReadFoodAsset(myContract, tokenId)

  useEffect(() => {
    console.log("-----fa", foodObject)
  }, [])

  return (
    <>
      <div className="dashboard relative w-full bg-gray-100 flex">
        <Navbar />
        <main className="middle flex-grow background-foodprint-50 h-full ">
          <LogoTop />

          <div className="row-one-section w-full">
            <section className="all-assets-row ">
              <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">Food Asset</div>

              <BoxFAtop foodObject={foodObject} isLoading={isLoading} isError={isError} tokenId={tokenId} />
            </section>
            <section>
              <BoxFAhistory tokenId={tokenId} />
              <BtnTransferFA />
            </section>
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default FoodAsset
