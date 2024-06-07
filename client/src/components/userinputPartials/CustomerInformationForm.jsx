import React from "react";
import Required from "./Required";

const CustomerInformationForm = () => {
  return (
    <form>
      <div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            <Required value="First Name" />
          </label>
          <input type="text" className="form-control" id="firstName" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            <Required value="Last Name" />
          </label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <Required value="Email" />
          </label>
          <input type="text" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            <Required value="Phone" />
          </label>
          <input type="text" className="form-control" id="phone" />
        </div>
      </div>
    </form>
  );
};

export default CustomerInformationForm;
