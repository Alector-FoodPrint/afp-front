import "../styles/globals.css"
import Head from "next/head"
// import "tailwindcss/tailwind.css"
import React, { useState, useEffect } from "react"
import axios from "axios"
import useSWR from "swr"
import ContextWrapper from "/context/context-wrapper"

import "regenerator-runtime/runtime"
import { Web3Provider } from "web3-hooks"

import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alector FoodPrint</title>
      </Head>

      <ChakraProvider>
        <Web3Provider>
          <ContextWrapper>
            <Component {...pageProps} />
          </ContextWrapper>
        </Web3Provider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
