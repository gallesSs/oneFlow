const Hero = () => {
  return (
    <section
      className="scroll-mt-6 bg-[url('/Hero/Hero.png')] bg-cover bg-no-repeat w-full bg-center h-[770px] flex flex-col justify-center"
      id="Hero">
      <div className="flex flex-col justify-center ml-[144px] gap-6">
        <h1 className="text-[#013A4C] font-roboto text-[76px] leading-[78px] mb-[6px]">
          Work wonders
        </h1>
        <p className="text-[#013A4C] text-2xl leading-8 max-w-[491px]">
          Be more effective with smart contracts that make work faster, and life
          easier.
        </p>
        <ul className="flex gap-2 leading-5">
          <li>
            <button className="cursor-pointer w-[176px] h-[50px] bg-[#FFD063] border-[#FFD063] rounded-[4px] text-[#013A4C]">
              Get Oneflow free
            </button>
          </li>
          <li>
            <button className="cursor-pointer text-white w-[130px] h-[50px] border bg-[#013A4C] border-[#013A4C] rounded-[4px]">
              Take a tour
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
