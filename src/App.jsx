import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import ScrollToTop from "./ScrollUp";
function App() {
  const { pathname } = useLocation();
  return (
    <>
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className="absolute  w-full z-50">
          <ScrollToTop />   {/* 👈 Always scrolls up when page changes */}

          <Navbar routes={routes} />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
