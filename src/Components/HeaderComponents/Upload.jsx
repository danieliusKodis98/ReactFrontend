import '../Header.css'
import { useNavigate, Link } from 'react-router-dom';
function Upload(){

    return(
          <Link to={`/upload`}>
    <div  className='uploadButton'>Upload</div>
    </Link>
    );
    
} export default Upload