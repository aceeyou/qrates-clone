function TryNow() {
  return (
    <section className="bg-black mx-auto text-center py-10">
      <p className="inline-block text-white text-[.9rem] font-semibold border-[3px] border-white px-3 py-1">
        TRY IT NOW
      </p>
      <h1 className="text-white pt-7 pb-1 text-[2.6rem] font-extrabold -tracking-[0.85px]">
        Make it real with Qrates Studio
      </h1>
      <p className="text-white max-w-[44%] mx-auto font-medium text-[1.275rem] leading-[1.2] tracking-tighter mb-3">
        Design the look and feel of your vinyl and cassette and use the profit
        calculator to immediately see how much your project will cost, and how
        much you'll earn.
      </p>
      <img
        className="mx-auto w-[300px] my-20"
        src="https://assets.qrates.com/packs/media/section_vinyl_studio/sample_4dilla-d886be83.png"
        alt="vinyl record"
      />

      <button className="rounded-full bg-[#fff804] text-black font-extrabold  px-[6rem] py-3">
        TRY IT NOW
      </button>
    </section>
  );
}

export default TryNow;
