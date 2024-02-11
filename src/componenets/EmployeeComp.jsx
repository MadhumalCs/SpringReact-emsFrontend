import React, { useState } from 'react'

const EmployeeComp = () => {
    //--- defined state varialbles using useState hook.
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    // function handleFirstName(e){
    //     setFirstName(e.target.value);
    // }
    // function handleLastName(e){
    //     setLastName(e.target.value);
    // }
    // function handleEmail(e){
    //     setEmail(e.target.value);
    // }
    function saveEmployee(e){
        e.preventDefault();
        const employee={firstName,lastName,email}
        console.log(employee);
    }
    return (
        <div className='container '><br/><br/>
            <div className='row mb-10'>
                <div className='card col-md-6 offset-md-3 mt-10 mb-10'>
                    <h1 className='text-center mb-10'>Add Employee</h1>
                    <div className='card-body'>
                        <form action="">
                            <div className='form-group mb-2'>
                                <label htmlFor="firstName" className='form-label'>First Name : </label>
                                <input
                                    type="text"
                                    placeholder='Enter first name here'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label htmlFor="lastName" className='form-label'>Last Name : </label>
                                <input
                                    type="text"
                                    placeholder='Enter last name here'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label htmlFor="email" className='form-label'>Email : </label>
                                <input
                                    type="email"
                                    placeholder='Enter email  here'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
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
