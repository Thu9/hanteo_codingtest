# React + TypeScript + Vite

### 한터글로벌 프론트엔드 코딩테스트\_이석우

## Getting Started

```
npm run dev or yarn dev
```

## 기술 스택

```
react v18
typescript
react-query v5
redux v5
swiper

```

## 코드 스타일

```
📜.prettierrc

{ "singleQuote": true, "arrowParens": "always", "tabWidth": 2 }

```

## 프로젝트 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📜PretendardVariable.woff2
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📜banner1.png
 ┃ ┃ ┣ 📜banner2.png
 ┃ ┃ ┗ 📜banner3.png
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜common.scss
 ┃ ┃ ┣ 📜Paragraph.tsx
 ┃ ┃ ┗ 📜Spinner.tsx
 ┃ ┗ 📂layout
 ┃ ┃ ┣ 📂banner
 ┃ ┃ ┃ ┣ 📜banner.scss
 ┃ ┃ ┃ ┣ 📜Banner.tsx
 ┃ ┃ ┃ ┣ 📜BannerButton.tsx
 ┃ ┃ ┃ ┗ 📜BannerCard.tsx
 ┃ ┃ ┣ 📂charts
 ┃ ┃ ┃ ┣ 📜ChartItem.tsx
 ┃ ┃ ┃ ┣ 📜charts.scss
 ┃ ┃ ┃ ┗ 📜Charts.tsx
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📜footer.scss
 ┃ ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┃ ┗ 📂navbar
 ┃ ┃ ┃ ┣ 📜navbar.scss
 ┃ ┃ ┃ ┗ 📜NavBar.tsx
 ┣ 📂constant
 ┃ ┣ 📜bannerList.ts
 ┃ ┣ 📜chartList.ts
 ┃ ┗ 📜menuList.ts
 ┣ 📂hooks
 ┃ ┗ 📜useChart.ts
 ┣ 📂mock
 ┃ ┣ 📜browser.ts
 ┃ ┗ 📜handlers.ts
 ┣ 📂pages
 ┃ ┣ 📜home.scss
 ┃ ┗ 📜Home.tsx
 ┣ 📂redux
 ┃ ┣ 📜action.ts
 ┃ ┣ 📜categoryReducer.ts
 ┃ ┗ 📜store.ts
 ┣ 📂routes
 ┃ ┗ 📜PageRoutes.tsx
 ┣ 📂styles
 ┃ ┣ 📜global.scss
 ┃ ┣ 📜reset.scss
 ┃ ┗ 📜variable.scss
 ┣ 📂types
 ┃ ┣ 📜common.ts
 ┃ ┗ 📜enum.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

|              |                                                                |
| :----------- | -------------------------------------------------------------- |
| 📂components | 컴포넌트는 기능별 서브폴더로 분리되어 있습니다.                |
| 📂redux      | redux를 이용한 상태 관리 폴더입니다.                           |
| 📂types      | typescript에서 사용할 타입을 정의하는 폴더입니다.              |
| 📂constant   | 상수 데이터를 관리하는 폴더입니다.                             |
| 📂hooks      | 데이터를 가져오거나 가공하는 커스텀 훅입니다.                  |
| 📂mock       | 차트 구현에 필요한 모의 응답을 생성하는 라이브러리 폴더입니다. |
| 📂styles     | 전역으로 사용하는 스타일링을 저장하는 폴더입니다.              |
| 📂routes     | 페이지 이동을 위한 라우터를 관리하는 폴더입니다.               |