import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({
  section,
  heading,
  children,
  className = "",
  headingClassName = "",
  contentClassName = "",
}) {
  return (
    <div className={`mx-auto w-full px-4 text-center lg:w-6/12 ${className}`}>
      {section && (
        <Typography variant="lead" className="font-semibold text-white">
          {section}
        </Typography>
      )}
      <Typography
        variant="h2"
        color="blue-gray"
        className={`my-3 ${headingClassName}`}
      >
        {heading}
      </Typography>
      <Typography
        variant="lead"
        className={`text-blue-gray-500 ${contentClassName}`}
      >
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  section: PropTypes.string,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  headingClassName: PropTypes.string,
  contentClassName: PropTypes.string,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
