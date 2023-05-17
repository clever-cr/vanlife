import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { vanDetails } = useOutletContext();

  return (
    <div>
      {vanDetails && (
        <div>
          <p className="font-medium text-xl leading-10">
            <span className="font-bold text-2xl">${vanDetails.price}</span>
            /day
          </p>
        </div>
      )}
    </div>
  );
};

export default HostVanPricing;
