import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import imageSrc from "../assets/logo.svg";

const Header = () => {
  const { currentuser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-gradient-to-r from-gray-200 to-indigo-900 text-base sm:text-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <img className="w-40 h-10" src={imageSrc} alt="logo" />
          {/* <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-indigo-400">Homeward</span>
            <span className="text-gray-600">Haven</span>
          </h1> */}
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-slate-100 p-3 rounded-lg "
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch />
          </button>
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
          <Link to="/Profile">
            {currentuser ? (
              <img
                className="rounded-full h-8 w-8 object-cover "
                src={currentuser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-stone-800 hover:underline">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
