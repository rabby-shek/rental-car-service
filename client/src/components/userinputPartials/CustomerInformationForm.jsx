import React, { useContext, useState } from "react";
import Required from "./Required";
import { CarContext } from "../../contexts/CarProvider";

const CustomerInformationForm = () => {
  const {customerFirstName,
    setCustomerFirstName,
    customerLastName,
    setCustomerLastName,
    customerEmail,
    setCustomerEmail,
    customerPhone,
    setCustomerPhone} = useContext(CarContext);

  return (
    <form>
      <div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            <Required value="First Name" />
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={customerFirstName}
            onChange={(e) => setCustomerFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            <Required value="Last Name" />
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={customerLastName}
            onChange={(e) => setCustomerLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <Required value="Email" />
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            <Required value="Phone" />
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default CustomerInformationForm;
