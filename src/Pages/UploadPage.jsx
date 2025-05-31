import React, { useState, useEffect } from 'react';
import UploadRecepi from '../Components/UploadRecepi';
import UploadCategoryRecepi from '../Components/UploadCategory';
import Header from '../Components/Header';
import './UploadPage.css';

function UploadPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [ingredientComponents, setIngredientComponents] = useState([]);
  const [categoryComponents, setCategoryComponents] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]); // NEW

  useEffect(() => {
    fetch('http://localhost:8080/ingredients', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.ok && response.json())
      .then((data) => setIngredients(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/categories', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setAvailableCategories(data)) 
      .catch(console.error);
  }, []);

  const addComponent = () => {
    setIngredientComponents((prev) => [...prev, { id: Date.now(), ingredientName: '', amount: '' }]);
  };

  const deleteComponent = (idToDelete) => {
    setIngredientComponents((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  const handleIngredientChange = (id, field, value) => {
    setIngredientComponents((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addComponent2 = () => {
    setCategoryComponents((prev) => [...prev, { id: Date.now(), categoryId: '' }]); // CHANGED
  };

  const deleteComponent2 = (idToDelete) => {
    setCategoryComponents((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  const handleCategoryChange = (id, field, value) => {
    setCategoryComponents((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const submit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const recipePayload = {
      name,
      description,
      imgUrl: '',
      cookingInstructions: '',
      ingredients: ingredientComponents.map((item) => ({
        ingredient: { id: item.ingredientId },
        amount: item.amount,
      })),
      categories: categoryComponents.map((item) => ({
        id: item.categoryId, 
      })),
    };
alert(JSON.stringify(recipePayload, null, 2));  

    try {
      const response = await fetch('http://localhost:8080/recepi', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipePayload),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Recipe uploaded successfully!');
        console.log(data);
      } else {
        const errText = await response.text();
        throw new Error(errText);
      }
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Error uploading recipe.');
    }
  
  };

  return (
    <>
      <Header />
      <h1 className='h1'>Upload Recipe</h1>

      <div className='foto'>Upload</div>
      <div className='recepiCreation'>
        <div className='nameDescriptionModule'>
          <label className='label'>Recipe name:</label>
          <input
            className='recepiNameTextbox'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className='label'>Description:</label>
          <textarea
            className='descriptionArea'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className='uploadImage'>
          <label>Cooking steps:</label>
          <textarea
            className='cookingDescriptionArea'
            value={cookingInstructions}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <button onClick={addComponent}>Add Ingredient</button>
      {ingredientComponents.map((item) => (
        <div className='container' key={item.id}>
          <UploadRecepi
            value={item}
            onChange={(field, value) => handleIngredientChange(item.id, field, value)}
          />
          <button className='deleteButton' type='button' onClick={() => deleteComponent(item.id)}>
            X
          </button>
        </div>
      ))}

      <button onClick={addComponent2}>Add Category</button>
      {categoryComponents.map((item) => (
        <div className='container' key={item.id}>
          <UploadCategoryRecepi
            value={item}
            onChange={(field, value) => handleCategoryChange(item.id, field, value)}
            categories={availableCategories} 
          />
          <button className='deleteButton' type='button' onClick={() => deleteComponent2(item.id)}>
            X
          </button>
        </div>
      ))}

      <button className='createRecepiButton' onClick={submit}>
        Submit
      </button>
    </>
  );
}

export default UploadPage;
