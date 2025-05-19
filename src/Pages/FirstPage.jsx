import { useNavigate } from 'react-router-dom';
function FirstPage(){

const navigate = useNavigate();

const goToPage =(pagePath)=>{
navigate(`${pagePath}`)
}


    return(
    <>
     <button onClick={() => goToPage("/login")}>Login</button>
     <button onClick={() => goToPage("/register")}>Register</button>
    </>
    );
}

export default FirstPage