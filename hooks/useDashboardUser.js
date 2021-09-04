import { useState, useEffect, useContext } from "react"
// import Router from "next/router"
import { useRouter } from "next/router"

// import useSWR from "swr"
import { Web3Context } from "web3-hooks"
import { USERS } from "/data/users"

export default function useDashboardUser({ redirectNoMetamaskLogin = false, redirectIfFound = false, redirectTo = false } = {}) {
  // redirectNoMetamaskInstalled: if metamask doesn't exist
  // redirectNoMetamaskLogin: if metamask doesn't exist
  // redirectNoUser: he has Metamask + loged in Metamask but not a registered user
  const router = useRouter()
  const zeroAccount = "0x0000000000000000000000000000000000000000"
  const [web3State, login] = useContext(Web3Context)
  const [userRegistered, setUserRegistered] = useState(false)
  const [user, setUser] = useState(null)
  const [userLoading, setUserLoading] = useState(false)
  // const { data: user, mutate: mutateUser } = useSWR("/api/user");

  const [print, setPrint] = useState(null)
  useEffect(() => {
    console.log(">>>>>> uDU ", print)
  }, [print])

  useEffect(() => {
    setUserLoading(true)
    if (web3State) {
      const NoMetamask = !web3State.isMetaMask
      const NoMetamaskLogin = !web3State.isLogged
      // setPrint({ web3State, login, pathname: router.asPath })

      // if no redirect needed, just return (example: already on /dashboard)
      // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet

      // if (NoMetamask) {
      //   // setPrint(NoMetamask)
      //   Router.push("/v1/user/install-metamask")
      // }

      const redirectTo = router.query.redirectTo ?? router.asPath.split("?")[0]
      if (NoMetamaskLogin && !redirectTo.includes("[")) {
        router.push({
          pathname: "/v1/user/login",
          query: { redirectTo: redirectTo }
        })
      }

      const account = web3State.account
      if (account && account !== zeroAccount) {
        const user = USERS[account.toLowerCase()]
        setPrint({ account: account, user: user, users: USERS })

        setUser(prev => USERS[web3State.account])
        // setUserRegistered(prev => true)
      }

      // if (!USERS[web3State.account && redirectNoUser]) {
      //   // redirectNoUser e.g. "/v1/user/contact-admin"
      //   Router.push(redirectNoUser)
      // }
      setUserLoading(false)
    }
  }, [web3State, login])

  return { web3State, login, user, userLoading }
}
