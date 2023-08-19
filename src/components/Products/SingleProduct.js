import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/api/apiSlice";
import { ROUTES } from "../../utils/routesObject";
import { Product } from "./Product";
import { Products } from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedProducts } from "../../redux/poductsSlice/productsSlice";

export const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { related } = useSelector(({ products }) => products);
  const state = useSelector((state) => state.products.list);
  console.log(state);
  console.log(related);

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  });

  useEffect(() => {
    if (data) {
      dispatch(getRelatedProducts());
    }
  }, [data]);

  return !data ? (
    <section>Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={state} amount={5} title="Trending" />
    </>
  );
};
