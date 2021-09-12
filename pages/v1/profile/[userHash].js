import { ArrowRightIcon, PlusIcon, UserIcon, FingerPrintIcon, TruckIcon, ShoppingBagIcon, ViewGridIcon } from "@heroicons/react/solid"
import DashboardLayout from "/components/layout-dashboard"
import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "/components/navbar"
import LogoTop from "/components/logo-top"
import BoxProfile from "/components/box-profile"
// import BoxLogin from "/components/box-login"
import useDashboardUser from "/hooks/useDashboardUser"
import BoxBlockchain from "/components/box-blockchain"
import BoxFAProfile from "/components/box-fa-profile-dynamic"
import BtnAddFA from "/components/btn-add-fa"
import useReadContractUser from "/hooks/useReadContractUser"
import Footer from "/components/footer"
import { useRouter } from "next/router"

import { Web3Context } from "web3-hooks"
import { useContext } from "react"
import { contextAfp, contextData } from "/context/context-wrapper"

const UserProfile = props => {
  const myContract = useContext(contextAfp)
  const globalData = useContext(contextData)
  const [user, setUser] = useState(null)

  const router = useRouter()
  const { userHash } = router.query

  // const { web3State, login, user, userLoading } = useDashboardUser()
  const [ownedIDs, isLoading, isError] = useReadContractUser(myContract, userHash)

  const [print, setPrint] = useState(null)
  useEffect(() => {
    console.log(">>>>>> userHash ", userHash)

    if (userHash && globalData) {
      // userFilter(USERS, item => item["id"] == "1")
      const u = globalData.userFilter(globalData.USERS, item => item["hash"] == userHash)
      setUser(prev => u[0])
      console.log(">>>>>> u", u)
    }
  }, [userHash, globalData])

  // globalData.userFilter(USERS, item => item["id"] == "1")
  // useEffect(() => {
  //   console.log(">>>>>> profile page ", print)
  // }, [print])

  const ListItems = ({ ownedIDs, isLoading }) => {
    if (ownedIDs) {
      return ownedIDs.map(id => <BoxFAProfile tokenId={id} key={id} />)
    } else if (isLoading) {
      return ""
    } else {
    }
    return ""
  }

  // const listItems = "hello"
  const noItems = "no items found"

  return (
    <DashboardLayout page="profile">
      <div className="row-two-section w-full">
        <div className="two-section-container md:flex justify-between mx-8   md:mx-16">
          <BoxProfile title={"User Profile"} user={user} />

          {/* <BoxBlockchain web3State={web3State} ownedIDs={ownedIDs} /> */}
        </div>
      </div>

      <div className="row-one-section w-full">
        <section className="all-assets-row ">
          <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">{ownedIDs ? "User Food Assets" : ""}</div>

          {/* <BoxFAProfile />
          <BoxFAProfile /> */}

          <ListItems ownedIDs={ownedIDs} isLoading={isLoading} />

          <div>
            {" "}
            {ownedIDs && ownedIDs.length == 0 ? (
              <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
                <div className="info flex justify-center space-x-4 md:space-x-7 text-foodprint-300">No items found</div>
              </article>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default UserProfile
