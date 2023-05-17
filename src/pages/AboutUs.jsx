import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div>
        <img
          src="/images/van.png"
          alt="pic"
          className="w-full object-cover h-[400px]-"
        />
        <div className="px-40 py-[48px] space-y-[20px]">
          <h1 className="text-[32px] font-bold text-[#161616] leading-[38px] max-w-xl">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="font-medium text-base leading-[22px] max-w-2xl">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="font-medium text-base leading-[22px] ">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="bg-[#FFCC8D] p-[33px] space-y-5">
            <h1 className="font-bold text-2xl leading-[30px] max-w-lg">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </h1>
            <Link to="/vans">
              <button className="text-base font-bold leading-8 bg-[#161616] text-white px-3 py-2">
                Explore our vans
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
