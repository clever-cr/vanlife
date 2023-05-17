import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { vanDetails } = useOutletContext();

  return (
    <div>
      {vanDetails && (
        <div>
          <img
            className="rounded-md"
            src={vanDetails.imageUrl}
            alt="van"
            width={150}
          />
        </div>
      )}
    </div>
  );
};

export default HostVanPhotos;
