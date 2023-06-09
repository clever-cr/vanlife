import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState();

  const getVans = async () => {
    const res = await fetch("/api/vans");
    const data = await res.json();
    setVans(data.vans);
  };

  useEffect(() => {
    getVans();
  }, []);

  return (
    <div>
      <div className="bg-primary  px-40 py-5 space-y-6">
        <h1 className="text-[#161616] text-[32px] font-bold leading-[33.65px]">
          Explore our van options
        </h1>
        <div className="grid grid-cols-2   gap-8">
          {vans &&
            vans.map((van, index) => (
              <Link
                to={`/vans/${van.id}`}
                key={index}
                className="text-[#161616] font-semibold text-[20px] leading-8"
              >
                <img className="rounded-lg" src={van.imageUrl} alt="" />
                <div className="flex items-center justify-between pt-3">
                  <h1 className="">{van.name}</h1>
                  <div>
                    <p>{`$ ${van.price} `}</p>
                    <p className="text-right text-sm font-medium">/day</p>
                  </div>
                </div>
                <button
                  className={`px-3 py-1 rounded-md text-white ${
                    van.type == "rugged" ? "bg-[#115E59]" : ""
                  }
                  ${van.type == "luxury" ? "bg-[#161616]" : ""}
                  ${van.type == "simple" ? "bg-[#E17654]" : ""}
`}
                >
                  {van.type}
                </button>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Vans;
