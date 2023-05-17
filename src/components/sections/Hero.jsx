const Hero = () => {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-no-repeat text-white px-56 pt-56  h-[610px]">
      <div className="flex flex-col items-center space-y-[22px]">
        <div className="space-y-[22px]">
          <h1 className="text-4xl leading-[42px] font-extrabold">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="text-base font-medium leading-[24px]">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
        </div>

        <button className="bg-[#FF8C38] rounded-[5px] px-28 py-2 text center">
          Find your Van{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
