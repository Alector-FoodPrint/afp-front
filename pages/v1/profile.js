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
import BtnAddFA from "../../components/btn-add-fa"

import Footer from "../../components/footer"

import { Web3Context } from "web3-hooks"
import { useContext } from "react"
const Profile = props => {
  const { web3State, login, user, userLoading } = useDashboardUser()

  const [print, setPrint] = useState(null)
  useEffect(() => {
    console.log(">>>>>> profile page ", print)
  }, [print])

  useEffect(() => {
    console.log("HELOOOOOOOOO", user)
    setPrint(user)
  }, [user])

  return (
    <DashboardLayout page="profile">
      <div className="row-two-section w-full">
        <div className="two-section-container md:flex justify-between mx-8   md:mx-16">
          <BoxProfile user={user} />

          <BoxBlockchain />
        </div>
      </div>

      <div className="row-one-section w-full">
        <section className="all-assets-row ">
          <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">My Food Assets</div>

          {/* <BoxFAProfile />
          <BoxFAProfile /> */}

          <BoxFAProfile tokenId={"1"} />
          <BoxFAProfile tokenId={"2"} />

          <BtnAddFA />
        </section>
      </div>
    </DashboardLayout>
  )
}

export default Profile
