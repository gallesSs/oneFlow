import img1 from "/Blog/img1.png";
import img2 from "/Blog/img2.png";
import img4 from "/Blog/img4.png";

const Blog = () => {
  return (
    <section className="px-[144px] flex flex-col gap-6 mb-[255px]">
      <div className="flex justify-between mb-[50px]">
        <h2 className=" text-[#013A4C] font-roboto text-5xl leading-[54px] font-bold">
          And for our next trick…
        </h2>
        <button className="cursor-pointer w-[146px] h-[50px] border border-[#FFD063] bg-[#FFD063] rounded-[4px] text-[#013A4C] font-sans leading-5">
          Visit our blog
        </button>
      </div>
      <div className="w-[1152px] min-h-[477px] bg-[#F2DCE4] rounded-[8px] flex justify-between py-[52px] px-8 mx-auto">
        <div className="flex flex-col justify-between">
          <span className="w-[51px] h-[21px] rounded-[2px] bg-[#B73D8B] text-[#F2DCE4] text-[11px] font-sans leading-3 flex justify-center items-center">
            Article
          </span>
          <p className="w-112 text-[#013A4C] font-roboto text-5xl leading-[54px]">
            A Basic Guide on E-signatures and What Makes Them Legally Binding
          </p>
          <div className="flex gap-5 text-[#013A4C] font-sans leading-4 text-[11px]">
            <span>E-signature |</span>
            <span>11 min read</span>
          </div>
        </div>
        <img src={img1} alt="" />
      </div>
      <ul className="flex justify-between w-full">
        <li className="flex flex-col gap-0 bg-[#013A4C] rounded-[8px] w-[368px] h-111">
          <img src={img2} alt="" />
          <div className=" pt-6 pl-6 pb-[45px] pr-[56px] flex flex-col gap-[18px]">
            <span className="w-[47px] h-[21px] bg-[#F2DCE4] rounded-[2px] text-[#013A4C] text-[11px] font-sans leading-[11px] flex justify-center items-center">
              Guide
            </span>
            <p className="text-white text-2xl font-roboto leading-8">
              29 documents you can sign online in 2021
            </p>
            <div className=" text-white text-[11px] font-sans leading-4 flex gap-4">
              <span>Contract automation |</span>
              <span>18 min read</span>
            </div>
          </div>
        </li>
        <li className="w-[368px] h-111 rounded-[8px] bg-[#0F5987]">
          <div className="flex flex-col pt-6 pb-22 justify-between items-center h-full">
            <span className="flex justify-center items-center w-[104px] h-[21px] rounded-[2px] bg-[#187BB7] text-[11px] font-sans text-white leading-3">
              Customer Story
            </span>
            <span className="text-[40px] text-white font-roboto leading-12">
              Sweco
            </span>
            <button className="h-10 w-[135px] border border-white rounded-[4px] text-sm text-white font-sans leading-[18px] cursor-pointer">
              Read full story
            </button>
          </div>
        </li>
        <li className="flex flex-col gap-0 bg-[#F2DCE4] rounded-[8px] w-[368px] h-111">
          <img src={img4} alt="" />
          <div className=" pt-6 pl-6 pb-[45px] pr-[56px] flex flex-col gap-[18px]">
            <span className="w-[47px] h-[21px] bg-[#B73D8B] rounded-[2px] text-[#F2DCE4] text-[11px] font-sans leading-[11px] flex justify-center items-center">
              Article
            </span>
            <p className="text-[#013A4C] text-2xl font-roboto leading-8">
              Master digital sales: How to close deals when you’re not allowed
              to shake hands
            </p>
            <div className="text-[#013A4C] text-[11px] font-sans leading-4 flex gap-4">
              <span>Sales |</span>
              <span>6 min read</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Blog;
