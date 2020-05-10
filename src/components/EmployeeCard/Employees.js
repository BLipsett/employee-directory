import React from "react";
import EmployeeItem from "./EmployeeItem";

class Employees extends React.Component {
  render() {
    return this.props.employees.map((employee) => (
    <EmployeeItem employee={employee} />
   
    ));
  }
}

export default Employees
