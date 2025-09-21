import React from "react";
import { IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2 dark:bg-gray-800 fixed w-full z-50 shadow-sm">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* ✅ Logo should also use Link */}
          <Link to="/" className="flex items-center">
            <img
              src="/img/pinnacle.png"
              alt="Pinnacle Logo"
              className="h-8 sm:h-10 w-auto mr-2"
            />
          </Link>

          <div className="flex items-center lg:order-2 gap-2">
            <IconButton
              variant="text"
              size="sm"
              className="ml-2 text-gray-700 hover:bg-gray-100 lg:hidden"
              onClick={() => setOpenNav(!openNav)}
              aria-label="Toggle navigation"
            >
              {openNav ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>

          <div
            className={`${openNav ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:order-1 lg:items-center`}
            id="mobile-menu"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
              <li>
                <Link
                  to="/"
                  onClick={() => setOpenNav(false)}
                  className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg 
                             lg:hover:bg-transparent lg:hover:text-blue-600 lg:p-0 
                             dark:text-gray-300 dark:hover:bg-gray-700 
                             lg:dark:hover:bg-transparent dark:hover:text-white 
                             transition-colors capitalize"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/aboutUs"
                  onClick={() => setOpenNav(false)}
                  className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg 
                             lg:hover:bg-transparent lg:hover:text-blue-600 lg:p-0 
                             dark:text-gray-300 dark:hover:bg-gray-700 
                             lg:dark:hover:bg-transparent dark:hover:text-white 
                             transition-colors capitalize"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  onClick={() => setOpenNav(false)}
                  className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg 
                             lg:hover:bg-transparent lg:hover:text-blue-600 lg:p-0 
                             dark:text-gray-300 dark:hover:bg-gray-700 
                             lg:dark:hover:bg-transparent dark:hover:text-white 
                             transition-colors capitalize"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/corporatePolicy"
                  onClick={() => setOpenNav(false)}
                  className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg 
                             lg:hover:bg-transparent lg:hover:text-blue-600 lg:p-0 
                             dark:text-gray-300 dark:hover:bg-gray-700 
                             lg:dark:hover:bg-transparent dark:hover:text-white 
                             transition-colors capitalize"
                >
                  Corporate Policy
                </Link>
              </li>



              <li>
                {/* Contact section on Home page */}
                <Link
                  to="/contactUs"
                  onClick={() => setOpenNav(false)}
                  className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg 
                             lg:hover:bg-transparent lg:hover:text-blue-600 lg:p-0 
                             dark:text-gray-300 dark:hover:bg-gray-700 
                             lg:dark:hover:bg-transparent dark:hover:text-white 
                             transition-colors capitalize"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
