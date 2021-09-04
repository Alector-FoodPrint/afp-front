import Navbar from "./navbar"
import Footer from "./footer"
import LogoTop from "/components/logo-top"
import { Web3Context } from "web3-hooks"
import { useContext } from "react"
import { useRouter } from "next/router"
import useDashboardUser from "/hooks/useDashboardUser"

export default function DashboardLayout({ children, page }) {
  // const [web3State, login] = useContext(Web3Context)
  const router = useRouter()

  const { web3State } = useDashboardUser({ redirectTo: router.query })

  return (
    <>
      <div className="dashboard relative w-full bg-gray-100 flex">
        <Navbar page={page} />
        <main className="middle flex-grow background-foodprint-50 w-full h-full ">
          <LogoTop />
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}
