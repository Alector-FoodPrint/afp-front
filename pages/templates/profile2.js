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
            <div className="two-section-container md:flex justify-between mx-8  min-w-max md:mx-16">
              <section className="content-half md:w-3/6 ">
                <div className="content-title text-foodprint-700 font-black mb-8 ml-3">My Profile</div>

                <div className="content-white flex bg-white rounded-lg p-8 pb-10">
                  <div className="left-block md:w-3/5">
                    <div className="name text-foodprint-700 text-md mb-10">Alex Bornhast</div>

                    <div className="label-row mb-4  flex">
                      <div className="label-name text-foodprint-100 text-sm w-2/6 min-w-max pr-1 ">Street</div>
                      <div className="w-4/6 label-content text-sm flex-grow">67 Chemin Des Bateliers</div>
                    </div>

                    <div className="label-row  flex">
                      <div className="label-name text-foodprint-100 text-sm w-2/6  min-w-max pr-1">Province</div>
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
                      <div className="label-name text-foodprint-100  w-2/6 text-sm min-w-max">Zip Code</div>
                      <div className="w-3/6 label-content text-sm">4367</div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="content-half md:w-3/6 md:ml-10 ">
                <div className="content-title text-foodprint-700 font-black mb-8 ml-3 mt-10 md:mt-0">Blockchain</div>
                <div className="content-white  bg-white rounded-lg  p-8 pb-10">
                  <div className="label-row flex w-full mb-4">
                    <div className="label-name text-foodprint-100  w-3/6 text-sm">Network</div>
                    <div className="w-3/6 label-content text-sm">Rinkeby</div>
                  </div>
                  <div className="label-row flex w-full mb-4">
                    <div className="label-name text-foodprint-100  w-3/6 text-sm">Eth Balance</div>
                    <div className="w-3/6 label-content text-sm">17.00</div>
                  </div>
                  <div className="label-row flex w-full mb-4">
                    <div className="label-name text-foodprint-100  w-3/6 text-sm">My AFPs</div>
                    <div className="w-3/6 label-content text-sm">48</div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="row-one-section w-full">
            <section className="all-assets-row ">
              <div className="content-title text-foodprint-700 font-black mx-8 md:mx-16  mt-10  pl-3 mb-0">My Food Assets</div>

              <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
                <div className="info flex justify-center space-x-4 md:space-x-7">
                  <div className="col1 ml-5 w-36 lg:w-48  flex-grow md:flex-1">
                    <div className="type h-full  lg:flex items-center">
                      <div className="name text-lg font-bold">Eggs</div>
                      <div className="quantity ml-0 md:ml-2 mt-2 md:mt-0 font-light min-w-max ">(200 Items)</div>
                    </div>
                  </div>

                  <div className="col2 hidden lg:block">
                    <div className="label text-foodprint-100 text-xs min-w-max">Farming type</div>
                    <div className="content mt-1">Biological</div>
                  </div>

                  <div className="col3">
                    <div className="label text-foodprint-100 text-xs min-w-max">AFD ID</div>
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
              </article>

              <article className="food-asset-row bg-white content-white rounded-lg my-8 mx-8 md:mx-16 px-8  py-5 ">
                <div className="info flex justify-center space-x-4 md:space-x-7">
                  <div className="col1 ml-5 flex-grow lg:w-48  flex-none md:flex-1">
                    <div className="type h-full   lg:flex items-center">
                      <div className="name text-lg font-bold">Potatoes</div>
                      <div className="quantity ml-0 md:ml-2 mt-2 md:mt-0 font-light min-w-max ">(100 Kg)</div>
                    </div>
                  </div>

                  <div className="col2 hidden lg:block">
                    <div className="label text-foodprint-100 text-xs min-w-max">Farming type</div>
                    <div className="content mt-1">Standard</div>
                  </div>

                  <div className="col3">
                    <div className="label text-foodprint-100 text-xs min-w-max">AFD ID</div>
                    <div className="content mt-1">357</div>
                  </div>

                  <div className="col4">
                    <div className="label text-foodprint-100 text-xs">Produced by</div>
                    <div className="content mt-1">Dominikos A.</div>
                    <div className="hash mt-1    ">
                      <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">0x34…ef5a</span>
                    </div>
                  </div>

                  <div className="col5 hidden xl:block">
                    <div className="label text-foodprint-100 text-xs ">Produced In</div>
                    <div className="content mt-1">Italy</div>
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
              </article>

              <div className="food-asset-add rounded-lg my-8 mx-8 md:mx-16 px-8  py-2  bg-foodprint-70 hover:bg-foodprint-700 text-center text-foodprint-700 font-black text-foodprint-700 hover:text-white">
                <PlusIcon className="mx-auto h-5 w-5    font-black " />
              </div>
            </section>
            <footer className=" pt-12 p-5 mx-8 md:mx-12 text-foodprint-100 flex justify-end">
              <FingerPrintIcon className="mr-2 h-5 w-5 text-foodprint-100" />
              <div className="description text-left">2021 by @alector</div>
            </footer>
          </div>
        </main>
      </div>
    </>
  )
}

export default profile
