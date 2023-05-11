import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { vanDetails } = useOutletContext();

  return (
    <div>
      {vanDetails && (
        <div className="font-bold text-base leading-5 space-y-3">
          <h1>
            Name: <span className="font-medium">{vanDetails.name}</span>
          </h1>
          <h1>
            Category : <span className="font-medium">{vanDetails.type}</span>
          </h1>
          <h1>
            Description:
            <span className="font-medium">{vanDetails.description}</span>
          </h1>
          <h1>
            Visibility: <span className="font-medium">Public</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default HostVanInfo;
