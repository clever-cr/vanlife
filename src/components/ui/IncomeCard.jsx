const IncomeCard = ({ price, date }) => {
  return (
    <div className="bg-white flex justify-between px-[29px] py-[35px] rounded-md">
      <h1 className="font-semibold text-4xl leading-8 text-[#161616]">
        {price}
      </h1>
      <p className="font-medium text-xl leading-8 text-[#4D4D4D]">{date}</p>
    </div>
  );
};

export default IncomeCard;
