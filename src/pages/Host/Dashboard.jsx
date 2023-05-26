import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [hostVans, setHostVans] = useState([]);

  const getHostVans = async () => {
    const res = await fetch("/api/host/vans");
    const data = await res.json();
    setHostVans(data.vans);
  };

  useEffect(() => {
    getHostVans();
  }, []);

  return (
    <div>
      <div className="bg-[#FFEAD0] px-[160px] py-9 space-y-[31px]">
        <h1 className="font-bold text-4xl leading-5 text-[#161616]">
          Welcome!
        </h1>
        <div className="flex justify-between">
          <p className="text-base font-medium text-[#4D4D4D]">
            Income last <span className="font-bold underline">30 days</span>
          </p>
          <p>Details</p>
        </div>
        <h1 className="font-extrabold text-5xl leading-9 text-[#161616]">
          $2,260
        </h1>
      </div>
      <div className="flex justify-between bg-[#FFDDB2] px-[160px] py-11">
        <div className="flex font-bold text-2xl leading-5 gap-3 items-center">
          <h1>Review score</h1>
          <img src="/images/star.png" className="object-cover" alt="img" />
        </div>
        <p>Details</p>
      </div>
      <div>
        <div className="py-5 space-y-6 px-[160px]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-[32px] leading-8">
              Your listed vans
            </h1>
            <p>View All</p>
          </div>
          <div>
            {hostVans.length > 0 ? (
              <div className="flex flex-col gap-4">
                {hostVans.map((van) => (
                  <Link className="" to={`/host/vans/${van.id}`} key={van.id}>
                    <div
                      className="flex bg-white p-5 rounded-md  justify-between"
                      key={van.id}
                    >
                      <div className="flex space-x-4">
                        <img
                          src={van.imageUrl}
                          className="w-[150px] rounded-md"
                          alt={`Photo of ${van.name}`}
                        />
                        <div>
                          <h3 className="font-semibold text-[20px] leading-8 text-[#161616]">
                            {van.name}
                          </h3>
                          <p className="font-medium text-base leading-8">
                            ${van.price}/day
                          </p>
                        </div>
                      </div>

                      <p>Edit</p>
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
    </div>
  );
};

export default Dashboard;
