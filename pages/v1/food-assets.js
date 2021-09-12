import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"
import { Web3Context } from "web3-hooks"
import { ethers } from "ethers"
import { useRouter } from "next/router"
import useReadFoodAsset from "/hooks/useReadFoodAsset"
import DashboardLayout from "/components/layout-dashboard"
import BoxFAProfile from "/components/box-fa-profile-dynamic"
import Head from "next/head"

const FoodAssets = props => {
  const myContract = useContext(contextAfp)
  const globalData = useContext(contextData)
  const assetIDs = [1, 2, 3]
  const [totalSupply, setTotalSupply] = useState(null)
  const [assetListIDs, setAssetListIDs] = useState(null)

  const [isError, setIsError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  useEffect(() => {
    const readTotalSupply = async () => {
      if (myContract) {
        try {
          setIsLoading(true)

          let tSupply = await myContract.totalSupply()
          let tSupplyNum = Number(tSupply)
          setTotalSupply(prev => Number(tSupplyNum))
          const max = tSupplyNum
          const min = 1
          const createdList = Array.from({ length: max - min + 1 }, (_, i) => i + min)
          setAssetListIDs(prev => createdList)
        } catch (e) {
          setIsError(true)
          console.log(e.message)
        } finally {
          setIsLoading(false)
        }
      }
    }

    readTotalSupply()
  }, [myContract])

  // const [web3State] = useContext(Web3Context)
  // const [foodObject, setFoodObject] = useState("")

  // const [isLoading, setIsLoading] = useState(false)

  return (
    <DashboardLayout page="food-assets">
      <Head>
        <title>Alector Foodprint | Food Assets</title>
        <meta name="description" content="List of all registered food assets in Alector Foodprint." />
      </Head>
      <section className="all-assets-row ">
        <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">Food Assets</div>

        <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
          <div className="info flex justify-center space-x-4 md:space-x-7 text-foodprint-300">Total {totalSupply} food assets</div>
        </article>

        {assetListIDs?.map(id => (
          <BoxFAProfile tokenId={id} key={id} />
        ))}
      </section>
      <section> </section>
    </DashboardLayout>
  )
}

export default FoodAssets
