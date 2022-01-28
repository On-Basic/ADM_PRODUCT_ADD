import Contentwrap from "components/layout/Contentwrap";
import styled from "styled-components";
import { PALLETS } from "style/theme";
import ProductInfoFilterTag from "components/productInfoFilterTag/ProductInfoFilterTag";

const ProductInfo = () => {
  return (
    <Contentwrap title="상품 옵션">
      <Contentwrap.Main>
        <Wrap>
          <ProductInfoFilterTag />
        </Wrap>
      </Contentwrap.Main>
    </Contentwrap>
  );
};

export default ProductInfo;

const Wrap = styled.section`
  background: ${PALLETS.LIGHTGRAY};
  padding: 20px;
`;
