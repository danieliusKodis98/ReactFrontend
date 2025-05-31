import React, { useState, useEffect } from 'react';
import './UploadRecepi.css';

function UploadRecepi({ value, onChange }) {
  const [ingredients, setIngredients] = useState([]);

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
        setIngredients(data);
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div className="AddRecepiField">
      <label>Select Ingredient:</label>
      <select
        value={value.ingredientId}
        onChange={(e) => onChange('ingredientId', e.target.value)}
      >
        <option value="">Select Ingredient</option>
        {ingredients.map((ingredient) => (
          <option key={ingredient.id} value={ingredient.id}>
            {ingredient.name}
          </option>
        ))}
      </select>

      <label>Amount</label>
      <input
        type="text"
        value={value.amount}
        onChange={(e) => onChange('amount', e.target.value)}
      />
    </div>
  );
}

export default UploadRecepi;