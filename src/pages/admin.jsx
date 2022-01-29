import styled from 'styled-components';
import Addoption from './addoption';
import Productorder from './productorder';
import ExpoSalesPeriodSet from './ExpoSalesPeriodSet';
import ProductInfo from './productInfo';

const Admin = () => {
  return (
    <Wrap>
      <ExpoSalesPeriodSet />
      <Addoption />
      <ProductInfo />
      <Productorder />
    </Wrap>
  );
};

export default Admin;

const Wrap = styled.section`
  margin-left: 250px;
  padding: 15px;
`;
