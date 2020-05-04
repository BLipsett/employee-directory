import React from "react";

class EmployeeItem extends React.Component {
    render() {
        return (
            <div>
                <p>{ this.props.employee.name } { this.props.employee.title } { this.props.employee.phone }</p>
                
            </div>
        )
    }
}

export default EmployeeItem;
