import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-200 to-indigo-900 text-base sm:text-xl">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-indigo-400">Homeward</span>
            <span className="text-gray-600">Haven</span>
          </h1>
        </Link>
        <form className="flex items-center bg-slate-100 p-3 rounded-lg ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-3 text-gray-300 ">
          <Link to="/">
            <li className="hidden sm:inline text-stone-800 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="hidden sm:inline text-stone-800 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-stone-800 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
