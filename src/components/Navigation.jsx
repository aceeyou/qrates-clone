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
          width={40}
          className="mr-[50px]"
        />
      </div>
      <div>
        <ul className="flex items-center font-semibold">
          <li
            onClick={() => setSubmenuToggle((c) => !c)}
            className="relative flex items-center mr-[30px] overflow-visible "
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
              <div className="absolute top-[30px] bg-black text-white font-semibold text-[18px] px-[20px] py-[20px] pr-[25px]">
                <ul>
                  <li className="mb-2">Records</li>
                  <li className="mb-2">Cassettes</li>
                  <li className="mb-2">Stories</li>
                  <li className="text-nowrap">Qrates Curated</li>
                </ul>
              </div>
            )}
          </li>
          <li className=" mr-[30px] ">FOR ARTISTS</li>
          <li className="mr-[30px] ">FOR FANS</li>
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
        <a href="#login" className="font-semibold mr-[30px]">
          LOG IN
        </a>
        <a
          href="#make-your-own"
          className="px-[30px] py-[15px] bg-[#b2b2b2] rounded-full font-semibold text-white"
        >
          MAKE YOUR OWN
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
