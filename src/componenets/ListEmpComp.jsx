import React, { useEffect, useState } from 'react';
import { listEmployees } from '../services/EmployeeService';


const ListEmpComp = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className='row mb-10'>
            <h1 className='text-center mb-5' >List Of Employees</h1>
            <div className='col-sm-9 container'>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>

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
