import React from "react";

const AdditionalChargesForm = () => {
  return (
    <form>
      <div className="row mb-3">
        <div className="col-7">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="damageWaiver"
            />
            <label className="form-check-label" htmlFor="damageWaiver">
              Collision Damage Waiver
            </label>
          </div>
        </div>
        <div className="col-5 text-end">$9.00</div>
      </div>
      <div className="row mb-3">
        <div className="col-7">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="liabilityInsurance"
            />
            <label className="form-check-label" htmlFor="liabilityInsurance">
              Liability Insurance
            </label>
          </div>
        </div>
        <div className="col-5 text-end">$15.00</div>
      </div>
      <div className="row">
        <div className="col-7">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="rentalTax"
            />
            <label className="form-check-label" htmlFor="rentalTax">
              Rental Tax
            </label>
          </div>
        </div>
        <div className="col-5 text-end">11.5%</div>
      </div>
    </form>
  );
};

export default AdditionalChargesForm;
