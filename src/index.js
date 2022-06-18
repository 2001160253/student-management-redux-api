// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./reducer";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Hàm createStore dùng để khởi tạo 1 redux store
import { createStore, applyMiddleware, compose } from "redux";
// thunk là một redux middleware để xử lý các action bất đồng bộ
import thunk from "redux-thunk";
// Component Provider dùng để kết nối redux store với react component
import { Provider } from "react-redux";
import rootReducer from "./reducer";
// import rootReducer from "./reducer";
// Setup sử dụng middleware chung với redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Một số thư viện redux middleware khác: redux-saga, redux-observable
const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, composeEnhancers(middlewares));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
