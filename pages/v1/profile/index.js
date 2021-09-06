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

import { Web3Context } from "web3-hooks"
import { useContext } from "react"
import { contextAfp } from "/context/context-wrapper"

const Profile = props => {
  const myContract = useContext(contextAfp)

  const { web3State, login, user, userLoading } = useDashboardUser()
  const [ownedIDs, isLoading, isError] = useReadContractUser(myContract, web3State.account)

  const [print, setPrint] = useState(null)
  useEffect(() => {
    console.log(">>>>>> profile page ", print)
  }, [print])

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
          <BoxProfile title={"My Profile"} user={user} />

          <BoxBlockchain web3State={web3State} ownedIDs={ownedIDs} />
        </div>
      </div>

      <div className="row-one-section w-full">
        <section className="all-assets-row ">
          <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">My Food Assets</div>

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

          <BtnAddFA />
        </section>
      </div>
    </DashboardLayout>
  )
}

export default Profile
