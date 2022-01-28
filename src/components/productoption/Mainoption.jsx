import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import { Input, Button } from 'components/common';
import { Suboption } from './Suboption';

export const Mainoption = () => {
  return (
    <Sectionwrap>
      <Header>
        <Button
          text={'삭제'}
          width={'50px'}
          bdcolor={`${PALLETS.RED}`}
          ftcolor={`${PALLETS.RED}`}
        />
      </Header>
      <Main>
        <Attachimage>이미지첨부</Attachimage>
        <Writesec>
          <Writeheader>
            <Button
              text={'삭제'}
              width={'50px'}
              bdcolor={`${PALLETS.RED}`}
              ftcolor={`${PALLETS.RED}`}
            />
          </Writeheader>
          <Writemain>
            <Input placeholder={'옵션명을 입력해주세요. (필수)'}></Input>
            <Inputsec>
              <Input placeholder={'상품 정상가 (필수)'} desc={'원'}></Input>
              <Discountrate>&#123;&#123;할인율 &#125;&#125; &#37;</Discountrate>
              <Input placeholder={'상품 판매가 (필수)'} desc={'원'}></Input>
              <Input placeholder={'재고 (필수)'} desc={'개'}></Input>
              <Input placeholder={'비과세'}></Input>
            </Inputsec>
            <Suboption />
            <Btnaddsub>
              <Btnaddsubtit>추가 옵션 상품 추가</Btnaddsubtit>
            </Btnaddsub>
          </Writemain>
        </Writesec>
        <Button
          text={'+옵션 추가'}
          bdcolor={`${PALLETS.NAVY}`}
          ftcolor={`${PALLETS.NAVY}`}
        />
      </Main>
    </Sectionwrap>
  );
};

const Sectionwrap = styled.section`
  padding: 10px;
`;

const Header = styled.header`
  text-align: right;
  margin-bottom: 10px;
`;

const Attachimage = styled.div`
  background: ${PALLETS.LIGHTGRAY};
  border-radius: 5px;
  padding: 100px;
  text-align: center;
`;

const Main = styled.section`
  border: 1px solid ${PALLETS.GRAY};
  // border-radius: 5px;
  padding: 15px 15px 30px;
  background: ${PALLETS.WHITE};
`;

const Writesec = styled.section`
  margin: 10px 0 20px;
  border: 1px solid ${PALLETS.LIGHTGRAY};
  border-radius: 5px;
  padding: 10px;
`;

const Writeheader = styled.header`
  text-align: right;
  margin-bottom: 10px;
`;

const Writemain = styled.section``;

const Inputsec = styled.section`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Discountrate = styled.p`
  white-space: nowrap;
  margin: 0 20px;
`;

const Btnaddsub = styled.button`
  display: flex;
  margin-top: 10px;
  alight-items: center;
  font-size: 15px;
  line-height: 22px;

  &::before {
    display: block;
    content: “\u007C”;
    content: '\u002B';
    padding: 1px;
    font-size: 30px;
    border: 1px solid ${PALLETS.LIGHTGRAY};
    height: 18px;
    line-height: 18px;
    margin-right: 10px;
  }
`;

const Btnaddsubtit = styled.strong``;
