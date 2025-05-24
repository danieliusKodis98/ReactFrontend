import { useNavigate } from 'react-router-dom';
function FirstPage(){

const navigate = useNavigate();

const goToPage =(pagePath)=>{
navigate(`${pagePath}`)
}


    return(
    <div className='firstPage'>
     <button onClick={() => goToPage("/login")}>Login</button>
     <button onClick={() => goToPage("/register")}>Register</button>
    </div>
    );
}

export default FirstPage