import React from "react";

function ForArtists() {
  return (
    <section className="bg-[#fff804] flex-col px-5 py-9 desktop:grid desktop:grid-cols-[1fr,1.2fr] desktop:items-center desktop:px-8 gap-10">
      <div className="ml-auto">
        <figure className="relative pt-[20px] mb-[3rem] mx-auto desktop:m-0 max-w-[500px] desktop:max-w-[550px] desktop:inline-block ">
          <img
            className="w-[80%] translate-x-11 border-[4px] border-black rotate-[-11deg]"
            src="https://images.prismic.io/qrates-prd/539d6e5d-f59b-41c6-b2f2-30aac553065e_image00026.jpeg?auto=compress,format&rect=0,0,3024,4032&w=1200&h=1600"
          />
          <img
            className="w-[10rem] absolute bottom-[35%] -left-[50px]"
            src="https://assets.qrates.com/packs/media/sticker/fast-f0613562.png"
            alt="hand in a okay sign"
          />
          <figcaption className="sr-only">
            Man holding a vinyl record
          </figcaption>
        </figure>
      </div>
      <div className=" desktop:flex-col desktop:justify-items-center justify-center desktop:-translate-y-4">
        <p className="inline-block bg-white text-slate-900 font-semibold text-sm  border-[2px] border-black px-3 py-1">
          FOR ARTISTS
        </p>
        <article>
          <h1 className="font-semibold text-[2.25rem] leading-[1] my-7 max-w-[600px] desktop:mt-7 desktop:mb-8">
            Your music on vinyl and cassette, direct to your fans.
          </h1>
          <p className="text-[1.55rem] leading-[1.1] font-medium desktop:max-w-[800px] desktop:text-[1.68rem]">
            Qrates is a one-stop platform for your vinyl record and cassette
            production, logistics, sales, and distribution. We take away the
            burden of hassle, cost, and risk, and return more time and revenue
            to artists and labels.
          </p>
          <button className="bg-black px-10 py-3 text-white font-extrabold rounded-full desktop:w-max mt-8 w-full">
            FOR ARTISTS
          </button>
        </article>
      </div>
    </section>
  );
}

export default ForArtists;
