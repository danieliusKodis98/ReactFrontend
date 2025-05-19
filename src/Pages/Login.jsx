import { globalAuthContext } from "../Components/AuthCreateContext";
import { useNavigate } from 'react-router-dom';
import {useRef, useState, useEffect, useContext} from "react";

function LoginPage(){

    const navigate = useNavigate();

    const { user, login } = useContext(globalAuthContext);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
     
    });

 const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
  const check =async(e)=>{
        
        e.preventDefault(); // Prevent page reload
       // setLoading(true);
        
        await    fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(response => {
            if(response.ok){
                return response.text();
            }
            throw response;
        }).then(data => {
           localStorage.setItem('token', data);
           login(data,formData);
           alert(`token: ${localStorage.getItem('token')}`);
           navigate ('/index');
        })
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
                  <button type="submit">Search</button>
</form>
    );
}
export default LoginPage