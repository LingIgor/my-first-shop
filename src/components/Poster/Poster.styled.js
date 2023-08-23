import styled from "styled-components";

const Section = styled.section`
  display: flex;
  height: 500px;
  font-family: Arial, sans-serif;
  border-radius: 5px;
`;

const PosterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const BigSale = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const BestSeller = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const PosterTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const ShopButton = styled.button`
  background-color: #44014c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const PosterImage = styled.img`
  max-width: 100%;
  height: 500px;
`;

export {
  PosterImage,
  ShopButton,
  PosterTitle,
  BestSeller,
  BigSale,
  PosterContainer,
  Section,
};
