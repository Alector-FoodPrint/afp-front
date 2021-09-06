import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"
import { Web3Context } from "web3-hooks"
import { ethers } from "ethers"
import { useRouter } from "next/router"
import useReadFoodAsset from "/hooks/useReadFoodAsset"
import DashboardLayout from "/components/layout-dashboard"
import BoxUser from "/components/box-user"

const Vendors = props => {
  const myContract = useContext(contextAfp)
  const globalData = useContext(contextData)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    if (globalData) {
      setUsers(prev => globalData.USERS.VENDORS)
    }
  }, [globalData])

  // const [web3State] = useContext(Web3Context)
  // const [foodObject, setFoodObject] = useState("")

  // const [isLoading, setIsLoading] = useState(false)
  const listUsers = users?.map(user => <BoxUser user={user} key={user.hash} />) ?? []

  return (
    <DashboardLayout page="vendors">
      <section className="all-assets-row ">
        <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">Vendors</div>

        {listUsers}
      </section>
      <section> </section>
    </DashboardLayout>
  )
}

export default Vendors
