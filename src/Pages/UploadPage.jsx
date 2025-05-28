import React, { useState, useEffect } from 'react';
function UploadPage(){

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');

useEffect(() => {
  fetch('http://localhost:8080/ingredients', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'), 
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
      return response.json();
      }
    })
    .then((data) => {
      console.log('Fetched ingredients:', data);
      setIngredients(data);
    })
    .catch((err) => console.error('Error:', err));
}, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name,
      description,
      ingredients: ingredients.split(',').map(i => i.trim()),
      category
    };
  
   
 
    


let amount 
  };

    return(
       <>
      <h1>Upload Recipe</h1>

      <label>Recipe name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

     <select value={selectedIngredient} onChange={(e) => setSelectedIngredient(e.target.value)}>
        <option value="">Select Ingredient</option>
        {ingredients.map((ingredient) => (
          <option key={ingredient.id} value={ingredient.name}>
            {ingredient.name}
          </option>
          
        ))}
        
      </select>

      <label>Category:</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

</>
    );
} export default UploadPage