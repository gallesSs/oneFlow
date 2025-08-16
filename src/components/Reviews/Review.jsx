const Review = ({ item }) => {
  return (
    <>
      <div className="flex flex-col gap-[18px]">
        <p className="text-[#013A4C] font-sans text-lg leading-6">
          {item.comment}
        </p>
        <span className="text-[#89285B] font-sans text-sm leading-4">
          Read full story
        </span>
      </div>
      <div className="flex gap-4 justify-baseline items-center mb-[65px]">
        <img src={item.url} alt="" />
        <div className="flex flex-col gap-0 text-[#013A4C] text-sm font-sans leading-5">
          <span>{item.name}</span>
          <span>{item.job}</span>
          <span>{item.city}</span>
        </div>
      </div>
    </>
  );
};

export default Review;
