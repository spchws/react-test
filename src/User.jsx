import React from "react";
import "./App.css";

function App() {
  return <div id="app">
    <RegistrationForm />
    <TableDisplay />
  </div>;
}

const RegistrationForm = () => {
  return (
    <div class="container">
    <h1>Generation ThailandHome - User Sector</h1>
    <button id="UseAdd" type="button">User Home Sector</button>
    <button id="UseAdd" type="button">Admin Home Sector</button>
  </div>
  );
};

const TableDisplay = () => {
  return (

    <div className="table__show">
      <table id="data-table" border="1" width="100%">
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Position</th>
          <th>action</th>
        </tr>
      </table>
    </div>
  );
}


export default App;