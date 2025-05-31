import { useNavigate, Link } from 'react-router-dom';
function MyRecipe(){

    return(
        <Link to={`/myRecepies`}>
<div>
    My recepi
</div>
</Link>
    );
} export default MyRecipe