import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-40 py-[34px] bg-primary">
      <Link to="/" className="font-black text-[25px] leading-[40.27px]">
        #VANLIFE
      </Link>
      <div className="flex items-center gap-6 text-base font-semibold leading-[23px]">
        <Link to="about" className="hover:underline">
          About
        </Link>
        <Link className="hover:underline" to="vans">
          Vans
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
