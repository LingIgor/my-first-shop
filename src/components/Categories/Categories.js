import React from "react";
import { Link } from "react-router-dom";

export const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section>
      <h2>{title}</h2>
      <div>
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id}>
            <div>
              <img src={image} alt="img" />
              <h3>{name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
