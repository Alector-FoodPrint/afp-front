import { useEffect, useState, useContext } from "react"
import { contextData } from "../context/context-wrapper"

const useReadContractUser = (myContract, ownerAddress) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

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
  useEffect(() => {
    console.log(">>>>>> ownerAddress ", ownerAddress)
    console.log(">>>>>> myContract ", myContract)
  }, [myContract, ownerAddress])

  useEffect(() => {
    const readToken = async () => {
      if (myContract && ownerAddress) {
        try {
          setIsLoading(true)
          let tname = await myContract.name()

          const IDs = await ownedNftIDs(myContract, ownerAddress)

          setPrint(myContract)
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
  }, [myContract, ownerAddress])

  return [ownedIDs, isLoading, isError]
}

export default useReadContractUser
