## 路線引導

1. 先照著以下順序了解專案架構

> <u>./index.tsx</u> => <u>./App.tsx</u> => <u>./components/ThemeProvider</u> => <u>./Routes.tsx</u>

2. 在 **./pages/mui-sx** 中照著指示切出指定畫面
   &nbsp;
3. 在 **./pages/mui-styled** 中照著指示完成檔案
   &nbsp;
4. 再到 **./pages/react-query** 照指示試著用 React Query 串接 GET API 並 console.log 出結果。
   (需先確認 AnyDesk 是否有設定並開啟，[設定說明](https://oringnet.atlassian.net/wiki/spaces/CT/pages/185270273/AnyDesk+3F))
   (有幫你先寫好取得 token 的 hook，但需要跟我們要一下帳密並加在環境變數 .env.development.local)
   &nbsp;
5. 閱讀此頁 [Formik 教程](https://formik.org/docs/tutorial)，之後試著改寫 **./pages/mui-styled** 中的表格，使它能驗證必填項目並在提交時 console.log 出各欄位被輸入的資料
   &nbsp;
6. 閱讀此 [MUI Data Grid](https://mui.com/x/react-data-grid/) 中的 <u>Overview</u>、<u>Getting started</u>、<u>Columns- Column definition</u>、<u>Columns- Column dimensions</u>、<u>Columns- Column visibility</u>、<u>Pagination</u>、<u>Selection</u>
   (其中有出現關於 DataGridPro 的功能不需要看)

&nbsp;
&nbsp;
&nbsp;

Project Start From [Create React App](https://github.com/facebook/create-react-app):

#### `npx create-react-app my-app --template typescript`
