import '../Header.css'
import { useNavigate, Link } from 'react-router-dom';
function Home(){

    return(
        <Link to={`/index`}>
    <div className='homeButton'>Home</div>
    </Link>
    );
    
} export default Home