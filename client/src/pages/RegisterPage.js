import React from 'react';
import Nav from '../components/HomePage/Nav';
import RegisterForm from '../components/RegisterPage/RegisterForm';


const RegisterPage = () => {
    return (
        <section className='registerPage'>
            <Nav />
            <RegisterForm />
        </section>

    )
}

export default RegisterPage