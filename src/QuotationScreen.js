import React, { useState } from 'react';

const QuotationScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quotationDate, setQuotationDate] = useState('');
  const [address, setAddress] = useState('');
  const [productList, setProductList] = useState('');
  const [gstNo, setGstNo] = useState('');
  const [panNo, setPanNo] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [preparedBy, setPreparedBy] = useState('');
  const [authorizedBy, setAuthorizedBy] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [cgst, setCgst] = useState('');
  const [sgst, setSgst] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuotationDateChange = (e) => {
    setQuotationDate(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleProductListChange = (e) => {
    setProductList(e.target.value);
  };

  const handleGstNoChange = (e) => {
    setGstNo(e.target.value);
  };

  const handlePanNoChange = (e) => {
    setPanNo(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handlePreparedByChange = (e) => {
    setPreparedBy(e.target.value);
  };

  const handleAuthorizedByChange = (e) => {
    setAuthorizedBy(e.target.value);
  };

  const handleTotalValueChange = (e) => {
    setTotalValue(e.target.value);
  };

  const handleCgstChange = (e) => {
    setCgst(e.target.value);
  };

  const handleSgstChange = (e) => {
    setSgst(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can send the form data to a server or perform any other required actions
    // For simplicity, we'll just log the form data to the console
    console.log({
      id,
      name,
      quotationDate,
      address,
      productList,
      gstNo,
      panNo,
      email,
      contact,
      preparedBy,
      authorizedBy,
      totalValue,
      cgst,
      sgst,
    });

    // Reset form fields after submission
    setId('');
    setName('');
    setQuotationDate('');
    setAddress('');
    setProductList('');
    setGstNo('');
    setPanNo('');
    setEmail('');
    setContact('');
    setPreparedBy('');
    setAuthorizedBy('');
    setTotalValue('');
    setCgst('');
    setSgst('');
  };

  return (
    <div className="quotation-screen">
      <h2>Quotation</h2>
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
          <label htmlFor="quotationDate">Quotation Date:</label>
          <input
            type="date"
            id="quotationDate"
            value={quotationDate}
            onChange={handleQuotationDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productList">Product List:</label>
          <select
            id="productList"
            value={productList}
            onChange={handleProductListChange}
            required
          >
            <option value="">Select a product</option>
            <option value="Product A">Product A</option>
            <option value="Product B">Product B</option>
            <option value="Product C">Product C</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gstNo">GST No:</label>
          <input
            type="text"
            id="gstNo"
            value={gstNo}
            onChange={handleGstNoChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="panNo">PAN No:</label>
          <input
            type="text"
            id="panNo"
            value={panNo}
            onChange={handlePanNoChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={handleContactChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preparedBy">Prepared By:</label>
          <input
            type="text"
            id="preparedBy"
            value={preparedBy}
            onChange={handlePreparedByChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="authorizedBy">Authorized By:</label>
          <input
            type="text"
            id="authorizedBy"
            value={authorizedBy}
            onChange={handleAuthorizedByChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalValue">Total Value:</label>
          <input
            type="text"
            id="totalValue"
            value={totalValue}
            onChange={handleTotalValueChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cgst">CGST:</label>
          <input
            type="text"
            id="cgst"
            value={cgst}
            onChange={handleCgstChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sgst">SGST:</label>
          <input
            type="text"
            id="sgst"
            value={sgst}
            onChange={handleSgstChange}
          />
        </div>
      </form>
      <div className="button-container">
          <button type="submit">Save</button>
          <button type="button">Edit</button>
      </div>
      <style jsx>{`
        .quotation-screen {
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
        input[type='email'],
        select {
          width: 100%;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .button-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
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

export default QuotationScreen;
