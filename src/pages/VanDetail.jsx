import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const VanDetail = () => {
  const [vanDetails, setVanDetails] = useState();
  const params = useParams();
  const location = useLocation();

  const getVansById = async () => {
    const res = await fetch(`/api/vans/${params.id}`);
    const data = await res.json();
    setVanDetails(data.vans);
  };

  useEffect(() => {
    getVansById();
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div>
      <Link
        to={`..${search}`}
        relative="path"
        className="flex items-center gap-2 px-[160px] py-5"
      >
        <BsArrowLeft className="text-[#858585]" />
        <p className="underline"> Back to {type} vans</p>
      </Link>
      {vanDetails ? (
        <div className="px-40 py-5 space-y-6">
          <img className="rounded-lg" src={vanDetails.imageUrl} />
          <button
            className={`px-3 py-1 rounded-md text-white ${
              vanDetails.type == "rugged" ? "bg-[#115E59]" : ""
            }
                  ${vanDetails.type == "luxury" ? "bg-[#161616]" : ""}
                  ${vanDetails.type == "simple" ? "bg-[#E17654]" : ""}
`}
          >
            {vanDetails.type}
          </button>
          <h2 className="font-bold leading-8 text-[32px] text-[#161616]">
            {vanDetails.name}
          </h2>
          <p className="font-medium text-xl leading-10">
            <span className="font-bold text-2xl">${vanDetails.price}</span>
            /day
          </p>
          <p className="text-base font-medium leading-6 text-[#161616]">
            {vanDetails.description}
          </p>
          <button className="bg-[#FF8C38] px-20 p-2 text-white font-bold text-lg leading-8 rounded-lg">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
