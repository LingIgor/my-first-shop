import React from "react";
import {
  PosterImage,
  ShopButton,
  PosterTitle,
  BestSeller,
  BigSale,
  PosterContainer,
  Section,
} from "./Poster.styled";

import BG from "../../images/BG2.jpg";

export const Poster = () => {
  return (
    <Section>
      <PosterContainer>
        {/* <div>
          <ShopButton>Shop now!</ShopButton>
        </div> */}
        <PosterImage src={BG} alt="BG" />
      </PosterContainer>
    </Section>
  );
};
