import React, { useEffect } from "react";
import { AppRoutes } from "../Routes/Routes";
import { Sidebar } from "../Sidebar/Sidebar";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/categoriesSlice/categoriesSlice";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};
