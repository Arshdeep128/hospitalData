import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';
import Button from 'react-bootstrap/Button'


export default class DoctorList extends Component {

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
                        <th>Address</th>
                        <th>Specialty</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                    <tr>
                        <td> John Clarke </td>
                        <td> 420, B Town, UK </td>
                        <td> Médecine interne générale, Cardiologist </td>
                        <td> 10:00 to 4:00 </td>
                        <td>
                            <Link
                                className="edit-link"
                            >Edit</Link>
                            <Button onClick={this.deleteStudent} size="sm" variant="danger">
                                Delete
                            </Button></td>
                    </tr>
                    <tr>
                        <td> Harry Kabadian </td>
                        <td> 240, D Town, USA </td>
                        <td>Endocrinologists, Emergency Medicine Specialists</td>
                        <td>10:00 to 05:00</td>
                        <td>
                            <Link
                                className="edit-link"
                            >Edit</Link>
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