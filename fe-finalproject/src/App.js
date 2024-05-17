import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages";
import CreateUserForm from "./pages/users/createUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/addUser" element={<CreateUserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
