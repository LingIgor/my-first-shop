import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routesObject";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/userSlice/userSlice";

export const Product = (item) => {
  const { description, price, title, images } = item;
  const [currentImage, setCurrentImage] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <section>
      <div>
        <div>
          <img src={currentImage} alt="foto" />
        </div>
        {images.map((image, i) => (
          <div
            key={i}
            // style={{ backgroundImage: `url(${image})` }}
          >
            <img
              src={image}
              alt="foto"
              onClick={() => setCurrentImage(image)}
            />
          </div>
        ))}
      </div>
      <div>
        <h1>{title}</h1>
        <div>{price} $</div>
        <div>
          <span>Color:</span> Green
        </div>
        <p>{description}</p>
        <div>
          <button onClick={addToCart}>Add to catr</button>
          <button>Add to favourite</button>
        </div>
        <Link to={ROUTES.HOME}>return to store</Link>
      </div>
    </section>
  );
};
