import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinhVien from "./pages/SinhVien/SinhVien";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SinhVien />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
