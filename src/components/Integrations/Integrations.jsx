import img from "/Integrations/img.png";
const Integrations = () => {
  return (
    <section className="flex justify-between items-center pt-[151px] pb-[70px] px-[182px]">
      <div className="flex flex-col gap-5">
        <h2 className="mb-[10px] w-[387px] text-[#013A4C] font-roboto text-[72px] leading-[72px]">
          Seamless integrations
        </h2>
        <p className="w-100 font-sans text-[21px] text-[#013A4C] leading-[28px]">
          Integrate your favorite tools with your contract workflow and work
          wonders.
        </p>
        <button className="cursor-pointer text-[#013A4C] text-[15px] font-sans leading-5 w-50 h-[50px] border border-[#FFD063] bg-[#FFD063] rounded-[4px]">
          View all integrations
        </button>
      </div>
      <img src={img} alt="" />
    </section>
  );
};

export default Integrations;
