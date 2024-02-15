import React, { useEffect, useState } from 'react';
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


const ListEmpComp = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    function addNewEmployee(){
        navigator('/add-employee');
    }

    function updateEmp(id){
        navigator(`/edit-employee/${id}`);
    }


    return (
        <div className='row mb-10'>
            <h1 className='text-center mb-5' >List Of Employees</h1>
            <div className='col-sm-9 container'>
                <button className='btn btn-primary mb-5' onClick={addNewEmployee}>Add Employee</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => updateEmp(employee.id)}>Update</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListEmpComp
