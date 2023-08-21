import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/apiSlice";

export const Category = () => {
  const { id } = useParams;

  //   useEffect(() => {}, []);

  const { data } = useGetProductsQuery({ categoryId: id });
  console.log(data);

  return <>Category</>;
};
