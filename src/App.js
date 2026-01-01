import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CredentialPage from "./Components/SoftwareLogin/CredentialPage";
import ProblemLog from "./Components/User/ProblemLog";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CredentialPage />} />
          <Route path="/app.problemLog.com" element={<ProblemLog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
