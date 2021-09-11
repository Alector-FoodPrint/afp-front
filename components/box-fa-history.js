import React from "react"
//     <div className="foodprint-history-row content-white  bg-white rounded-lg mx-6 md:mx-12 px-8 m-8 py-5 justify-start ">
import { FingerPrintIcon } from "@heroicons/react/solid"
import useReadTransferEvent from "../hooks/useReadTransferEvent"
import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"
import BulletTransferFromTo from "./bullet-transfer-from-to"
import BulletProducedBy from "./bullet-produced-by"
import SpinnerSyncLoader from "/components/spinner-syncloader"

const BoxFAhistory = ({ tokenId, refreshed }) => {
  const [print, setPrint] = useState(null)
  const [styledEventList, setStyledEventList] = useState(null)
  const myContract = useContext(contextAfp)
  const [eventList, isLoading, isError, setTransRefresh] = useReadTransferEvent(myContract, tokenId)

  useEffect(() => {
    setTransRefresh(prev => prev + 1)
  }, [refreshed])

  useEffect(() => {
    console.log(">>>>>>box fa print ", print)
  }, [print])

  const addStyleClasses = evList => {
    let eventClass
    let final = []

    if (evList.length == 1) {
      let obj = evList[0]
      let finalObj = {
        ...obj,
        styleClass: "bullet-simple"
      }
      return [finalObj]
    }

    for (let i = 0; i < evList.length; i++) {
      if (i == 0) {
        let obj = evList[i]
        let finalObj = {
          ...obj,
          styleClass: "bullet-first"
        }
        final.push(finalObj)
      } else if (i == evList.length - 1) {
        let obj = evList[i]
        let finalObj = {
          ...obj,
          styleClass: "bullet-last"
        }
        final.push(finalObj)
      } else {
        let obj = evList[i]
        let finalObj = {
          ...obj,
          styleClass: "bullet-middle"
        }
        final.push(finalObj)
      }
    }

    return final
  }

  useEffect(() => {
    if (eventList) {
      const styledList = addStyleClasses(eventList)
      setStyledEventList(styledList)
      setPrint(styledEventList)
    }
  }, [eventList])

  const jsxLoading = (
    <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 flex justify-center">
      <SpinnerSyncLoader loading={true} />
    </article>
  )

  const jsxLoaded = styledEventList ? <div className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 pl-12  ">{styledEventList.map((event, i) => (i == 0 ? <BulletProducedBy event={event} key={i} /> : <BulletTransferFromTo event={event} key={i} />))}</div> : <div>nothing to see here</div>

  if (isLoading) {
    return jsxLoading
  } else if (styledEventList) {
    return jsxLoaded
  } else {
    return <div>problem in loading data</div>
  }
}

export default BoxFAhistory
