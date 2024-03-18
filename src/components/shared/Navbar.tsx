import { Link, useLocation } from "react-router-dom";
import { navbarLinks } from "../../constants";
import { INavLink } from "../../types";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <section className="navbar text-light-1">
      <Link to="/">
        <h2 className="text-light-1 h3-bold md:h2-bold text-left hover:text-light-3">THEMASZ</h2>
      </Link>
      <div className="flex gap-6">
        {navbarLinks.map((link: INavLink) => {
          const isActive = pathname === link.route;
          return (
            <Link
              key={link.label}
              to={link.route}
              className={`text-light-1 font-bold ${
                isActive && "text-yellow-500 underline"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Navbar;
