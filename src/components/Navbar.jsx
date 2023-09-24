import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="felx flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcode%2Blogo&psig=AOvVaw0BqwM1InxPJTp3QGZ8Hm7R&ust=1695620912987000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjJtKPGwoEDFQAAAAAdAAAAABAE" />
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div>
            <FaShoppingCart />;
          </div>
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;
