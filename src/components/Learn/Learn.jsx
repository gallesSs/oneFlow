import img from "/Learn/img.png";
const Learn = () => {
  return (
    <section
      className="bg-[#013A4C] pl-[144px] pb-8 flex justify-between relative"
      id="Learn">
      <div className="flex flex-col gap-5">
        <h2 className="text-[#F2DCE4] max-w-100 text-7xl leading-[72px] font-roboto mb-4">
          Turn signatures into smart contracts
        </h2>
        <p className="max-w-[528px] font-sans text-[21px] leading-7 text-white">
          Experience true contract magic by automating the entire contract
          process — from creating to signing and managing.
        </p>
        <button className="w-[216px] h-[50px] border border-[#FFD063] rounded-[4px] bg-[#FFD063] text-[#013A4C] font-sans leading-5">
          Take our product tour
        </button>
      </div>
      <img className="absolute left-[50%] bottom-[10%]" src={img} alt="" />
    </section>
  );
};

export default Learn;
