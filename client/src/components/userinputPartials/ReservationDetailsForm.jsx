import React from "react";
import Required from "./Required";

const ReservationDetailsForm = () => {
  return (
    <form>
      <div>
        <div className="mb-3">
          <label htmlFor="reservationID" className="form-label">
          Reservation ID
          </label>
          <input type="text" className="form-control" id="reservationID" />
        </div>
        <div className="mb-3">
          <label htmlFor="pickupDate" className="form-label">
            <Required value="Pickup Date" />
          </label>
          <input type="date" className="form-control" id="pickupDate" />
        </div>
        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">
            <Required value="Return Date" />
          </label>
          <input type="date" className="form-control" id="returnDate" />
        </div>
        <div className="row g-3 mb-3">
          <label
            htmlFor="duration"
            className="col-2  col-form-label"
          >
            Duration
          </label>
          <div className="col-2"></div>
          <div className="col-8 ">
            <input
              type="text"
              className="form-control"
              id="duration"
              placeholder="1 week a day"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="discount" className="form-label">
            Discount
          </label>
          <input type="text" className="form-control" id="discount" />
        </div>
      </div>
    </form>
  );
};

export default ReservationDetailsForm;
