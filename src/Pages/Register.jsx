import {useRef, useState, useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';

function RegisterPage(){

    const navigate = useNavigate();

 const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        lastName: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const check =async(e)=>{
        e.preventDefault(); 
       

            await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(response => {
            if(response.ok){
                return response.json()
            }
            throw response;
        }).then(data => {
           console.log("Registration successful:", data);
           navigate("/login");
        });
    }
        return(
<form onSubmit={check}>
     <label>Username: </label>
<input
                
                    type="text"
                    name="username"
                    className="userName"
                    value={formData.username}
                    onChange={handleChange}
                />

                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    className="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    className="userName"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label>Last Name: </label>
                <input
                    type="text"
                    name="lastName"
                    className="password"
                    value={formData.lastName}
                    onChange={handleChange}
                />
    <button type="submit">Search</button>
</form>
    );
}
export default RegisterPage