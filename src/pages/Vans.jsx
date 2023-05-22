import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}
const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const vans = useLoaderData();

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div>
      <div className="bg-primary px-40 py-5 space-y-6">
        <h1 className="text-[#161616] text-[32px] font-bold leading-[33.65px]">
          Explore our van options
        </h1>
        <div className="space-x-[20px] text-base font-medium leading-6  text-[#4D4D4D]">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`px-3 py-1 rounded-md  text-center   ${
              typeFilter === "simple"
                ? "bg-[#E17654] text-white"
                : "bg-[#FFEAD0]"
            }`}
          >
            Simple
          </button>
          <button
            className={`px-3 py-1 rounded-md  text-center   ${
              typeFilter === "luxury"
                ? "bg-[#161616] text-white"
                : "bg-[#FFEAD0]"
            }`}
            onClick={() => handleFilterChange("type", "luxury")}
          >
            Luxury
          </button>
          <button
            className={`px-3 py-1 rounded-md  text-center   ${
              typeFilter === "rugged"
                ? "bg-[#115E59] text-white"
                : "bg-[#FFEAD0]"
            }`}
            onClick={() => handleFilterChange("type", "rugged")}
          >
            rugged
          </button>
          {typeFilter ? (
            <button
              className="underline"
              onClick={() => handleFilterChange("type", null)}
            >
              Clear filters
            </button>
          ) : null}
        </div>
        <div className="grid grid-cols-2   gap-8">
          {vans &&
            displayedVans.map((van, index) => (
              <Link
                to={van.id}
                state={{
                  search: `?${searchParams.toString()}`,
                  type: typeFilter,
                }}
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
