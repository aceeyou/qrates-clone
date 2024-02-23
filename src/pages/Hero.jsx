// import React from "react";

function Hero() {
  return (
    <div className="flex-col desktop:grid desktop:grid-cols-2 desktop:grid-rows-1 max-w-[min(90%,1300px)] mx-auto items-center pb-[.5rem]">
      <div className=" desktop:flex-1 desktop:col-start-1 desktop:row-start-1 text-center desktop:text-start">
        <div className="leading-[1]">
          <h1 className="hero__h1">QRATES</h1>
          <h2 className="hero__h2 text-transparent">
            MUSIC IN <br /> YOUR HANDS
          </h2>
        </div>
        <div className="px-5 pt-4 hidden desktop:block desktop:px-0">
          <h3 className="font-semibold text-2xl max-w-[580px] mx-auto desktop:mx-0 leading-8">
            We make it easy for artists to make vinyl and cassettes, so fans can
            keep pieces of the music they love ↓
          </h3>
          <div className="mt-7 flex-row">
            <button className="rounded-full border-2 border-black font-semibold px-[4rem] py-3 mr-2">
              FOR FANS
            </button>
            <button className="rounded-full bg-black text-white font-semibold  px-[4rem] py-3">
              FOR ARTISTS
            </button>
          </div>
        </div>
      </div>
      <figure className="relative mt-10 mb-[3rem] mx-auto max-w-[500px] desktop:max-w-[550px] row-start-2 desktop:col-start-2 desktop:row-start-1">
        <img
          className="w-[80%] translate-x-11 border-[4px] border-black rotate-[11deg]"
          src="https://images.prismic.io/qrates-prd/539d6e5d-f59b-41c6-b2f2-30aac553065e_image00026.jpeg?auto=compress,format&rect=0,0,3024,4032&w=1200&h=1600"
        />
        <img
          className="w-[6rem] absolute bottom-[45%] "
          src="https://assets.qrates.com/packs/media/sticker/ok-56835833.png"
          alt="hand in a okay sign"
        />
        <figcaption className="sr-only">Man holding a vinyl record</figcaption>
        <p className="absolute font-extrabold text-lg rotate-90 -right-[115px] top-[55%] text-[.85rem]">
          <span className="underline underline-offset-4">MAYAEWK</span> IS ON
          QRATES
        </p>
      </figure>
      <div className="px-5 pt-4 pb-12 desktop:pb-0 desktop:hidden">
        <h3 className="font-semibold text-2xl max-w-[580px] mx-auto text-center desktop:mx-0 leading-8">
          We make it easy for artists to make vinyl and cassettes, so fans can
          keep pieces of the music they love ↓
        </h3>
        <div className="grid gap-4 mt-7">
          <button className="rounded-full border-2 border-black font-semibold px-[4rem] py-3">
            FOR FANS
          </button>
          <button className="rounded-full bg-black text-white font-semibold  px-[4rem] py-3">
            FOR ARTISTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
