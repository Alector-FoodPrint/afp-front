import { useEffect, useState, useContext } from "react"
import { contextData } from "../context/context-wrapper"

const useReadFoodAsset = (myContract, tokenId) => {
  const [faRefreshed, setFaRefreshed] = useState(0)

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [foodObject, setFoodObject] = useState(null)
  const globalData = useContext(contextData)

  const [print, setPrint] = useState(null)
  useEffect(() => {
    console.log(">>>>>>PRINT ", print)
  }, [print])

  useEffect(() => {
    const createFoodObject = (fa, owner) => {
      const fType = fa.foodType
      const foodType = fType.toNumber()
      const foodName = globalData.FOOD_TYPES[foodType].name
      // setPrint(foodName)

      const fSubtype = fa.foodSubtype
      const foodSubtype = fSubtype.toNumber()
      const foodSubname = globalData.FOOD_TYPES[foodType].subtypes[foodSubtype]
      // setPrint(foodSubname)

      const unit = globalData.FOOD_TYPES[foodType].unit

      const producer = fa.producedBy
      const producerHash = producer.toString().toLowerCase()
      const producerName = globalData.USERS[producerHash].name

      const producerCountry = globalData.USERS[producerHash].country

      const ownerHash = owner.toString().toLowerCase()
      const ownerName = globalData.USERS[ownerHash].name

      const ownerCountry = globalData.USERS[ownerHash].country

      const q = fa.quantity
      const quantity = q.toString()

      const myObject = { foodType, foodName, quantity, unit, foodSubtype, foodSubname, producerName, producerHash, producerCountry, ownerName, ownerHash, ownerCountry, tokenId }

      return myObject
    }

    const readToken = async () => {
      if (myContract) {
        try {
          console.log("--- useReadFoodAsset")
          setIsLoading(true)
          let tname = await myContract.name()

          let fa = await myContract.getFoodAssetById(tokenId)

          let owner = await myContract.ownerOf(tokenId)
          const fObject = createFoodObject(fa, owner)
          setFoodObject(prev => fObject)
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
      setFoodObject(null) // This worked for me
    }
  }, [myContract, tokenId, globalData, faRefreshed])

  return [foodObject, isLoading, isError, setFaRefreshed]
}

export default useReadFoodAsset
