import Review from "./Review";

const Reviews = ({ data }) => {
  return (
    <section className="px-[134px] pt-[144px] pb-[102px] flex flex-col gap-[56px]">
      <h2 className="font-roboto text-[#013A4C] text-5xl leading-[54px]">
        Don’t just take our word for it…
      </h2>
      <ul className="flex gap-4 overflow-x-auto no-scrollbar w-full flex-nowrap">
        {data.map((item) => {
          return (
            <li
              className="flex flex-col justify-between min-w-[375px] h-[446px] pt-[65px] px-8 gap-[18px] border border-[#D6DFE2] rounded-[8px]"
              key={item.id}>
              <Review item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
