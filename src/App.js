import React from "react";
import CardList from './components/card-list/card-list.component';
import Wrapper from "./components/Wrapper";

import SearchBox from './components/search-box/search-box.component';
//import "./App.css";

class App extends React.Component {
  state = {
    employees: [],
    searchField: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ employees: users}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { employees, searchField} = this.state;
    const filteredEmployees = employees.filter( employee =>
      employee.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Employee-Directory</h1>
        <div className="container">
          <Wrapper>
            <SearchBox
            placeholder="search employees..."
            handleChange={this.handleChange}/>
            <CardList employees={filteredEmployees}>
             </CardList>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
