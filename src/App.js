import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import SingleUser from "./pages/SingleUser";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:Id" element={<SingleUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
