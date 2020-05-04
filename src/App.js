import React from "react";
import FriendCard from "./components/EmployeeCard/Employees";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Employees from "./components/EmployeeCard/Employees";
import EmployeeSearch from "./components/EmployeeCard/EmployeeSearch";
import uuid from "uuid";
//import "./App.css";

class App extends React.Component {
  state = {
    employees: [
      {
        id: uuid.v4(),
        name: "Bob",
        title: "QA",
        phone: "555-555-5555",
      },
      {
        id: uuid.v5(),
        name: "Jim",
        title: "Sales",
        phone: "555-555-5555",
      },
      {
        id: 3,
        name: "Kevin",
        title: "Accounting",
        phone: "555-555-5555",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <EmployeeSearch />
          <Employees employees={this.state.employees} />
        </div>
      </div>
    );
  }
}

export default App;
