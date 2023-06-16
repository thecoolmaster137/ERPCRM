import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VendorRegistrationScreen from './VendorRegistrationScreen';
import NewProductScreen from './NewProductScreen';
import SaleNewProfileScreen from './SaleNewProfileScreen';
import QuotationScreen from './QuotationScreen';

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>ERP CRM Next</h1>
        <nav>
          <ul>
            <li>
              <Link to="/vendor-registration">Vendor Registration</Link>
            </li>
            <li>
              <Link to="/new-product">New Product</Link>
            </li>
            <li>
              <Link to="/sale-new-profile">Sale New Profile</Link>
            </li>
            <li>
              <Link to="/quotation">Quotation</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/vendor-registration" element={<VendorRegistrationScreen />} />
          <Route path="/new-product" element={<NewProductScreen />} />
          <Route path="/sale-new-profile" element={<SaleNewProfileScreen />} />
          <Route path="/quotation" element={<QuotationScreen />} />
        </Routes>
      </div>

      <style jsx>{`
        .app {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
          padding: 20px;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        .nav-menu {
          background-color: #f1f1f1;
          border-radius: 4px;
          padding: 10px;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
        }

        li {
          margin: 0 10px;
        }

        li a {
          text-decoration: none;
          color: #333;
          font-weight: bold;
          padding: 5px 10px;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        li a:hover {
          background-color: #ddd;
        }

        .content {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </Router>
  );
};

export default App;
