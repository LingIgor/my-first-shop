import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Poster } from "../Poster/Poster";
import { Products } from "../Products/Products";
import { Categories } from "../Categories/Categories";
import { Banner } from "../Banner/Banner";
import { filteredByPrice } from "../../redux/poductsSlice/productsSlice";
import { AppDiv } from "../App/App.styled";
import { Sidebar } from "../Sidebar/Sidebar";

export const Home = () => {
  const dispatch = useDispatch();
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filteredByPrice(100));
  }, [dispatch, list.length]);

  return (
    <>
      <AppDiv>
        <Sidebar amount={7} />
        <Poster />
      </AppDiv>
      <Products products={list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Under 100$" />
    </>
  );
};
