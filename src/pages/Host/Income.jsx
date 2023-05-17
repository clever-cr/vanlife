import IncomeCard from "../../components/ui/IncomeCard";

const Income = () => {
  return (
    <div className="px-[160px] space-y-[27px]">
      <div className="py-9 space-y-[31px]">
        <h1 className="font-bold text-4xl leading-5 text-[#161616]">Income</h1>
        <p className="text-base font-medium text-[#4D4D4D]">
          Income last <span className="font-bold underline">30 days</span>
        </p>
        <h1 className="font-extrabold text-5xl leading-9 text-[#161616]">
          $2,260
        </h1>
      </div>
      <div>
        <img
          className="object-cover"
          src="/public/images/rate.png"
          alt="ratings"
        />
      </div>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl leading-6">Your transactions (3)</h1>
        <p className="text-base font-medium text-[#4D4D4D]">
          Income last <span className="font-bold underline">30 days</span>
        </p>
      </div>
      <div className="space-y-[27px] pb-6">
        <IncomeCard price="$720" date="1/12/22" />
        <IncomeCard price="$560" date="10/11/22" />
        <IncomeCard price="$980" date="23/11/22" />
      </div>
    </div>
  );
};

export default Income;
