import { ArrowRightIcon, PlusIcon, UserIcon, FingerPrintIcon, TruckIcon, ShoppingBagIcon, ViewGridIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Navbar from "/components/navbar"
import LogoTop from "/components/logo-top"
import BoxFAtop from "/components/box-fa-top"
import Footer from "/components/footer"
import BoxFAhistory from "/components/box-fa-history"
import BtnTransferFA from "/components/btn-transfer-fa"

const FoodAsset = props => {
  return (
    <>
      <div className="dashboard relative w-full bg-gray-100 flex">
        <Navbar />
        <main className="middle flex-grow background-foodprint-50 h-full ">
          <LogoTop />

          <div className="row-one-section w-full">
            <section className="all-assets-row ">
              <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">Food Asset</div>

              <BoxFAtop />
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
