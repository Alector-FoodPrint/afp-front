import { ArrowRightIcon, PlusIcon, UserIcon, FingerPrintIcon, TruckIcon, ShoppingBagIcon, ViewGridIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Navbar from "/components/navbar"
import LogoTop from "/components/logo-top"
import BoxProfile from "/components/box-profile"
// import BoxLogin from "/components/box-login"

import BoxBlockchain from "/components/box-blockchain"
import BoxFAProfile from "/components/box-fa-profile"
import BtnAddFA from "../../components/btn-add-fa"
import Footer from "../../components/footer"

import { Web3Context } from "web3-hooks"
import { useContext } from "react"
const Profile = props => {
  const [web3State, login] = useContext(Web3Context)

  const loggedOutJSX = (
    <>
      <div className="dashboard relative w-full bg-gray-100 flex">
        <Navbar />
        <main className="middle flex-grow background-foodprint-50 h-full ">
          <LogoTop />
          <div className="row-two-section w-full">
            <div className="two-section-container  mx-8  min-w-max md:mx-16">{/* <BoxLogin /> */}</div>
          </div>

          <Footer />
        </main>
      </div>
    </>
  )
  const loggedInJSX = (
    <>
      <div className="dashboard relative w-full bg-gray-100 flex">
        <Navbar />
        <main className="middle flex-grow background-foodprint-50 h-full ">
          <LogoTop />
          <div className="row-two-section w-full">
            <div className="two-section-container md:flex justify-between mx-8  min-w-max md:mx-16">
              <BoxProfile />
              <BoxBlockchain />
            </div>
          </div>

          <div className="row-one-section w-full">
            <section className="all-assets-row ">
              <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">My Food Assets</div>

              <BoxFAProfile />
              <BoxFAProfile />

              <BtnAddFA />
            </section>
          </div>
          <Footer />
        </main>
      </div>
    </>
  )

  if (!web3State.isLogged) {
    return loggedOutJSX
  } else {
    return loggedInJSX
  }
}

export default Profile
