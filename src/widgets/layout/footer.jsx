
import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative px-4 pt-8 pb-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <a href="/" className="flex items-center justify-center lg:justify-start">
              <img
                src="/KH-Shams-Entp/img/pinnacle.png"
                alt="Pinnacle Logo"
                className="h-24 w-auto mr-2"
              />
            </a>
            <Typography className="mt-4 font-normal text-blue-gray-500 text-center lg:text-left">
              KH Shams Enterprise - Where packaging meets Global Trade
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 block font-medium uppercase"
              >
                Quick Links
              </Typography>
              <ul className="mt-3">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("vision")}
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    Our Vision
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 block font-medium uppercase"
              >
                Contact Us
              </Typography>

              <ul className="mt-3">
                <li>
                  <button
                    onClick={() => scrollToSection("process")}
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    xx street, xx area
                  </button>
                </li>

                <li>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    xxxx-xxxx xx xx
                  </Typography>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Copyright © {year} People Pinnacle. All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "People Pinnacle",
  description: "Delivering exceptional talent and seamless business solutions",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://www.twitter.com",
    },
    {
      color: "pink",
      name: "instagram",
      path: "https://www.instagram.com",
    },
    {
      color: "black",
      name: "linkedin",
      path: "https://www.linkedin.com",
    },
  ],
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;