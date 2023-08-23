import React, { useEffect } from "react";
import { AppRoutes } from "../Routes/Routes";
import { Sidebar } from "../Sidebar/Sidebar";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/categoriesSlice/categoriesSlice";
import { getProducts } from "../../redux/poductsSlice/productsSlice";
import { UserForm } from "../User/UserForm";
import { MainContainer } from "./App.styled";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <MainContainer>
      <Header />
      <UserForm />
      <div>
        <AppRoutes />
      </div>
      <Footer />
    </MainContainer>
  );
};
