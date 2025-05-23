import { useParams } from "react-router-dom";
import {useRef, useState, useEffect, useContext} from "react";


function RecepiPage(){
const { id } = useParams();
const [recipe, setRecipe] = useState();

useEffect(() => {

    

    const token = localStorage.getItem('token');
        fetch(`http://localhost:8080/recepi/${id}`,{
               method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                        'Content-Type': 'application/json',
                    },
        })
            .then(response => {
            if(response.ok){
                 return response.json();
            }
            throw response;
           }).then(data => {
            setRecipe(data);
                          
            })
            .catch(error => {
                console.error("Klaida gaunant duomenis:", error);
            });
    }, [id]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <>
        <div style={{
          display:'flex',
          height:'400px',
          justifyContent: 'space-around',
  
          }}>
    <img src={recipe.imgUrl}  style={{ 

               width: '400px', 
                height: '100%', 
                objectFit: 'cover',
              
              }} ></img>
    </div>
    <p>{recipe.name}</p>
    <p>{recipe.description}</p>
     <p>{recipe.cookingInstructions}</p>

     <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredientItem) => (
          <li key={ingredientItem.id}>
            {ingredientItem.ingredient.name} - {ingredientItem.amount}
          </li>
        ))}
      </ul>
     
    </>
    )
} export default RecepiPage