const Review = ({ title, date, description }) => {
  return (
    <div className="space-y-3 border-b-2 border-[#C7C7C7] pb-5">
      <div className="flex items-center">
        <img src="/images/Star 3.png" alt="star" />
        <img src="/images/Star 3.png" alt="star" />
        <img src="/images/Star 3.png" alt="star" />
        <img src="/images/Star 3.png" alt="star" />
        <img src="/images/Star 3.png" alt="star" />
      </div>
      <p className="font-semibold text-base leading-8 text-[#161616]">
        {title}
        <span className="text-[#8C8C8C]">{date}</span>
      </p>
      <p className="font-medium text-base leading-6 text-[#161616]">
        {description}
      </p>
    </div>
  );
};

export default Review;
