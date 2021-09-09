import { contextAfp, contextData } from "/context/context-wrapper"
import { useState, useEffect, useContext } from "react"
import { SwitchHorizontalIcon } from "@heroicons/react/solid"

import useContractTransaction from "/hooks/useContractTransaction"

const BoxProduceAsset = ({ user }) => {
  const myContract = useContext(contextAfp)
  const globalData = useContext(contextData)

  const [txLoading, setProducePromise] = useContractTransaction("message custom!!!", "")

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

  const handleProduceAsset = async () => {
    if (myContract) {
      setProducePromise(myContract.Produce(quantity, selectedCategoryNum, selectedSubcategoryNum))

      // await afp.connect(producer).Produce(FOOD_ASSET_2.quantity, FOOD_ASSET_2.foodType, FOOD_ASSET_2.foodSubtype);
    }
  }

  // useEffect(() => {
  //   console.log("ownerAddress", fCategories)
  // }, [fCategories])

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
    console.log(quantity)
    // selectedCategory is a number starting from 0
  }, [quantity])

  useEffect(() => {
    // selectedCategory is a number starting from 0
    if (selectedCategoryNum && allFoodTypes) {
      const subTypes = allFoodTypes[selectedCategoryNum].subtypes
      setLinkedSubcategories(prev => subTypes)
      console.log(">>>>>> linkes subcategories ", subTypes)

      // null initial option >> setUserOption(prev => null)
    }
  }, [selectedCategoryNum, allFoodTypes])

  const onSelectCategory = e => {
    const catNum = Number(e.target.value)
    setSelectedCategoryNum(prev => catNum)
    setSelectedCategoryName(prev => allFoodTypes[catNum].name)
    setFoodUnit(prev => allFoodTypes[catNum].unit)
  }

  const onSelectSubcategory = e => {
    // selectedSubcategory is a number from zero
    const subNumber = Number(e.target.value)
    setSelectedSubcategoryNum(prev => subNumber)
    setSelectedSubcategoryName(prev => allFoodTypes[selectedCategoryNum].subtypes[subNumber])
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

  const BtnProduce =
    selectedSubcategoryNum && quantity ? (
      <div className="" onClick={handleProduceAsset}>
        <div className="food-asset-add rounded-lg my-8  px-8  py-2  bg-red-300 hover:bg-red-700 text-center  font-black  text-white hover:text-white flex justify-center">
          <SwitchHorizontalIcon className=" h-5  mr-2   font-black " />
          <div>Produce</div>
        </div>
      </div>
    ) : (
      ""
    )

  // const setQuantity = selectedSubcategoryName ? <div className=""></div> : ""

  const foodAssetDescription =
    selectedSubcategoryNum && quantity ? (
      <div className="">
        <div className="">
          producedBy: {user?.name} ({user?.hash}
        </div>

        <div className="">New Food Asset</div>
        <div className="">category: {selectedCategoryName}</div>
        <div className="">subcategory: {selectedSubcategoryName}</div>
        <div className="">
          Quantity: {quantity} {foodUnit}
        </div>
      </div>
    ) : (
      ""
    )

  return (
    <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
      <div className="info flex justify-start space-x-4 md:space-x-7">
        <div>
          <form>
            <label className="text-foodprint-700 block mb-4 flex items-center justify-start space-x-4">
              <div> New asset category?</div>

              <select className="bg-gray-300 p-2 rounded-lg font-black block" onChange={onSelectCategory}>
                <option value="" key="">
                  select category
                </option>

                {listOptionCategories}
              </select>
            </label>

            <label className={`${!selectedCategoryName ? "hidden" : ""} text-foodprint-700 block mb-4 flex items-center justify-start space-x-4`}>
              <div> Select the subcategory for your new asset</div>
              <select className="bg-gray-300 p-2 rounded-lg font-black block" onChange={onSelectSubcategory}>
                <option value="" key="">
                  select subcategory
                </option>

                {listOptionSubcategories}
              </select>
            </label>

            <label className={`${!selectedSubcategoryName ? "hidden" : ""} text-foodprint-700 block mb-4 flex items-center justify-start space-x-4`}>
              Add quantity <input className={`${!selectedSubcategoryName ? "hidden" : ""} border-4 border-indigo-600 text-foodprint-700 block mb-4 flex items-center justify-start space-x-4`} type="number" id="quantity" name="quantity" min="10" max="100" onChange={onChangeQuantity} /> {foodUnit}
            </label>
          </form>

          <div></div>
          {foodAssetDescription}
          <div className="w-full flex justify-center"> {BtnProduce}</div>
        </div>
      </div>
    </article>
  )
}

export default BoxProduceAsset
