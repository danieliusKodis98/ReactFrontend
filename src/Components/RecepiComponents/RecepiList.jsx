import ShowRecepy from "./Recepi";
import {useRef, useState, useEffect, useContext, useCallback, useMemo} from "react";
import { SelectedIngredientContext } from "../../Context/SelectedIngredientContext";
import './RecepiList.css'
function ShowRecepiList({value}){

 const [recipes, setRecipes] = useState([]);
  const [currPage, setCurrPage] = useState(() => {
        const savedPage = sessionStorage.getItem('currPage');
        return savedPage ? Number(savedPage) : 1;
      });
    const [postsPerPage] = useState(9);
  const { selectedIngredient,selectedCategory } = useContext(SelectedIngredientContext);

    useEffect(() => {
        sessionStorage.setItem('currPage', currPage);
      }, [currPage]);

    const lastPostIndex = currPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;


    const down =()=>{
        if(currPage > 1){
            setCurrPage(prev => prev - 1);
         
        }
       }
    const up = ()=>{
        if(currPage < Math.ceil(filterRecipes.length / postsPerPage)){
            setCurrPage(prev => prev + 1);
         
        }
    }


 useEffect(() => {
    const token = localStorage.getItem("token");
     const params = new URLSearchParams();
      if (selectedIngredient) params.append("ingredient", selectedIngredient);
      if (selectedCategory)   params.append("category",   selectedCategory);

    const fetchRecipes = async () => {
      try {
     
      const url =
        params.toString().length > 0
          ? `http://localhost:8080/recepi/filter?${params.toString()}`
          : "http://localhost:8080/recepi";

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Fetch failed");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Klaida gaunant duomenis:", error);
      }
    };

    fetchRecipes();
  }, [selectedIngredient,selectedCategory]);


const filterRecipes = useMemo(() => {
  if (!value) return recipes;
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(value.toLowerCase())
  );
}, [recipes, value]);

    const currRecepies = filterRecipes.slice(firstPostIndex, lastPostIndex);
 

   
    return (
<div>
    <h1>Receptų sarašas:</h1>

   {currRecepies.length == 0 ? (
        <p className="noRecepies">No recipes found.</p>
      ) : (
        <ShowRecepy recipes={currRecepies} />
      )}
<button onClick={down}>prevPage</button>
<button onClick={up}>nextPage</button>
<p>page number: {currPage}</p>
<pre>{JSON.stringify(recipes, null, 2)}</pre>
</div>
    );
} export default ShowRecepiList