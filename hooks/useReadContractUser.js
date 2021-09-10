import { useEffect, useState, useContext } from "react"
import { contextData } from "../context/context-wrapper"
import { Web3Context } from "web3-hooks"

const useReadContractUser = (myContract, ownerAddress) => {
  const [web3State] = useContext(Web3Context)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isRefreshed, setIsRefreshed] = useState(0)

  const [ownedIDs, setOwnedIDs] = useState(null)
  const globalData = useContext(contextData)

  const [print, setPrint] = useState(null)
  useEffect(() => {
    console.log(">>>>>>RRead ", print)
  }, [print])

  const balanceArray = max => {
    // for max = 10, returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return [...Array(max).keys()]
  }

  useEffect(() => {
    console.log(">>>>>> ownerAddress ", ownerAddress)
    console.log(">>>>>> myContract ", myContract)
  }, [myContract, ownerAddress])

  useEffect(() => {
    const ownedNftIDs = async (contract, account) => {
      const ownerBalance = await contract.balanceOf(account)
      console.log("insideeeee!", ownerBalance.toNumber())

      const indexArray = balanceArray(ownerBalance.toNumber())
      const final = []
      for (const index of indexArray) {
        const NFT_ID = await contract.tokenOfOwnerByIndex(account, index)
        final.push(NFT_ID.toNumber())
      }

      return final
    }

    const readToken = async () => {
      if (myContract && ownerAddress) {
        try {
          setIsLoading(true)
          let tname = await myContract.name()

          const IDs = await ownedNftIDs(myContract, ownerAddress)

          setOwnedIDs(prev => IDs)
        } catch (e) {
          setIsError(true)
          console.log(e.message)
        } finally {
          setIsLoading(false)
        }
      }
    }
    readToken()
    return () => {
      setOwnedIDs(null) // This worked for me
    }
  }, [myContract, ownerAddress, isRefreshed])

  return [ownedIDs, isLoading, isError, setIsRefreshed]
}

export default useReadContractUser
