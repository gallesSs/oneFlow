import img1 from "/Partners/Partner1.png";
import img2 from "/Partners/Partner2.png";
import img3 from "/Partners/Partner3.png";
import img4 from "/Partners/Partner4.png";
import img5 from "/Partners/Partner5.png";
import img6 from "/Partners/Partner6.png";
import img7 from "/Partners/Partner7.png";

const Partners = () => {
  return (
    <section className="bg-[#013A4C] py-20 flex flex-col justify-center items-center gap-6">
      <h2 className="font-roboto text-[25px] leading-[38px] text-white">
        Join these companies making business flow
      </h2>
      <ul className="flex gap-8 justify-center items-center">
        <li>
          <img src={img1} alt="" />
        </li>
        <li>
          <img src={img2} alt="" />
        </li>
        <li>
          <img src={img3} alt="" />
        </li>
        <li>
          <img src={img4} alt="" />
        </li>
        <li>
          <img src={img5} alt="" />
        </li>
        <li>
          <img src={img6} alt="" />
        </li>
        <li>
          <img src={img7} alt="" />
        </li>
      </ul>
    </section>
  );
};

export default Partners;
