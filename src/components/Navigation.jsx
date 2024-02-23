import "boxicons";
import { useState } from "react";

function Navigation() {
  const [submenuToggle, setSubmenuToggle] = useState(false);
  return (
    <nav className="flex flex-row items-center">
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
            <li className="flex items-center text-[30px]">
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
    </nav>
  );
}

export default Navigation;
