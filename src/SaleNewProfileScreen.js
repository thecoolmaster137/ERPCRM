import React, { useState } from 'react';

const SaleNewProfileScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [faxNumber, setFaxNumber] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [bankDetails, setBankDetails] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddress2Change = (e) => {
    setAddress2(e.target.value);
  };

  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleFaxNumberChange = (e) => {
    setFaxNumber(e.target.value);
  };

  const handleTaxNumberChange = (e) => {
    setTaxNumber(e.target.value);
  };

  const handleBankDetailsChange = (e) => {
    setBankDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can send the form data to a server or perform any other required actions
    // For simplicity, we'll just log the form data to the console
    console.log({
      id,
      name,
      email,
      country,
      state,
      address,
      address2,
      zipcode,
      city,
      phoneNumber,
      faxNumber,
      taxNumber,
      bankDetails,
    });

    // Reset form fields after submission
    setId('');
    setName('');
    setEmail('');
    setCountry('');
    setState('');
    setAddress('');
    setAddress2('');
    setZipcode('');
    setCity('');
    setPhoneNumber('');
    setFaxNumber('');
    setTaxNumber('');
    setBankDetails('');
  };

  return (
    <div className="sale-new-profile">
      <h2>New Profile</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={handleCountryChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={handleStateChange}
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
          <label htmlFor="address2">Address 2:</label>
          <input
            type="text"
            id="address2"
            value={address2}
            onChange={handleAddress2Change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            type="text"
            id="zipcode"
            value={zipcode}
            onChange={handleZipcodeChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="faxNumber">Fax Number:</label>
          <input
            type="text"
            id="faxNumber"
            value={faxNumber}
            onChange={handleFaxNumberChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="taxNumber">Tax Number:</label>
          <input
            type="text"
            id="taxNumber"
            value={taxNumber}
            onChange={handleTaxNumberChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bankDetails">Bank Details:</label>
          <textarea
            id="bankDetails"
            value={bankDetails}
            onChange={handleBankDetailsChange}
          />
        </div>
      </form>
      <div className="button-container">
          <button type="submit">Save</button>
          <button type="button">Edit</button>
      </div>
      <style jsx>{`
        .sale-new-profile {
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

export default SaleNewProfileScreen;
