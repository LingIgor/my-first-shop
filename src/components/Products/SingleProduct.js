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
  const { list, related } = useSelector(({ products }) => products);

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  });

  useEffect(() => {
    if (!data || !list.length) return;

    dispatch(getRelatedProducts(data.category.id));
  }, [data, list.length, dispatch]);

  return !data ? (
    <section>Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Trending" />
    </>
  );
};
