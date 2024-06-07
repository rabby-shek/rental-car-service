import React from "react";

const CustomerInformationForm = () => {
  return (
    <form>
      <div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" id="firstName" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input type="text" className="form-control" id="phone" />
        </div>
      </div>
    </form>
  );
};

export default CustomerInformationForm;
