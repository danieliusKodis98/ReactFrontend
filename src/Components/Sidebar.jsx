import './sidebar.css';
import downLogo from '../assets/down (2).png';
import React, { useContext, useState, useEffect } from "react";
import { SelectedIngredientContext } from '../Context/SelectedIngredientContext';
function Sidebar() {

const { selectedIngredient, setSelectedIngredient,selectedCategory, setSelectedCategory } = useContext(SelectedIngredientContext);

  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [ingredients, setIngredients] = useState([]);
const [categories, setCategories] = useState([]);
  function CheckIfClicked() {
    setClicked(!clicked);
  }

  function CheckIfClicked2() {
    setClicked2(!clicked2);
  }

   const handleIngredientClick = (ingredientName) => {
    setSelectedIngredient(ingredientName);
  };
  const handleCategoryClick = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(`http://localhost:8080/ingredients`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
          },
        });
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setIngredients(data);
      } catch (error) {
        console.error("Klaida gaunant duomenis:", error);
      }
    };

    fetchIngredients();
  }, []);
 useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`http://localhost:8080/category/names`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
          },
        });
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Klaida gaunant duomenis:", error);
      }
    };

    fetchCategories();
  }, []);

  function clearIngredient (){
  setSelectedIngredient(null);
  }
   function clearCategory (){
  setSelectedCategory(null);
  }
  return (
    <div className='sideBar'>

      <div onClick={CheckIfClicked} className="sideElem">
        <div>Categories</div>
        <img className="downLogo" src={downLogo} alt="toggle" />
      </div>

      <div className={clicked2 ? "display" : "noDisplay"}>
      <div className="currSlectedIngredientTitle">
        Currently selected:
      </div>
     { selectedCategory ? 
      <div className="currSlectedIngredient">
        {selectedCategory}
        <div className='closeImg' onClick={clearCategory}>X</div> 
      </div>: <p>none</p>
      
}
</div>



      <div className={clicked ? "showCategories" : "hideCategories"}>
     {categories.map((category, index) => (
          <div className="catOption" key={index}  onClick={() => handleCategoryClick(category.name)}>
            {category.name }
          </div>
        ))}
      </div>

      <div className="sideElem">
        <div onClick={CheckIfClicked2}>Ingredients</div>
        <img onClick={CheckIfClicked2} className='downLogo' src={downLogo} alt="toggle" />
      </div>


       <div className={clicked2 ? "display" : "noDisplay"}>
      <div className="currSlectedIngredientTitle">
        Currently selected:
      </div>
     { selectedIngredient ? 
      <div className="currSlectedIngredient">
        {selectedIngredient}
        <div className='closeImg' onClick={clearIngredient}>X</div> 
      </div>: <p>none</p>
      
}
</div>
      <div className={clicked2 ? "showCategories" : "hideCategories"}>
        {ingredients.map((ingredient, index) => (
          <div className="catOption" key={index}  onClick={() => handleIngredientClick(ingredient.name)}>
            {ingredient.name }
          </div>
        ))}
      </div>

      <div className="sideElem2">
        <div>Recently visited</div>
      </div>

    </div>
  );
}

export default Sidebar;