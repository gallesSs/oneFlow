const Demo = () => {
  return (
    <section className="bg-[url('/Demo/bg.png')] bg-cover bg-no-repeat px-[144px] h-[850px] flex flex-col justify-center items-baseline">
      <div className="flex flex-col justify-center items-baseline gap-6">
        <h2 className="font-roboto text-[#F2DCE4] mb-[6px] text-[73px] leading-[78px] font-bold">
          Believe your eyes
        </h2>
        <p className="text-white font-sans text-[26px] leading-8 max-w-[470px]">
          Let us show you how to work smarter with contracts in Oneflow.
        </p>
        <button className="cursor-pointer text-[#013A4C] font-sans text-sm leading-[18px] w-[114px] h-10 border border-[#FFD063] bg-[#FFD063]">
          Get a demo
        </button>
      </div>
    </section>
  );
};

export default Demo;
