import img1 from "/Advantages/img1.svg";
import img2 from "/Advantages/img2.svg";
import img3 from "/Advantages/img3.svg";

const Advantages = () => {
  return (
    <section className="h-[2432px] px-[144px] pt-[122px] bg-no-repeat bg-cover bg-[url('/Advantages/bg.png')] flex flex-col gap-[153px] items-center">
      <h2 className="text-[#013A4C] font-roboto text-[80px] leading-20 font-bold text-center max-w-[730px]">
        The complete platform for smart contracts
      </h2>
      <ul className="flex flex-col justify-center w-full">
        <li className="max-w-[480px] self-end flex flex-col gap-4 justify-baseline items-baseline">
          <img src={img1} alt="" />
          <h3 className="text-[#013A4C] font-roboto text-5xl font-bold leading-[54px]">
            Forget friction
          </h3>
          <p className="text-[#013A4C] font-sans text-lg leading-6">
            Experience a truly digital contract process that makes creating,
            signing, and managing agreements quick, smooth, and effortless.
            Contracts without trickery.
          </p>
          <button className="cursor-pointer w-[127px] h-10 text-white border border-[#013A4C] rounded-[4px] bg-[#013A4C] font-sans text-sm leading-4">
            Take the tour
          </button>
        </li>
        <li className="max-w-[480px] self-start flex flex-col gap-4 justify-baseline items-baseline">
          <img src={img2} alt="" />
          <h3 className="text-[#013A4C] font-roboto text-5xl font-bold leading-[54px]">
            Unleash data
          </h3>
          <p className="text-[#013A4C] font-sans text-lg leading-6">
            Get faster and smarter with automated processes and intelligent
            insights that unlock the data inside your agreements. Leave behind
            the limitations of paper and PDFs. Just like that.
          </p>
          <button className="cursor-pointer w-[127px] h-10 text-white border border-[#013A4C] rounded-[4px] bg-[#013A4C] font-sans text-sm leading-4">
            Take the tour
          </button>
        </li>
        <li className="max-w-[480px] self-end flex flex-col gap-4 justify-baseline items-baseline">
          <img src={img3} alt="" />
          <h3 className="text-[#013A4C] font-roboto text-5xl font-bold leading-[54px]">
            Take control
          </h3>
          <p className="text-[#013A4C] font-sans text-lg leading-6">
            Know what’s happening in real-time with a complete overview of all
            your contracts, all in one place. It’s all the visibility and
            transparency you need, at your fingertips.
          </p>
          <button className="cursor-pointer w-[127px] h-10 text-white border border-[#013A4C] rounded-[4px] bg-[#013A4C] font-sans text-sm leading-4">
            Take the tour
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
