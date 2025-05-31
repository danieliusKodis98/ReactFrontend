import React, { useState, useEffect } from 'react';

function UploadCategoryRecepi({ value, onChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/category/names', {
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
        setCategories(data);
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div className="AddRecepiField">
      <label>Select category:</label>
      <select
        value={value.categoryId}
        onChange={(e) => onChange('categoryId', e.target.value)}
      >
        <option value="">Select category</option>
        {categories.map((categ) => (
          <option key={categ.id} value={categ.id}>
            {categ.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UploadCategoryRecepi;
