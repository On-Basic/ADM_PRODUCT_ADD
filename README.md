# 상품 등록 관리 페이지

## 프로젝트 소개

상품 등록 어드민 페이지

## 팀원 소개

🏃 [민지연](https://github.com/ichbinmin2)<br/>
🏃‍ [박서윤](https://github.com/seoyuuun)<br/>
🏃‍ [양다혜](https://github.com/dahye-program)<br/>
🏃‍ [박서영](https://github.com/ongddree) (팀장)

## 배포 주소

https://brave-visvesvaraya-053de0.netlify.app/

## 과제 구현 목록

### 1 노출 및 판매 기간 설정 (박서윤)
☑️ 제한 없음을 default값으로 지정

☑️ 설정한 노출기간이 만료된 경우, 자동으로 '미노출' 상태로 변경

☑️ 달력 및 시간 지정 컴포넌트 제공

☑️ 30분 단위로 시간 지정

☑️ 현재 시간을 기준으로 지난 시간으로 startDate 설정 제한

☑️ 기간 시작 시간을 기준으로 그 이전의 시간으로 endDate 설정 제한

### 2. 상품 등록 (양다혜)

### 3. 상품 옵션 (박서영)

### 4. 상품 정보 고시 (민지연)


<br/>

## 기능별 영상

### 1 노출 및 판매 기간 설정 (박서윤)<br/>
![ezgif com-gif-maker](https://user-images.githubusercontent.com/84560867/151652562-43658a25-5ff8-40a4-bf59-bcde24ab04c2.gif)

### 2. 상품 등록 (양다혜)

### 3. 상품 옵션 (박서영)

### 4. 상품 정보 고시 (민지연)

## 과제 후기

### 🙋‍♀️ 박서윤

### 🙋‍♀️ 양다혜

### 🙋‍♀️ 박서영

### 🙋‍♀️ 민지연

## 프로젝트 구조 설명

```bash
.
├── App.css
├── App.js
├── components
│   ├── common
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── InsertImage.jsx
│   │   ├── InsertImagePreview.jsx
│   │   ├── Radio.jsx
│   │   ├── Toggle.jsx
│   │   ├── datepicker
│   │   └── index.js
│   ├── infoNotice
│   │   ├── InfoNotice.jsx
│   │   └── infoNoticeForm
│   ├── layout
│   │   ├── Contentwrap.jsx
│   │   ├── navbar
│   │   └── sidebar
│   ├── productExpoSalesPeriod
│   │   ├── ExposurePeriodSet.jsx
│   │   └── SalesPeriodSet.jsx
│   ├── productInfo
│   │   └── ProductInfo.jsx
│   ├── productOrderSet
│   │   ├── ProductOrderStart.jsx
│   │   └── ProductPickUp.jsx
│   ├── productPreOrderReservation
│   │   └── PreOrderReservetionSet.jsx
│   └── productoption
│       ├── Optionset.jsx
│       ├── Suboption.jsx
│       └── index.js
├── hooks
│   ├── SubmitForm.jsx
│   ├── useForm.js
│   └── validate.js
├── index.css
├── index.js
├── logo.svg
├── pages
│   ├── admin.jsx
│   └── adminSection
│       ├── ExpoSalesPeriodSet.jsx
│       ├── addoption.jsx
│       ├── pagesInfoNotice.jsx
│       ├── productInfo.jsx
│       └── productorder.jsx
└── style
    ├── globalstyle.js
    └── theme.js


```

### 데이터 post 명세

```
{
  "product": {
      "exposuredeadline": String,
      "salesdeadline": String,
      "categories": Array<string>,
      "filtertags": Array<string>,
      "title": String,
      "desc": String,
      "code": String,
      "thumbnamil" : String,
      "representativeimages": Array<string>,
      "stock": Number,
      "option + ${index}": {
              "image": String,
              "optiontit": String,
              "regularprice" : Number,
              "sellingprice" : Number,
              "stock" : String,
              "taxation" : String,
              "addoption + ${index}": {
                  "optiontit" : String,
                  "regularprice" : Number
                  }
        }
      "introimages": Array<string>,
      "recommandedimages": Array<string>,
      "informationnotice" : {
          "productname": String,
          "origin": String,
          "ranking" : String,
          "custody" : String,
          "foodcode" : String,
          "key" : String,
        }
    "deliverydesignation" : String,
    "pickup" : String,
    "preorderdelivery" : String,
    "mileage" : String,
    "thankyoucard" : String
		}
}
```

<br/>

## 설치 및 시작하는 법

**프로젝트 클론**

```
$ git clone https://github.com/On-Basic/ADM_PRODUCT_ADD.git
```

**패키지 설치**

```
$ yarn
```

**서버 실행**

```
$ yarn start
```
