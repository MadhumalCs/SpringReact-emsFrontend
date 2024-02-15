import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComp = () => {
    //--- defined state varialbles using useState hook.
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    // Initialize state variables that will hold validation errors
    const [errors, setErros] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const { id } = useParams();
    const navigator = useNavigate();

    // function handleFirstName(e){
    //     setFirstName(e.target.value);
    // }
    // function handleLastName(e){
    //     setLastName(e.target.value);
    // }
    // function handleEmail(e){
    //     setEmail(e.target.value);
    // }
    function saveEmployee(e) {
        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email }
            console.log(employee);
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees');
            });
        }


    }

    function validateForm() {
        let valid = true;
        const errrosCopy = { ...errors }


        if (firstName.trim()) {
            errrosCopy.firstName = '';
        } else {
            errrosCopy.firstName = 'First name is required!';
            valid = false;
        }

        if (lastName.trim()) {
            errrosCopy.lastName = '';
        } else {
            errrosCopy.lastName = 'Last name is required!';
            valid = false;
        }

        if (email.trim()) {
            errrosCopy.email = '';
        } else {
            errrosCopy.email = 'Email is required!';
            valid = false;
        }
        setErros(errrosCopy);
        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h1 className='text-center mb-10'>Update Employee</h1>
        } else {
            return <h1 className='text-center mb-10'>Add Employee</h1>
        }
    }

    return (
        <div className='container '><br /><br />
            <div className='row mb-10'>
                <div className='card col-md-6 offset-md-3 mt-10 mb-10'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form >
                            <div className='form-group mb-2'>
                                <label htmlFor="firstName" className='form-label'>First Name : </label>
                                <input
                                    type="text"
                                    placeholder='Enter first name here'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label htmlFor="lastName" className='form-label'>Last Name : </label>
                                <input
                                    type="text"
                                    placeholder='Enter last name here'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label htmlFor="email" className='form-label'>Email : </label>
                                <input
                                    type="email"
                                    placeholder='Enter email  here'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button type='submit' className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComp
