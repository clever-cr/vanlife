import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="px-[160px] h-[600px] bg-[#FFF7ED] pt-44 flex flex-col gap-10">
      <h1 className="text-[32px] font-bold leading-10">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/">
        <button className="text-lg text-white font-bold bg-[#161616] py-4 px-10 rounded-md">
          Return to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
