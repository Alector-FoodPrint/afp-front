import { useEffect, useState, useContext } from "react"
import { contextData } from "../context/context-wrapper"

const useReadTransferEvent = (myContract, tokenId) => {
  const [transRefresh, setTransRefresh] = useState(0)

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [eventList, setEventList] = useState(null)
  const globalData = useContext(contextData)

  const [print, setPrint] = useState(null)
  useEffect(() => {
    console.log(">>>>>>HOOK PRINT ", print)
  }, [print])

  const createEventList = events => {
    const final = []

    for (const event of events) {
      const f = event.args[0]
      const from = f.toString().toLowerCase()
      const fromName = globalData.USERS[from].name
      const fromCountry = globalData.USERS[from].country
      const t = event.args[1]
      const to = t.toString().toLowerCase()
      const toName = globalData.USERS[to].name
      const toCountry = globalData.USERS[to].country
      const tokenId = event.args[2]
      const blockNumber = event.blockNumber
      const blockHash = event.blockHash
      const transactionHash = event.transactionHash
      const transactionLink = `https://rinkeby.etherscan.io/tx/${transactionHash}`

      const eventObj = { from, fromName, fromCountry, to, toName, toCountry, tokenId, blockNumber, blockHash, transactionHash, transactionLink }
      setPrint(eventObj)

      final.push(eventObj)
    }
    // setPrint(final)

    return final
  }

  useEffect(() => {
    const readEvent = async () => {
      if (myContract) {
        try {
          const tokenIdNum = Number(tokenId)
          setPrint(tokenIdNum)

          setIsLoading(true)
          const eventFilter = myContract.filters.Transfer(null, null, tokenIdNum)
          const events = await myContract.queryFilter(eventFilter)

          const evList = createEventList(events)
          setEventList(prev => evList)
        } catch (e) {
          setIsError(true)
          console.log(e.message)
        } finally {
          setIsLoading(false)
        }
      }
    }
    readEvent()
  }, [myContract, tokenId, globalData, transRefresh])

  return [eventList, isLoading, isError, setTransRefresh]
}

export default useReadTransferEvent
