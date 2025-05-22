
import { useNavigate, Link } from 'react-router-dom';

function ShowRecepy({recipes}){
    const navigate = useNavigate();


    return(
        <ul>
            
                    {recipes.map((recipe) => (
                        <li  key={recipe.id}>
                            <Link to={`/index/${recipe.id}`}>
                            <p>{recipe.name}</p>
                            </Link>
                      {/*  <Link to={`/dashboard/${recipe.id}`}>
                             <h3>{recipe.name}</h3>
                             </Link>

                            <p><strong>Ingredientai:</strong> {recipe.ingredients.join(", ")}</p>
                            <p><strong>Instrukcijos:</strong> {recipe.instructions}</p>
                            <button onClick={()=>like(recipe.id)}>like</button>
                    */}
                        </li>
                    ))}
                </ul>
    )
}
export default ShowRecepy