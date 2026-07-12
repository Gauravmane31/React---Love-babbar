import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
    {/* if we use anchor tag then it loads complete page for every route */}
    <h2>Using Anchor tag</h2>
    {/* heading tags will not work bcz we are using tailwind in which all css propertis get reset by default at it should be added explicitly */}
      <a href="/">Home</a>
      {" | "}
      <a href="/about">About</a>
      {" | "}
      <a href="/dashboard">Dashboard</a>
      {/* if we use link tag then it will not load complete page, only change the required components */}
    <h2>Using Link tag</h2>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/about">About</Link>
      {" | "}
      <Link to="/dashboard">Dashboard</Link>
      {/* Navlink is prefered way to use for navigation bcz it contains an active flag which is already attached to it which help us to change the styling of the content */}
    <h2>Using NavLink tag</h2>
      <NavLink to="/" className={({isActive})=>isActive? "border-2":""}>Home</NavLink>
      {/* isActive is a boolean flag which is already come with navlink and it is seted as true when a this link is active. */}
      {" | "}
      <NavLink to="/about" className={({isActive})=>isActive? "border-2":""}>About</NavLink>
      {" | "}
      <NavLink to="/dashboard" className={({isActive})=>isActive? "border-2":""}>Dashboard</NavLink>
    </nav>
  );
}

export default Navbar;
