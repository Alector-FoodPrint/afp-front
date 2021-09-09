import Head from "next/head"
import { useRouter } from "next/router"
import { useState, useEffect, useContext } from "react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push({
      pathname: "/v1/profile/"
    })
  }, [])

  return <div> </div>
}
