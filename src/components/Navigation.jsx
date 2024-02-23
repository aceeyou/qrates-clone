import "boxicons";
import { useState } from "react";

function Navigation({ mobileMenuToggle, setMobileMenuToggle }) {
  const [submenuToggle, setSubmenuToggle] = useState(false);
  const [mobileSubMenuToggle, setMobileSubMenuToggle] = useState(false);
  return (
    <nav className="flex flex-row items-center z-50">
      <div>
        <img
          src="https://assets.qrates.com/packs/media/logos/qrates-logo-6b1bd403.svg"
          alt="qrates logo"
          className="mr-[50px] w-[25px] desktop:w-[40px]"
        />
      </div>
      <div>
        <ul className="hidden items-center font-semibold desktop:flex">
          <li
            onClick={() => setSubmenuToggle((c) => !c)}
            className="relative font-extrabold flex items-center mr-[30px] overflow-visible "
          >
            DISCOVER MUSIC{" "}
            <span
              className={`ml-[3px] flex items-center ${
                submenuToggle && "-rotate-180"
              } transition duration-200`}
            >
              <box-icon name="chevron-down"></box-icon>
            </span>
            {submenuToggle && (
              <div
                className={`absolute top-[30px] scale-x-100 ${
                  submenuToggle ? "scale-x-full" : "scale-x-0"
                } bg-black text-white font-semibold text-[18px] px-[20px] py-[20px] pr-[25px] transition-all duration-150`}
              >
                <ul>
                  <li className="mb-2">Records</li>
                  <li className="mb-2">Cassettes</li>
                  <li className="mb-2">Stories</li>
                  <li className="text-nowrap">Qrates Curated</li>
                </ul>
              </div>
            )}
          </li>
          <li className="mr-[30px] font-extrabold ">FOR ARTISTS</li>
          <li className="mr-[30px] font-extrabold">FOR FANS</li>
          <li className="flex items-center mr-[30px] ">
            <box-icon name="search"></box-icon>
            <span className="sr-only">Search</span>
          </li>
          <li className="flex items-center mr-[30px] ">
            <box-icon name="cart"></box-icon>
            <span className="sr-only">Cart</span>
          </li>
        </ul>
      </div>
      <div className="ml-auto pr-2">
        <div className="inline-block desktop:hidden">
          <ul className="flex items-center">
            <li className="flex items-center mr-[2rem] font-extrabold">
              <box-icon name="search"></box-icon>
              <span className="sr-only">Search</span>
            </li>
            <li className="flex items-center mr-[2rem] font-extrabold">
              <box-icon name="cart"></box-icon>
              <span className="sr-only">Cart</span>
            </li>
            <li
              onClick={() => setMobileMenuToggle((b) => !b)}
              className="flex items-center text-[30px]"
            >
              <box-icon name="menu" size="md"></box-icon>
              <span className="sr-only">Menu</span>
            </li>
          </ul>
        </div>
        <div className="hidden desktop:block">
          <a href="#login" className="font-extrabold mr-[2rem]">
            LOG IN
          </a>
          <a
            href="#make-your-own"
            className="px-[30px] py-[15px] bg-[#b2b2b2] rounded-full font-extrabold text-white"
          >
            MAKE YOUR OWN
          </a>
        </div>
      </div>

      {
        // mobile menu view
      }
      <div
        className={`${
          mobileMenuToggle ? "scale-y-auto" : "scale-y-0"
        } overflow-hidden origin-top fixed top-20 left-0 right-0 bottom-0 p-5 bg-white z-50 transition-transform ease-in-out duration-200`}
      >
        <ul>
          <li
            onClick={() => setMobileSubMenuToggle((c) => !c)}
            className="relative font-extrabold text-2xl flex items-center mr-[30px] overflow-visible "
          >
            DISCOVER MUSIC{" "}
            <span
              className={`ml-[3px] flex items-center ${
                mobileSubMenuToggle && "-rotate-180"
              } transition duration-200`}
            >
              <box-icon name="chevron-down"></box-icon>
            </span>
          </li>
          <li
            className={`pl-4  ${
              mobileSubMenuToggle ? "h-auto block" : "h-0 hidden"
            } origin-top transition-[height] duration-200`}
          >
            <div className={`transition-all duration-150 my-2`}>
              <ul>
                <li className="mb-2 font-bold text-xl">Records</li>
                <li className="mb-2 font-bold text-xl">Cassettes</li>
                <li className="mb-2 font-bold text-xl">Stories</li>
                <li className="text-nowrap font-bold text-xl">
                  Qrates Curated
                </li>
              </ul>
            </div>
          </li>
          <li className="font-extrabold text-2xl my-5">
            <a href="#">FOR ARTISTS</a>
          </li>
          <li className="font-extrabold text-2xl">
            <a href="#">FOR FANS</a>
          </li>
        </ul>
        <div className="my-6">
          <a
            href=""
            className="bg-black inline-block w-[37px] h-[36px] text-center rounded-full "
          >
            <box-icon
              type="logo"
              color="white"
              size="md"
              name="facebook"
            ></box-icon>
          </a>
          <a
            href=""
            className="bg-black inline-block w-[37px] h-[36px] text-center rounded-full mx-2"
          >
            <box-icon
              type="logo"
              color="white"
              size="md"
              name="instagram"
            ></box-icon>
          </a>
          <a
            href=""
            className="bg-black inline-block w-[37px] h-[36px] text-center rounded-full"
          >
            <box-icon
              type="logo"
              color="white"
              size="md"
              name="twitter"
            ></box-icon>
          </a>
        </div>
        <div className="">
          <button className="w-full py-3 text-md mb-2 bg-black text-white font-extrabold rounded-full">
            MAKE A RECORD
          </button>
          <button className="w-full py-3 text-md font-extrabold rounded-full border-2 border-black">
            LOG IN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
