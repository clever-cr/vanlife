import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../utils";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

const HostVans = () => {
  const hostVans = useLoaderData();

  return (
    <div>
      <div className="px-[160px] py-5 space-y-6">
        <h1 className="font-bold text-[32px] leading-8">Your listed vans</h1>
        <div>
          {hostVans.length > 0 ? (
            <div className="flex flex-col gap-4">
              {hostVans.map((van) => (
                <Link to={van.id} key={van.id}>
                  <div
                    className="flex bg-white p-5 rounded-md space-x-4"
                    key={van.id}
                  >
                    <img
                      src={van.imageUrl}
                      className="w-[150px] rounded-md"
                      alt={`Photo of ${van.name}`}
                    />
                    <div className="">
                      <h3 className="font-semibold text-[20px] leading-8 text-[#161616]">
                        {van.name}
                      </h3>
                      <p className="font-medium text-base leading-8">
                        ${van.price}/day
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <h2>Loading .....</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostVans;
