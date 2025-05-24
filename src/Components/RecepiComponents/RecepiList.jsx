import ShowRecepy from "./Recepi";
import {useRef, useState, useEffect, useContext, useCallback, useMemo} from "react";
function ShowRecepiList({value}){

 const [recipes, setRecipes] = useState([]);
  const [currPage, setCurrPage] = useState(() => {
        const savedPage = sessionStorage.getItem('currPage');
        return savedPage ? Number(savedPage) : 1;
      });
    const [postsPerPage] = useState(9);
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
const filterRecipes = useMemo(() => {
  if (!value) return recipes;
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(value.toLowerCase())
  );
}, [recipes, value]);

    const currRecepies = filterRecipes.slice(firstPostIndex, lastPostIndex);
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

<ShowRecepy recipes = {currRecepies}></ShowRecepy>
<button onClick={down}>prevPage</button>
<button onClick={up}>nextPage</button>
<p>page number: {currPage}</p>
<pre>{JSON.stringify(recipes, null, 2)}</pre>
</div>
    );
} export default ShowRecepiList