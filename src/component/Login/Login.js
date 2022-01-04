import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const redirect = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const login = (e) =>
    {
        if(e.target.value=="username")
        {
            redirect(from, { replace: true });
        }
        e.preventDefault();
    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>
            <form onSubmit={login}>
            <input type="text" name="username" placeholder='type name'/>
            <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default Login;

