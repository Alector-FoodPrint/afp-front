import Navbar from "/components/navbar"
import Footer from "/components/footer"
import LogoTop from "/components/logo-top"
import { useRouter } from "next/router"
import DashboardLayout from "/components/layout-dashboard"
import BoxBtn from "/components/box-btn"
import { Web3Context } from "web3-hooks"
import { useState, useEffect, useContext } from "react"
import useDashboardUser from "/hooks/useDashboardUser"

export default function Login({ loggedAccount }) {
  // const [, login] = useContext(Web3Context)
  const { web3State, login } = useDashboardUser()
  // const route = useRouter
  const router = useRouter()
  const url = "/v1/food-asset/1"

  useEffect(() => {
    if (web3State.isLogged) {
      const redirectTo = router.query.redirectTo ?? false
      if (redirectTo) {
        router.push(redirectTo)
      } else {
        router.push({
          pathname: url,
          query: { redirectSuccess: "true" }
        })
      }
    }
    // console.log("PANOS ", login)
  }, [web3State, router])

  const handleClick = () => {
    login()
    console.log("hello")
  }
  return (
    <DashboardLayout>
      <section className="all-assets-row flex justify-center items-center ">
        <div className="box-login p-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
          <div className="text-foodprint-700 text-2xl">Login</div>
          <div className="text-foodprint-300 mt-5 text-center">You need to login with Metamask</div>
          <button className="mt-5 p-2 w-60 bg-foodprint-700 w-30 text-center rounded-md text-white text-lg font-bold hover:bg-foodprint-800 text-center " onClick={login}>
            Login with Metamask
          </button>
        </div>
      </section>
    </DashboardLayout>
  )
}
