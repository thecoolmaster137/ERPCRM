import React, { useState } from 'react';

const VendorRegistrationScreen = () => {
  const [vendorName, setVendorName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleVendorNameChange = (e) => {
    setVendorName(e.target.value);
  };

  const handleContactPersonChange = (e) => {
    setContactPerson(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can send the form data to a server or perform any other required actions
    // For simplicity, we'll just log the form data to the console
    console.log({
      vendorName,
      contactPerson,
      email,
      phone,
      address,
    });

    // Reset form fields after submission
    setVendorName('');
    setContactPerson('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <div className="vendor-registration">
      <h2>Vendor Registration</h2>
      <form onSubmit={handleSubmit} className=".form">
        <div className="form-group">
          <label htmlFor="vendorName">Vendor Name:</label>
          <input
            type="text"
            id="vendorName"
            value={vendorName}
            onChange={handleVendorNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPerson">Contact Person:</label>
          <input
            type="text"
            id="contactPerson"
            value={contactPerson}
            onChange={handleContactPersonChange}
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
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
      </form>
      <div>
        <button type="submit">Register</button>
      </div>


<style jsx>{`
        .vendor-registration {
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
        input[type='tel'],
        textarea {
          width: 100%;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .button-container {
          display: flex;
          justify-content: flex-end;
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

export default VendorRegistrationScreen;
