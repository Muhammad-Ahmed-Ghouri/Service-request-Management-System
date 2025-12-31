import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/SoftwareLogin/CredentialPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
