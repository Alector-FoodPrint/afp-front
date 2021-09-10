import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"
import { SwitchHorizontalIcon } from "@heroicons/react/solid"
import { XIcon } from "@heroicons/react/solid"
import SpinnerSyncLoader from "/components/spinner-syncloader"

import useContractTransaction from "/hooks/useContractTransaction"

const BoxProduceAsset = ({ user, handleOnClose, handleRefresh }) => {
  const myContract = useContext(contextAfp)
  const globalData = useContext(contextData)

  const [txLoading, setProducePromise, txSuccess] = useContractTransaction("message custom!!!", "")

  // const [txLoading, setProduceAsset] = useContractTransaction({ message: "AFP created successfully", redirectTo: `` })

  const [allFoodTypes, setAllFoodTypes] = useState(null)
  const [allCategories, setAllCategories] = useState(null)
  const [selectedCategoryName, setSelectedCategoryName] = useState(null)
  const [selectedCategoryNum, setSelectedCategoryNum] = useState(null)

  const [linkedSubcategories, setLinkedSubcategories] = useState(null)
  const [selectedSubcategoryName, setSelectedSubcategoryName] = useState(null)
  const [selectedSubcategoryNum, setSelectedSubcategoryNum] = useState(null)

  const [foodUnit, setFoodUnit] = useState(null)

  const [foodQuantity, setFoodQuantity] = useState(null)

  const [showSubcategory, setShowSubcategory] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const resetValues = () => {
    setSelectedCategoryNum(prev => null)
    setSelectedCategoryName(prev => null)
    setSelectedSubcategoryNum(prev => null)
    setSelectedSubcategoryName(prev => null)
    setQuantity(0)
    setFoodUnit(0)
  }
  const onCloseBtn = () => {
    handleOnClose()
    resetValues()
  }
  const handleProduceAsset = async e => {
    if (myContract) {
      e.preventDefault()
      setProducePromise(myContract.Produce(quantity, selectedCategoryNum, selectedSubcategoryNum))

      resetValues() // await afp.connect(producer).Produce(FOOD_ASSET_2.quantity, FOOD_ASSET_2.foodType, FOOD_ASSET_2.foodSubtype);
    }
  }

  // useEffect(() => {
  //   console.log("ownerAddress", fCategories)
  // }, [fCategories])

  useEffect(() => {
    handleRefresh()
    console.log("REFRESSHED!!!!")
  }, [txSuccess])

  useEffect(() => {
    if (globalData && globalData.FOOD_TYPES) {
      const fTypes = globalData.FOOD_TYPES
      setAllFoodTypes(prev => fTypes)

      const fCategories = fTypes.map(el => el.name)
      setAllCategories(prev => fCategories)

      console.log(">>>>>> fCategories ", fCategories)
    }
  }, [globalData])

  useEffect(() => {
    console.log("selectedCategoryNum:", selectedCategoryNum)

    console.log("linkedSubcategories:", linkedSubcategories)
    // selectedCategory is a number starting from 0
  }, [linkedSubcategories, selectedCategoryNum])

  useEffect(() => {
    // selectedCategory is a number starting from 0
    if (selectedCategoryName && allFoodTypes) {
      const subTypes = allFoodTypes[selectedCategoryNum]?.subtypes
      setLinkedSubcategories(prev => subTypes)
      console.log(">>>>>> linkes subcategories ", subTypes)

      // null initial option >> setUserOption(prev => null)
    } else {
      setLinkedSubcategories(prev => null)
    }
  }, [selectedCategoryName, selectedCategoryNum, allFoodTypes])

  const onSelectCategory = e => {
    if (e.target.value == "default") {
      setSelectedCategoryNum(prev => null)
      setSelectedCategoryName(prev => null)
    } else {
      const catNum = Number(e.target.value)

      setSelectedCategoryNum(prev => catNum)
      setSelectedCategoryName(prev => allFoodTypes[catNum].name)
      setFoodUnit(prev => allFoodTypes[catNum].unit)
      setQuantity("")
    }
  }

  const onSelectSubcategory = e => {
    // selectedSubcategory is a number from zero
    const subNumber = Number(e.target.value)
    setSelectedSubcategoryNum(prev => subNumber)
    setSelectedSubcategoryName(prev => allFoodTypes[selectedCategoryNum].subtypes[subNumber])
    setQuantity("")
  }

  const onChangeQuantity = e => {
    // selectedSubcategory is a number from zero
    const q = Number(e.target.value)
    setQuantity(prev => q)
    console.log("change input")
  }

  const listOptionCategories =
    allCategories?.map((cat, index) => (
      <option value={index} key={index}>
        {cat}
      </option>
    )) ?? []

  const listOptionSubcategories =
    linkedSubcategories?.map((subcat, index) => (
      <option value={index} key={index}>
        {subcat}
      </option>
    )) ?? []

  const TransactionLoading = txLoading ? (
    <div className="w-full flex justify-center p-10">
      <SpinnerSyncLoader loading={true} />
    </div>
  ) : (
    ""
  )
  const BtnProduce = !txLoading ? (
    <a className="" onClick={handleProduceAsset} href="">
      <div className="food-asset-add rounded-lg my-8  px-8  py-2  bg-red-300 hover:bg-red-700 text-center  font-black  text-white hover:text-white flex justify-center">
        <div>Produce</div>
      </div>
    </a>
  ) : (
    <div className="food-asset-add rounded-lg my-8  px-8  py-2  bg-red-300 hover:bg-red-700 text-center  font-black  text-white hover:text-white flex justify-center">
      <SpinnerSyncLoader loading={true} />
    </div>
  )

  // const setQuantity = selectedSubcategoryName ? <div className=""></div> : ""

  const foodAssetDescription = (
    <div className="text-foodprint-100">
      <div className="p-4">New Food Asset</div>

      <div className="content mx-10 p-4">
        <div className="">
          Produced by: {user?.name} ({user?.hash}
        </div>

        <div className="">Category: {selectedCategoryName}</div>
        <div className="">Subcategory: {selectedSubcategoryName}</div>
        <div className="">
          Quantity: {quantity} {foodUnit}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
        <div className="content-title  mb-8 w-full flex justify-start">
          <div className="flex-grow text-foodpribnt-300 ">Create New Food Asset</div>
          <div className="" onClick={onCloseBtn}>
            <XIcon className="mx-auto h-4 w-4    text-gray-400 inline-block" />
          </div>
        </div>

        <div className="info  space-x-4 md:space-x-7">
          <div>
            <form className=" flex flex-col justify-center items-center  md:flex-row md:justify-start md:items-end space-x-4 space-y-4">
              <label className="text-foodprint-700 block ">
                <select className=" bg-foodprint-700 text-white p-2 rounded-lg font-black block" onChange={onSelectCategory}>
                  <option value="default" key="default">
                    Category
                  </option>

                  {listOptionCategories}
                </select>
              </label>

              <label className={`${!selectedCategoryName ? "hidden" : ""} text-foodprint-700 block flex items-center justify-start space-x-4`}>
                <select className="block bg-foodprint-700 text-white p-2 rounded-lg font-black block" onChange={onSelectSubcategory}>
                  <option value="default" key="default">
                    subcategory
                  </option>

                  {listOptionSubcategories}
                </select>
              </label>

              <label className={`${selectedCategoryName && selectedSubcategoryName ? "" : "hidden"} text-foodprint-700   flex items-center justify-start space-x-4`}>
                Quantity: <input className={`${!selectedSubcategoryName ? "hidden" : ""} w-20 border-4  bg-foodprint-70 rounded-lg text-foodprint-700 block mx-2 px-3`} type="number" id="quantity" name="quantity" min="10" max="1000" onChange={onChangeQuantity} value={quantity} /> {foodUnit}
              </label>
            </form>

            {TransactionLoading}
            <div></div>
            <div className={`${selectedCategoryName && selectedSubcategoryName && quantity ? "" : "hidden"} `}>
              {foodAssetDescription}
              <div className="w-full flex justify-center"> {BtnProduce}</div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default BoxProduceAsset
