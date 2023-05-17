import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: " underline",
    color: "#161616",
  };

  return (
    <div className="bg-primary">
      <nav className="px-[160px] space-x-7 py-4 font-medium text-lg leading-6">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="vans"
        >
          vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
