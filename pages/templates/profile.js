import { ArrowRightIcon, PlusIcon, UserIcon, FingerPrintIcon, TruckIcon, ShoppingBagIcon, ViewGridIcon } from "@heroicons/react/solid"
import Image from "next/image"
const profile = props => {
  return (
    <>
      <div className="dashboard relative w-full bg-gray-100 flex">
        <aside className="h-screen sticky top-0  lg:w-52 bg-white flex-shrink-0">
          <div className="logo text-foodprint-70 lg:text-foodprint-800 text-sm lg:text-3xl my-10 mx-auto font-black text-center  lg:visible">AFP</div>

          <div className="navigation">
            <div className="link h-20 w-full h-full  hidden lg:flex">
              <div className="link-bar w-2 bg-foodprint-800 h-10 rounded-r-lg"></div>
              <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-800 ">My Profile</div>
            </div>

            <div className="link h-20 w-full h-full hidden lg:flex">
              <div className="link-bar w-2 bg-white h-10 rounded-r-lg"></div>
              <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-300">Producers</div>
            </div>

            <div className="link h-20 w-full h-full hidden lg:flex">
              <div className="link-bar w-2 bg-white h-10 rounded-r-lg"></div>
              <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-300">Warehouses</div>
            </div>

            <div className="link h-20 w-full h-full hidden lg:flex">
              <div className="link-bar w-2 bg-white h-10 rounded-r-lg"></div>
              <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-300">Vendors</div>
            </div>

            <div className="link h-20 w-full h-full  hidden lg:flex">
              <div className="link-bar w-2 bg-white h-10 rounded-r-lg"></div>
              <div className="link-bar  w-full h-10 pt-2 pl-5 font-black text-foodprint-300">Food Assets</div>
            </div>

            <div className="link h-20 w-full h-full   sm:flex  lg:hidden text-foodprint-700 p-3 hover:bg-foodprint-700 hover:text-white">
              <UserIcon className="mx-auto h-6 w-6    font-black " />
            </div>

            <div className="link h-20 w-full h-full   sm:flex  lg:hidden text-foodprint-700 p-3 hover:bg-foodprint-700 hover:text-white">
              <FingerPrintIcon className="mx-auto h-6 w-6    font-black " />
            </div>

            <div className="link h-20 w-full h-full   sm:flex  lg:hidden text-foodprint-700 p-3 hover:bg-foodprint-700 hover:text-white">
              <TruckIcon className="mx-auto h-6 w-6    font-black " />
            </div>

            <div className="link h-20 w-full h-full   sm:flex  lg:hidden text-foodprint-700 p-3 hover:bg-foodprint-700 hover:text-white">
              <ShoppingBagIcon className="mx-auto h-6 w-6    font-black " />
            </div>

            <div className="link h-20 w-full h-full   sm:flex  lg:hidden text-foodprint-700 p-3 hover:bg-foodprint-700 hover:text-white">
              <ViewGridIcon className="mx-auto h-6 w-6    font-black " />
            </div>
          </div>
        </aside>
        <main className="middle flex-grow background-foodprint-50 h-full ">
          <div className="row-top mt-10 mb-24 lg:flex items-center">
            <div className="top-title flex-grow  text-foodprint-800 flex justify-center">
              <div className="logoName mx-auto">
                <span className="title-alector font-ubuntu text-4xl font-light">Alector</span> <span className="text-4xl font-black">FoodPrint</span>
              </div>
            </div>
            <div className="login pr-10 text-sm invisible lg:visible">Logout with Metamask</div>
          </div>

          <div className="row-two-section w-full">
            <div className="two-section-container flex justify-between mx-16">
              <section className="content-half w-3/6 ">
                <div className="content-title text-foodprint-700 font-black mb-5 ml-3">My Profile</div>

                <div className="content-white flex bg-white rounded-lg p-8 pb-10">
                  <div className="left-block w-3/5">
                    <div className="name text-foodprint-700 text-md mb-10">Alex Bornhast</div>

                    <div className="label-row mb-4  flex">
                      <div className="label-name text-foodprint-100 text-sm w-1/4">Street</div>
                      <div className="w-4/6 label-content text-sm flex-grow">67 Chemin Des Bateliers</div>
                    </div>

                    <div className="label-row  flex">
                      <div className="label-name text-foodprint-100 text-sm w-1/4">Province</div>
                      <div className="w-4/6 label-content text-sm flex-grow">Pays de la Loire</div>
                    </div>
                  </div>

                  <div className="right-block w-2/5 ml-5">
                    <div className="type text-foodprint-700 text-md mb-10">PRODUCER</div>
                    <div className="label-row mb-4 flex">
                      <div className="label-name text-foodprint-100 w-2/6 text-sm">City</div>
                      <div className="label-content text-sm w-3/6">ANGERS</div>
                    </div>

                    <div className="label-row  flex">
                      <div className="label-name text-foodprint-100  w-2/6 text-sm">Zip Code</div>
                      <div className="w-3/6 label-content text-sm">4367</div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="content-half w-2/6 ">
                <div className="content-title text-foodprint-700 font-black mb-5 ml-3">Blockchain</div>
                <div className="content-white  bg-white rounded-lg  p-8 pb-10">
                  <div className="label-row flex w-full mb-4">
                    <div className="label-name text-foodprint-100  w-2/6 text-sm">Network</div>
                    <div className="w-3/6 label-content text-sm">Rinkeby</div>
                  </div>
                  <div className="label-row flex w-full mb-4">
                    <div className="label-name text-foodprint-100  w-2/6 text-sm">Eth Balance</div>
                    <div className="w-3/6 label-content text-sm">17.00</div>
                  </div>
                  <div className="label-row flex w-full mb-4">
                    <div className="label-name text-foodprint-100  w-2/6 text-sm">My AFPs</div>
                    <div className="w-3/6 label-content text-sm">48</div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="row-one-section w-full">
            <section className="all-assets-row ">
              <div className="content-title text-foodprint-700 font-black m-5  mt-10  pl-4">My Food Assets</div>

              <div className="food-asset-row content-white  bg-white rounded-lg m-8 mx-2 md:mx-16 px-8  py-5 ">
                <div className="info flex justify-center space-x-4 md:space-x-7">
                  <div className="col1 ml-5 w-36 lg:w-48  flex-none md:flex-1">
                    <div className="type h-full  lg:flex items-center">
                      <div className="name text-lg font-bold">Tomatoes</div>
                      <div className="quantity ml-2 font-light">(200 Lt)</div>
                    </div>
                  </div>

                  <div className="col2 hidden lg:block">
                    <div className="label text-foodprint-100 text-xs">Farming type</div>
                    <div className="content mt-1">Biological</div>
                  </div>

                  <div className="col3">
                    <div className="label text-foodprint-100 text-xs">AFD ID</div>
                    <div className="content mt-1">4267</div>
                  </div>

                  <div className="col4">
                    <div className="label text-foodprint-100 text-xs">Produced by</div>
                    <div className="content mt-1">Alexios B</div>
                    <div className="hash mt-1    ">
                      <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
                    </div>
                  </div>

                  <div className="col5 hidden xl:block">
                    <div className="label text-foodprint-100 text-xs ">Produced In</div>
                    <div className="content mt-1">Germany</div>
                  </div>

                  <div className="col6 hidden sm:block">
                    <div className="label text-foodprint-100 text-xs">Currently held by</div>
                    <div className="content mt-1">G. Markus</div>
                    <div className="hash mt-1    ">
                      <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
                    </div>
                  </div>

                  <div className="col7 hidden">
                    <div className="label text-foodprint-100 text-xs">Currently in</div>
                    <div className="content mt-1">Italy</div>
                  </div>

                  <div className="col8 hidden md:flex items-center flex-grow justify-center">
                    <div className="arrow-context  bg-foodprint-70 rounded-full h-16 w-16 flex items-center hover:bg-foodprint-700">
                      <ArrowRightIcon className="mx-auto h-10 w-10 text-white" />{" "}
                    </div>
                  </div>
                </div>

                <div className="col8 md:hidden w-full mt-5 bg-red-100 bg-foodprint-70 hover:bg-foodprint-700 rounded-lg">
                  <ArrowRightIcon className="mx-auto h-10 w-10 text-white" />
                </div>
              </div>

              <div className="food-asset-row content-white  bg-white rounded-lg mx-5 px-8 m-8 py-5 flex justify-start space-x-7">
                <div className="col1 ml-5 ">
                  <div className="type h-full flex items-center w-48">
                    <spam className="name text-lg font-bold">Eggs</spam>
                    <spam className="quantity ml-2 font-light">(500 Items)</spam>
                  </div>
                </div>

                <div className="col2">
                  <div className="label text-foodprint-100 text-xs">Farming type</div>
                  <div className="content mt-1">Biological</div>
                </div>

                <div className="col3">
                  <div className="label text-foodprint-100 text-xs">AFD ID</div>
                  <div className="content mt-1">4267</div>
                </div>

                <div className="col4 ">
                  <div className="label text-foodprint-100 text-xs">Produced by</div>
                  <div className="content mt-1">Alexios B</div>
                  <div className="hash mt-1    ">
                    <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
                  </div>
                </div>

                <div className="col5 hidden lg:block">
                  <div className="label text-foodprint-100 text-xs">Produced In</div>
                  <div className="content mt-1">Germany</div>
                </div>

                <div className="col6">
                  <div className="label text-foodprint-100 text-xs">Currently held by</div>
                  <div className="content mt-1">G. Markus</div>
                  <div className="hash mt-1    ">
                    <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
                  </div>
                </div>

                <div className="col7 hidden lg:block">
                  <div className="label text-foodprint-100 text-xs">Currently in</div>
                  <div className="content mt-1">Italy</div>
                </div>

                <div className="col8  flex items-center flex-grow justify-center">
                  <div className="arrow-context  bg-foodprint-70 rounded-full h-16 w-16 flex items-center hover:bg-foodprint-700">
                    <ArrowRightIcon className="mx-auto h-10 w-10 text-white" />{" "}
                  </div>
                </div>
              </div>

              <div className="food-asset-add rounded-lg mx-5 px-8 m-8 py-2  bg-foodprint-70 hover:bg-foodprint-700 text-center text-foodprint-700 font-black text-foodprint-700 hover:text-white">
                <PlusIcon className="mx-auto h-5 w-5    font-black " />
              </div>

              <section className="foodprint-history-row content-white  bg-white rounded-lg mx-5 px-8 m-8 py-5 justify-start ">
                <div className="col1 bullet-content  flex items-center justify-start space-x-7">
                  <div className="bullet-top h-20 w-20"> </div>
                  <div className="produced w-24 text-foodprint-100 text-xs">Produced by</div>
                  <div className="name ">
                    <div className="label w-40">Thoma LDT, FRANCE</div>
                    <div className="hash mt-1    ">
                      <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x99…4dwc</span>
                    </div>
                  </div>
                </div>

                <div className="col1 bullet-content  flex items-center justify-start space-x-7">
                  <div className="bullet-middle h-20 w-20"> </div>
                  <div className="produced text-foodprint-100 text-xs w-24">Transfered from</div>
                  <div className="name ">
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
                  <div className="produced text-foodprint-100 text-xs w-24">Transfered from</div>
                  <div className="name ">
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
              </section>
            </section>

            <section className="all-assets-row w-full m-4 mt-10 mx-12 ">
              <div className="content-title text-foodprint-700 font-black m-5  mt-10  pl-5">Transfer History</div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default profile
