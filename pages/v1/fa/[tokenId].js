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

const FoodAsset = props => {
  const myNFT = useContext(contextAfp)
  const globalData = useContext(contextData)

  const [web3State] = useContext(Web3Context)
  const [totalSupply, setTotalSupply] = useState("")
  const [foodAsset, setFoodAsset] = useState("")
  const [quantity, setQuantity] = useState("")
  const [unit, setUnit] = useState("")

  const [foodType, setFoodType] = useState("")
  const [foodSubtype, setFoodSubtype] = useState("")
  const [producerName, setProducerName] = useState("")
  const [producerHash, setProducerHash] = useState("")
  const [producerCountry, setProducerCountry] = useState("")
  const [ownerName, setOwnerName] = useState("")
  const [ownerHash, setOwnerHash] = useState("")
  const [ownerCountry, setOwnerCountry] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { tokenId } = router.query

  useEffect(() => {
    console.log("-----fa", foodAsset)
  }, [foodAsset])

  const processNFT = async (fa, owner) => {
    const fType = fa.foodType
    const fTypeNum = fType.toNumber()
    setFoodType(globalData.FOOD_TYPES[fTypeNum].name)

    const fSubtype = fa.foodSubtype
    const fSubtypeNum = fSubtype.toNumber()
    setFoodSubtype(globalData.FOOD_TYPES[fTypeNum].subtypes[fSubtypeNum])
    setUnit(globalData.FOOD_TYPES[fTypeNum].unit)

    const pBy = fa.producedBy
    const pByStr = pBy.toString()
    setProducerName(globalData.USERS[pByStr].name)
    setProducerCountry(globalData.USERS[pByStr].country)

    const ownerAddress = owner.toString()
    setOwnerName(globalData.USERS[ownerAddress].name)
    setOwnerCountry(globalData.USERS[ownerAddress].country)

    const q = fa.quantity
    const qStr = q.toString()
    setQuantity(qStr)
  }

  useEffect(() => {
    const getNftState = async () => {
      if (myNFT) {
        try {
          setIsLoading(true)
          let tsupply = await myNFT.name()
          let fa = await myNFT.getFoodAssetById(tokenId)
          let owner = await myNFT.ownerOf(tokenId)

          setTotalSupply(tsupply)
          setFoodAsset(fa)
          processNFT(fa, owner)
        } catch (e) {
          console.log(e.message)
        } finally {
          setIsLoading(false)
        }
      }
    }
    getNftState()
  }, [myNFT, web3State.account, tokenId])

  return (
    <>
      <div className="dashboard relative w-full bg-gray-100 flex">
        <Navbar />
        <main className="middle flex-grow background-foodprint-50 h-full ">
          <LogoTop />

          <div className="row-one-section w-full">
            <section className="all-assets-row ">
              <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">Food Asset</div>

              <BoxFAtop quantity={quantity} faType={foodType} faSubtype={foodSubtype} unit={unit} AFP_ID={tokenId} producerName={producerName} producerHash="0x99…4dwc" producerCountry={producerCountry} ownerName={ownerName} ownerHash="0x87…ae89" ownerCountry={ownerCountry} />
            </section>
            <section>
              <BoxFAhistory />
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
