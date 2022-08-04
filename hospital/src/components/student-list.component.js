import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';
import Button from 'react-bootstrap/Button'


export default class StudentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/students/')
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Health Issue</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
          <tr>
            <td> John Clarke </td>
            <td> johnclarke852@gmail.com  </td>
            <td> 23 </td>
            <td> 420, B Town, UK </td>
            <td> +321456980 </td>
            <td> 02-07-1998 </td>
            <td> Vometting & headache </td>
            <td><Button onClick={this.deleteStudent} size="sm" variant="danger">
              Delete
            </Button></td>
          </tr>
          <tr>
            <td> Harry Kabadian </td>
            <td> harrykabadian852@gmail.com  </td>
            <td> 32 </td>
            <td> 240, D Town, USA </td>
            <td> +134567890 </td>
            <td> 02-07-1998 </td>
            <td> loose Motion </td>
            <td>
              <Button onClick={this.deleteStudent} size="sm" variant="danger">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>);
  }
}