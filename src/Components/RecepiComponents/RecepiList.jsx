import ShowRecepy from "./Recepi";
import {useRef, useState, useEffect, useContext} from "react";
function ShowRecepiList(){

 const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
        fetch('http://localhost:8080/recepi',{
               method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                        'Content-Type': 'application/json',
                    },
        })
            .then(response => {
            if(response.ok){
                 return  response.json();
            }
            throw response;
           }).then(data => {
            setRecipes(data);
                          
            })
            .catch(error => {
                console.error("Klaida gaunant duomenis:", error);
            });
    }, []);

    return (
<div>
    <h1>Receptų sarašas:</h1>

<ShowRecepy recipes = {recipes}></ShowRecepy>
<pre>{JSON.stringify(recipes, null, 2)}</pre>
</div>
    );
} export default ShowRecepiList