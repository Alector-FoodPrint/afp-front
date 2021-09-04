import Navbar from "/components/navbar"
import Footer from "/components/footer"
import LogoTop from "/components/logo-top"
import DashboardLayout from "/components/layout-dashboard"
import BoxBtn from "/components/box-btn"
import { Web3Context } from "web3-hooks"
import { useContext } from "react"

export default function InstallMetamask({ loggedAccount }) {
  // const [web3State, login] = useContext(Web3Context)

  const handleClick = () => {}
  return (
    <>
      <div className="dashboard relative w-full bg-gray-100 flex">
        <main className="middle flex-grow background-foodprint-50 h-full  h-screen">
          <LogoTop />
          <section className="all-assets-row flex justify-center items-center ">
            <div className="box-login p-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
              <div className="text-foodprint-700 text-2xl">Metamask</div>
              <div className="text-foodprint-300 mt-5 text-center">You need to install Metamask</div>
              <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
                <BoxBtn onClick={handleClick} description={"Install Metamask"} />
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
