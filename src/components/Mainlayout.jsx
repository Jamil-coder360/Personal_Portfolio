import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import LoadingPage from "../pages/LoadingPage";

const Mainlayout = () => {
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();
  React.useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <main className="">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Mainlayout;
