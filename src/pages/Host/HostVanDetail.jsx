import { useParams } from "react-router-dom";
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
  console.log("details", vanDetails);
  return (
    <div className="px-[160px] py-5 space-y-4">
      <Link to=".." relative="path" className="flex items-center gap-2">
        <BsArrowLeft className="text-[#858585]" />
        <p className="underline"> Back to all vans</p>
      </Link>
      {vanDetails ? (
        <div>
          <img src={vanDetails.imageUrl} width={150} />
          <h2>{vanDetails.name}</h2>
          <p>{vanDetails.price}</p>
          <p>{vanDetails.type}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default HostVanDetail;
