import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import logo from '../../assets/logo.webp'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
          <Link to="/">
       <img className="w- h-14" src={logo} alt="Somalijobs" /></Link>
            <span className="font-bold"></span>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li>
                <div>Home</div>
              </li>
            </Link>
            <Link to="/jobs">
              <li>
                <div>All jobs</div>
              </li>
            </Link>
            {!user && (
              <Link to="/login">
                <li>
                  <div>Login</div>
                </li>
              </Link>
            )}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="/add-job">
                  <li>
                    <div className="justify-between">Add Job</div>
                  </li>
                </Link>
                <Link to="/my-posted-jobs">
                  <li>
                    <div>My Posted Jobs</div>
                  </li>
                </Link>
                <Link to="/my-bids">
                  <li>
                    <div>My Bids</div>
                  </li>
                </Link>
                <Link to="/bid-request">
                  <li>
                    <div>Bid Requests</div>
                  </li>
                </Link>
                <li className="mt-2">
                  <button
                    onClick={logOut}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
