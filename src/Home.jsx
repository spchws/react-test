import React from "react";
import "./App.css";

function App() {
  return <div id="app">
    <RegistrationForm />
  </div>;
}

const RegistrationForm = () => {
  return (
    <div class="container">
    <h1>Generation ThailandHome - Home Sector</h1>
    <button id="UseAdd" type="button">User Home Sector</button>
    <button id="UseAdd" type="button">Admin Home Sector</button>
  </div>
  );
};

export default App;