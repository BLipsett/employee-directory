import React from "react";

class EmployeeSearch extends React.Component {

    state = {
        title:""
    }

    onChange = (e) => this.setState({ [e.target.name] :
    e.target.value })

  render() {
    return (
        <form>
            <input 
                type="text"
                name="employee"
                placeholder="Search for employee ..."
                value={this.state.title}
                onChange={this.onChange}
                />
            <input  
                type="submit"
                value="Submit" />
        </form>
    
    )
  }
};

export default EmployeeSearch;
