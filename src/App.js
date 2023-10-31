import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: 'Cleaning', // Default category
    quantity: '',
    price: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCategoryChange = (e) => {
    setProduct({ ...product, category: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(product);
    if (Object.keys(errors).length === 0) {
      alert(`New Product added:\nName: ${product.name}\nDescription: ${product.description}\nCategory: ${product.category}\nQuantity: ${product.quantity}\nPrice: ${product.price}`);
    } else {
      setFormErrors(errors);
    }
  };

  const handleCancel = () => {
    setProduct({
      name: '',
      description: '',
      category: 'Cleaning', // Reset to default category
      quantity: '',
      price: '',
    });
    setFormErrors({});
  };

  const validateForm = (formData) => {
    const errors = {};
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = `${key} is required`;
      }
    }
    return errors;
  };

  return (
    <div>
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={product.name} onChange={handleInputChange} />
          <span className="error">{formErrors.name}</span>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={product.description} onChange={handleInputChange} />
          <span className="error">{formErrors.description}</span>
        </div>
        <div>
          <label>Category:</label>
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="Cleaning"
                checked={product.category === 'Cleaning'}
                onChange={handleCategoryChange}
              />
              Cleaning
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="Household"
                checked={product.category === 'Household'}
                onChange={handleCategoryChange}
              />
              Household
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="Electronics"
                checked={product.category === 'Electronics'}
                onChange={handleCategoryChange}
              />
              Electronics
            </label>
          </div>
          <span className="error">{formErrors.category}</span>
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" value={product.quantity} onChange={handleInputChange} />
          <span className="error">{formErrors.quantity}</span>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={product.price} onChange={handleInputChange} />
          <span className="error">{formErrors.price}</span>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
