import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: " underline",
    color: "#161616",
  };
  return (
    <div className="flex items-center justify-between px-40 py-[34px] bg-primary">
      <Link to="/" className="font-black text-[25px] leading-[40.27px]">
        #VANLIFE
      </Link>
      <div className="flex items-center gap-6 text-base font-semibold leading-[23px]">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="host"
        >
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="about"
          className="hover:underline"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="hover:underline"
          to="vans"
        >
          Vans
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
