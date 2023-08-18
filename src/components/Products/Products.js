import React from "react";
import { Link } from "react-router-dom";

export const Products = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section>
      {title && <h2> {title}</h2>}
      <div>
        {list.map(({ id, images, title, category: { name: cat }, price }) => (
          <Link to={`/products/${id}`} key={id}>
            <div>
              <img src={images[0]} alt="products" />
              <h3>{title}</h3>
              <div>{cat}</div>
              <div>{price} $</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
