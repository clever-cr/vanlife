import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const HostVanDetail = () => {
  const [vanDetails, setVanDetails] = useState();
  const params = useParams();

  const getVansById = async () => {
    const res = await fetch(`/api/host/vans/${params.id}`);
    const data = await res.json();
    setVanDetails(data.vans);
  };

  useEffect(() => {
    getVansById();
  }, [params.id]);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className="px-[160px] py-5 space-y-4 h-[540px]">
      <Link to="/vans" relative="path" className="flex items-center gap-2">
        <BsArrowLeft className="text-[#858585]" />
        <p className="underline"> Back to all vans</p>
      </Link>
      <div className="bg-white h-[440px] p-12 mb-12 rounded-md">
        {vanDetails ? (
          <div className="flex gap-5">
            <img className="rounded-md" src={vanDetails.imageUrl} width={150} />
            <div>
              <p
                className={`px-3 py-1 rounded-md text-white text-center  ${
                  vanDetails.type == "rugged" ? "bg-[#115E59]" : ""
                }
              
                              ${
                                vanDetails.type == "luxury"
                                  ? "bg-[#161616]"
                                  : ""
                              }
                              ${
                                vanDetails.type == "simple"
                                  ? "bg-[#E17654]"
                                  : ""
                              }`}
              >
                {vanDetails.type}
              </p>
              <h2 className="font-bold leading-8 text-[26px] text-[#161616]">
                {vanDetails.name}
              </h2>
              <p className="font-medium text-xl leading-10">
                <span className="font-bold text-2xl">${vanDetails.price}</span>
                /day
              </p>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
        <nav className="pt-[26px] space-x-[21px] pb-4 font-medium text-base leading-5 text-[#4D4D4D]">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ vanDetails }} />
      </div>
    </div>
  );
};

export default HostVanDetail;
