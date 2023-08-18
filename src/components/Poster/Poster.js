import React from "react";

import BG from "../../images/BG.jpg";

export const Poster = () => {
  return (
    <section>
      <div>BIG SALE 20%</div>
      <div>the bestseller 2023</div>
      <div>
        <h1>LING IGOR</h1>
        <button>Shop now!</button>
      </div>
      <div>
        <img src={BG} alt="BG" />
      </div>
    </section>
  );
};
