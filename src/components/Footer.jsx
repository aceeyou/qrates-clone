import { useState } from "react";

function Footer() {
  const [viewSelection, setViewSelection] = useState(false);
  const [language, setLanguage] = useState("English");
  return (
    <div className="bg-black text-white px-5 pt-5 pb-2 desktop:px-[4.5rem] desktop:pt-[4rem] desktop:pb-10">
      <div className="grid grid-cols-2 desktop:grid-cols-4 gap-[4rem] ">
        <div>
          <h1 className="font-semibold tracking-wide mb-4 desktop:text-[1.1rem]">
            FOR ARTISTS
          </h1>
          <ul className="leading-[2] desktop:text-[1rem]">
            <li>
              <a href="#" className="font-medium">
                For Artists
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Artist Toolkit
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Referral Program
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold tracking-wide mb-4 desktop:text-[1.1rem]">
            FOR FANS
          </h1>
          <ul className="leading-[2] desktop:text-[1rem]">
            <li>
              <a href="#" className="font-medium">
                For Fans
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Records
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Cassettes
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Stories
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Qrates Currated
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold tracking-wide mb-4 desktop:text-[1.1rem]">
            OUR COMPANY
          </h1>
          <ul className="leading-[2] desktop:text-[1rem]">
            <li>
              <a href="#" className="font-medium">
                About Qrates
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Partners
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold tracking-wide mb-4 desktop:text-[1.1rem]">
            HELP
          </h1>
          <ul className="leading-[2] desktop:text-[1rem]">
            <li>
              <a href="#" className="font-medium">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Shipping
              </a>
            </li>
          </ul>
        </div>
      </div>

      {
        // asdas
      }
      <div className="text-center mt-20 mb-[6rem] desktop:hidden">
        <a
          href=""
          className="bg-white inline-block w-[37px] h-[36px] text-center rounded-full "
        >
          <box-icon type="logo" size="md" name="facebook"></box-icon>
        </a>
        <a
          href=""
          className="bg-white inline-block w-[37px] h-[36px] text-center rounded-full mx-2"
        >
          <box-icon type="logo" size="md" name="instagram"></box-icon>
        </a>
        <a
          href=""
          className="bg-white inline-block w-[37px] h-[36px] text-center rounded-full"
        >
          <box-icon type="logo" size="md" name="twitter"></box-icon>
        </a>
      </div>

      {
        //
      }
      <div className="desktop:flex justify-between items-center mt-[280px] pb-7">
        <div>
          <img
            className="w-full desktop:w-[380px]"
            src="https://assets.qrates.com/packs/media/logos/qrates-logo-footer-498fa5b7.svg"
            alt="qrates logo"
          />
        </div>

        {
          // language selector
        }
        <div className="">
          <div className="relative mt-[4rem] desktop:mt-0 desktop:flex justify-end">
            <div className=" px-6 py-2 border-2 border-white flex justify-between desktop:px-4 desktop:w-[130px]">
              <p>{language}</p>
              <button
                onClick={() => setViewSelection((c) => !c)}
                className={`border-0 ${
                  viewSelection && "-rotate-180 translate-y-[22px]"
                } transition-all duration-200 h-1`}
              >
                <box-icon
                  type="solid"
                  color="white"
                  size="sm"
                  name="chevron-down"
                ></box-icon>
              </button>
            </div>
            {!!viewSelection && (
              <div
                onClick={() => {
                  setLanguage(language === "English" ? "日本語" : "English");
                  setViewSelection(false);
                }}
                className="absolute left-0 right-0 -top-[41px] px-6 py-2 border-x-2 border-t-2 hover:bg-white hover:text-black cursor-pointer desktop:left-[58.8%]"
              >
                <p>{language === "English" ? "日本語" : "English"}</p>
              </div>
            )}
          </div>

          <div className="text-center mt-4 mb-4 hidden desktop:block desktop:text-end">
            <a
              href=""
              className="bg-white inline-block w-[37px] h-[36px] text-center rounded-full "
            >
              <box-icon type="logo" size="md" name="facebook"></box-icon>
            </a>
            <a
              href=""
              className="bg-white inline-block w-[37px] h-[36px] text-center rounded-full mx-2"
            >
              <box-icon type="logo" size="md" name="instagram"></box-icon>
            </a>
            <a
              href=""
              className="bg-white inline-block w-[37px] h-[36px] text-center rounded-full"
            >
              <box-icon type="logo" size="md" name="twitter"></box-icon>
            </a>
          </div>

          {
            //
          }
          <div className="flex-col desktop:flex-row desktop:w-[470px]">
            <div className="flex justify-between my-3 desktop:mb-0">
              <a
                href=""
                className="text-[.84rem] desktop:text-[0.77rem] font-semibold"
              >
                Terms of Service
              </a>
              <a
                href=""
                className="text-[.84rem] desktop:text-[0.77rem] font-semibold"
              >
                Privacy Policy
              </a>
              <a
                href=""
                className="text-[.84rem] desktop:text-[0.77rem] font-semibold"
              >
                Legal Information
              </a>
              <p className="hidden font-semibold text-[.9rem] desktop:text-[0.77rem] text-center desktop:inline desktop:ml-5 ">
                © TDMS Inc.
              </p>
            </div>

            <p className="font-semibold text-[.9rem] desktop:text-[0.77rem] text-center desktop:hidden">
              © TDMS Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
