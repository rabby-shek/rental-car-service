import React, { useContext, useState } from "react";
import { CarContext } from "../../contexts/CarProvider";

const AdditionalChargesForm = () => {
  // State to hold the values of checkboxes
  const {
    setDamageWaiver,
    setLiabilityInsurance,
    setRentalTax,
    damageWaiver,
    liabilityInsurance,
    rentalTax,
  } = useContext(CarContext);

  return (
    <form>
      <div className="row mb-3">
        <div className="col-8">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="damageWaiver"
              checked={damageWaiver}
              onChange={(e) => {
                setDamageWaiver(e.target.checked);
              }}
            />
            <label className="form-check-label" htmlFor="damageWaiver">
              Collision Damage Waiver
            </label>
          </div>
        </div>
        <div className="col-4 text-end charge">$9.00</div>
      </div>
      <div className="row mb-3">
        <div className="col-8">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="liabilityInsurance"
              checked={liabilityInsurance}
              onChange={(e) => {
                setLiabilityInsurance(e.target.checked);
              }}
            />
            <label className="form-check-label" htmlFor="liabilityInsurance">
              Liability Insurance
            </label>
          </div>
        </div>
        <div className="col-4 text-end charge">$15.00</div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="rentalTax"
              checked={rentalTax}
              onChange={(e) => {
                setRentalTax(e.target.checked);
              }}
            />
            <label className="form-check-label" htmlFor="rentalTax">
              Rental Tax
            </label>
          </div>
        </div>
        <div className="col-4 text-end charge">11.5%</div>
      </div>
    </form>
  );
};

export default AdditionalChargesForm;
