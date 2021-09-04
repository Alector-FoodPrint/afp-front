import Navbar from "/components/navbar"
import Footer from "/components/footer"
import LogoTop from "/components/logo-top"
import DashboardLayout from "/components/layout-dashboard"
import BoxBtn from "/components/box-btn"
import { useContext } from "react"
import useDashboardUser from "/hooks/useDashboardUser"

export default function ContactAdmin({ loggedAccount }) {
  const { web3State } = useDashboardUser()

  const handleClick = () => {}
  return (
    <>
      <div className="dashboard relative w-full bg-gray-100 flex">
        <main className="middle flex-grow background-foodprint-50 h-full  h-screen">
          <LogoTop />
          <section className="all-assets-row flex justify-center items-center ">
            <div className="box-login p-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center w-96">
              <div className="text-foodprint-700 text-2xl">Contact admin</div>
              <div className="text-foodprint-300 mt-5 text-center">To access this page you need to need to contact the administrator & register as user.</div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
