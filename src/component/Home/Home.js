import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>home</h1>
            <button onClick={()=>navigate("/manage")} >Manage</button>
        </div>
    );
};

export default Home;