import React from "react";

const VehicleInformationForm = () => {
  return (
    <form>
      <div>
        <div className="mb-3">
          <label htmlFor="vehicleType" className="form-label">
            Vehicle Type
          </label>
          <select class="form-select" aria-label="vehicleType">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="vehicle" className="form-label">
            Vehicle
          </label>
          <select class="form-select" aria-label="vehicle">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default VehicleInformationForm;
