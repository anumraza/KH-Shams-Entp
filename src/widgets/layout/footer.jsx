
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
    <footer className="relative lg:px-40 pt-8 pb-6 bg-gray-100">
      <div className="flex flex-wrap pt-6 text-center lg:text-left">
        {/* Left side: Logo + Description + Socials */}
        <div className="w-full px-4 lg:w-6/12 mb-10 lg:mb-0 flex flex-col items-center lg:items-start">
          <a href="/" className="flex items-center justify-center lg:justify-start">
            <img
              src="/img/pinnacle-removebg-preview.png"
              alt="Pinnacle Logo"
              className="h-24 w-auto mr-2"
            />
          </a>

          <Typography className="mt-4 font-normal text-blue-gray-500 text-center lg:text-left">
            Kh Shams Enterprise — Where packaging meets Global Trade
          </Typography>

          <div className="mt-6 flex justify-center lg:justify-start gap-2">
            {socials.map(({ color, name, path }) => (
              <a key={name} href={path} target="_blank" rel="noopener noreferrer">
                <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                  <Typography color={color}>
                    <i className={`fa-brands fa-${name}`} />
                  </Typography>
                </IconButton>
              </a>
            ))}
          </div>
        </div>

        {/* Right side: Links + Contact */}
        <div className="w-full px-4 lg:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-10 text-center sm:text-left">
          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 block font-medium uppercase"
            >
              Quick Links
            </Typography>
            <ul className="mt-3 space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-blue-gray-500 hover:text-blue-gray-700"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-blue-gray-500 hover:text-blue-gray-700"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-blue-gray-500 hover:text-blue-gray-700"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("vision")}
                  className="text-blue-gray-500 hover:text-blue-gray-700"
                >
                  Our Vision
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center sm:items-start">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 block font-medium uppercase"
            >
              Contact Us
            </Typography>
            <ul className="mt-3 space-y-2 text-blue-gray-500">
              <li>Office: 46/1 Lane 23, Khayaban-E-Badban, Phase VII, DHA, Karachi</li>
              <li>Plant: Plot No. 55, Sector 27, Industrial Area, Korangi, Karachi</li>
              <li>021-35060170</li>
              <li>021-35060171</li>
              <li>0330-8453460</li>
            </ul>
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