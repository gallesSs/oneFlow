import create from "/Operations/create.svg";
import collaborate from "/Operations/collaborate.svg";
import sign from "/Operations/sign.svg";
import manage from "/Operations/manage.svg";
import analyze from "/Operations/analyze.svg";
import integrate from "/Operations/integrate.svg";
import done from "/Operations/done.svg";
import img from "/Operations/img.png";

const Operations = () => {
  return (
    <section className="bg-[#013A4C] px-[144px] py-[128px]">
      <div className="bg-[#D3E8F4] flex flex-col">
        <ul className="flex justify-between px-[96px] py-8 items-center border-[#94B4C2] border-b">
          <li className="flex flex-col justify-center items-center gap-2">
            <img src={create} alt="" />
            <span>Create</span>
          </li>
          <li className="flex flex-col justify-center items-center gap-2">
            <img src={collaborate} alt="" />
            <span>Collaborate</span>
          </li>
          <li className="flex flex-col justify-center items-center gap-2">
            <img src={sign} alt="" />
            <span>Sign</span>
          </li>
          <li className="flex flex-col justify-center items-center gap-2">
            <img src={manage} alt="" />
            <span>Manage</span>
          </li>
          <li className="flex flex-col justify-center items-center gap-2">
            <img src={analyze} alt="" />
            <span>Analyze</span>
          </li>
          <li className="flex flex-col justify-center items-center gap-2">
            <img src={integrate} alt="" />
            <span>Integrate</span>
          </li>
        </ul>
        <div className="pl-16 pt-[38px] flex justify-between">
          <div className="flex flex-col gap-3 justify-baseline items-baseline">
            <h3 className="text-[#013A4C] font-roboto text-[55px] font-bold leading-20">
              Collaborate
            </h3>
            <p className="text-[#013A4C] font-sans text-[21px] leading-7 mb-11">
              Work together on one version in real-time. No hocus pocus.
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              <li className="flex gap-2 text-[#013A4C] font-sans text-sm leading-5">
                <img src={done} alt="" />
                <span>Edit live</span>
              </li>
              <li className="flex gap-2 text-[#013A4C] font-sans text-sm leading-5">
                <img src={done} alt="" />
                <span>Make fields interactive</span>
              </li>
              <li className="flex gap-2 text-[#013A4C] font-sans text-sm leading-5">
                <img src={done} alt="" />
                <span>Stay one step ahead</span>
              </li>
            </ul>
            <button className="cursor-pointer w-[113px] h-10 border border-[#346170] rounded-[4px] text-[#013A4C] font-sans text-sm leading-[18px]">
              Learn more
            </button>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Operations;
