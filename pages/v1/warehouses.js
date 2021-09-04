import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"
import { Web3Context } from "web3-hooks"
import { ethers } from "ethers"
import { useRouter } from "next/router"
import useReadFoodAsset from "/hooks/useReadFoodAsset"
import DashboardLayout from "/components/layout-dashboard"

const Warehouses = props => {
  const myContract = useContext(contextAfp)
  const globalData = useContext(contextData)

  // const [web3State] = useContext(Web3Context)
  // const [foodObject, setFoodObject] = useState("")

  // const [isLoading, setIsLoading] = useState(false)

  return (
    <DashboardLayout page="warehouses">
      <section className="all-assets-row ">
        <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">Warehouses</div>

        <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
          <div className="info flex justify-center space-x-4 md:space-x-7">Add info</div>
        </article>
      </section>
      <section> </section>
    </DashboardLayout>
  )
}

export default Warehouses
