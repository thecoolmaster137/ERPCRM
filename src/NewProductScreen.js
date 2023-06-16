import React, { useState } from 'react';

const NewProductScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [measureUnits, setMeasureUnits] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleMeasureUnitsChange = (e) => {
    setMeasureUnits(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can send the form data to a server or perform any other required actions
    // For simplicity, we'll just log the form data to the console
    console.log({
      id,
      name,
      price,
      description,
      measureUnits,
    });

    // Reset form fields after submission
    setId('');
    setName('');
    setPrice('');
    setDescription('');
    setMeasureUnits('');
  };

  return (
    <div className="new-product">
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={handleIdChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="measureUnits">Measure Units:</label>
          <input
            type="text"
            id="measureUnits"
            value={measureUnits}
            onChange={handleMeasureUnitsChange}
            required
          />
        </div>
      </form>
      <div className="button-container">
          <button type="submit">Save</button>
          <button type="button">Edit</button>
      </div>
      <style jsx>{`
        .new-product {
          width: 90%;
          margin: 2rem auto;
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 4px;
        }

        h2 {
          text-align: center;
        }

        form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .form-group {
          margin-bottom: 10px;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        input[type='text'],
        textarea {
          width: 100%;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .button-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }

        button {
          padding: 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default NewProductScreen;
