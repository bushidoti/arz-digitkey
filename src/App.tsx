import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import LayoutForm from "./components/layout/layout";
import InstallPWA from "./pwa";

function App() {
  return (
    <>
       <Routes>
          <Route path={'*'} element={<LayoutForm/>}>
          </Route>
      </Routes>
      <InstallPWA/>
    </>
  );
}

export default App;
