import { Home, SignIn, SignUp, CorporatePolicy, } from "@/pages";
// import CorporatePolicy from "./pages/corporatePolicy";
import Products from './pages/Products';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "aboutUs",
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Corporate Policy",
    path: "/corporatePolicy",
    element: <CorporatePolicy />,
  },
  {
    name: "Products",
    path: "/products",
    element: <Products />,
  },
  {
    name: "Contact Us",
    path: "/contactUs",
    element: <ContactUs />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
