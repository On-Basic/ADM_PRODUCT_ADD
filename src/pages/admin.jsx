import styled from 'styled-components';
import Addoption from './addoption';
import ExpoSalesPeriodSet from 'components/productExpoSalesPeriod/ExpoSalesPeriodSet';

const Admin = () => {
  return (
    <Wrap>
      <ExpoSalesPeriodSet />
      <Addoption />
    </Wrap>
  );
};

export default Admin;

const Wrap = styled.section`
  margin-left: 250px;
  padding: 15px;
`;
