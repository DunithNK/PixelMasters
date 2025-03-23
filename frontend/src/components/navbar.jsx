import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">PhotoShare</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/profile" className="hover:underline">Profile</Link></li>
        <li><Link to="/explore" className="hover:underline">Explore</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
