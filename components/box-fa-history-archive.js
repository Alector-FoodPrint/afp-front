import React from "react"
//     <div className="foodprint-history-row content-white  bg-white rounded-lg mx-6 md:mx-12 px-8 m-8 py-5 justify-start ">
import { FingerPrintIcon } from "@heroicons/react/solid"
import useReadTransferEvent from "../hooks/useReadTransferEvent"
import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"

const BoxFAhistory = ({ tokenId }) => {
  const [print, setPrint] = useState(null)
  const [styledEventList, setStyledEventList] = useState(null)

  useEffect(() => {
    console.log(">>>>>>box fa print ", print)
  }, [print])

  const myContract = useContext(contextAfp)
  const [eventList, isLoading, isError] = useReadTransferEvent(myContract, tokenId)

  const addStyleClasses = evList => {
    let eventClass
    final = []

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
      setsStyledEventList(styledList)
      setPrint(styledEventList)
    }
  }, [eventList])

  return (
    <div className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 pl-12  ">
      <div className="col1 bullet-content  flex items-center justify-start space-x-7">
        <div className="bullet-top h-20 w-20"> </div>
        <div className="produced w-24 text-foodprint-100 text-xs hidden md:block">Produced by</div>
        <div className="produced text-foodprint-100 text-xs md:hidden">by</div>

        <div className="name ">
          <div className="label w-40">Thoma LDT, FRANCE</div>
          <div className="hash mt-1    ">
            <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
          </div>
        </div>
      </div>

      <div className="col1 bullet-content flex items-center justify-start space-x-7 ">
        <div className="bullet-middle h-20 w-20"> </div>
        <div className="produced text-foodprint-100 text-xs w-24 hidden md:block hidden md:block">Transfered from</div>
        <div className="name hidden md:block">
          <div className="label w-40">Thoma LDT, FRANCE</div>
          <div className="hash mt-1    ">
            <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
          </div>
        </div>

        <div className="produced text-foodprint-100 text-xs">to</div>

        <div className="name ">
          <div className="label w-40">Laretti, ITALY</div>
          <div className="hash mt-1    ">
            <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
          </div>
        </div>
      </div>

      <div className="col1 bullet-content  flex items-center justify-start space-x-7">
        <div className="bullet-middle h-20 w-20"> </div>
        <div className="produced text-foodprint-100 text-xs w-24 hidden md:block">Transfered from</div>
        <div className="name hidden md:block">
          <div className="label w-40">Laretti, ITALY</div>
          <div className="hash mt-1    ">
            <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
          </div>
        </div>

        <div className="produced text-foodprint-100 text-xs">to</div>

        <div className="name ">
          <div className="label w-40">Bertikos, GREECE</div>
          <div className="hash mt-1    ">
            <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
          </div>
        </div>
      </div>

      <div className="col1 bullet-content  flex items-center justify-start space-x-7">
        <div className="bullet-bottom h-20 w-20"> </div>
        <div className="produced text-foodprint-100 text-xs">sold</div>
      </div>
    </div>
  )
}

export default BoxFAhistory
