import { globalAuthContext } from "../Context/AuthCreateContext";
import { useNavigate } from 'react-router-dom';
import {useRef, useState, useEffect, useContext} from "react";
function LogoutButton(){

 const {  logout } = useContext(globalAuthContext);

    const navigate = useNavigate();

    const logout2 = () => {

        localStorage.removeItem('token');
        console.log("User logged out");
        logout();
        navigate('/login');
      };



    return(
    <button onClick={logout2}>Log out</button>
    );
}
export default LogoutButton