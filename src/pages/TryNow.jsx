function TryNow() {
  return (
    <section className="bg-black mx-auto text-center py-10">
      <p className="inline-block text-white text-[.8rem] font-semibold border-[2px] border-white px-3 py-1">
        TRY IT NOW
      </p>
      <h1 className="text-white pt-8 pb-3 text-[2rem] leading-[1] font-bold -tracking-[0.85px] w-[min(85%,100%)] mx-auto">
        Make it real with Qrates Studio
      </h1>
      <p className="text-white w-[min(70%,680px)] mx-auto font-medium text-[1.1rem] leading-[1.5] tracking-tight mb-3">
        Design the look and feel of your vinyl and cassette and use the profit
        calculator to immediately see how much your project will cost, and how
        much you'll earn.
      </p>
      <img
        className="mx-auto w-[300px] my-20"
        src="https://assets.qrates.com/packs/media/section_vinyl_studio/sample_4dilla-d886be83.png"
        alt="vinyl record"
      />

      <button className="rounded-full bg-[#fff804] text-black font-semibold text-[.9rem] px-[6rem] py-3">
        TRY IT NOW
      </button>
    </section>
  );
}

export default TryNow;
