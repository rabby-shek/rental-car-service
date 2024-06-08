import React, { useEffect, useContext } from "react";
import Required from "./Required";
import { CarContext } from "../../contexts/CarProvider";
import { generateReservationID } from "../../helpers/generateReservationID";

const ReservationDetailsForm = () => {
  const {
    customerPhone,
    customerFirstName,
    customerLastName,
    reservationID,
    pickupDate,
    returnDate,
    duration,
    discount,
    setReservationID,
    setPickupDate,
    setReturnDate,
    setDuration,
    setDiscount,
    setValidation
  } = useContext(CarContext);

  // Function to generate reservation ID
  useEffect(() => {
    const id = generateReservationID({
      customerPhone,
      customerFirstName,
      customerLastName,
    });
    setReservationID(id);
  }, [customerPhone, customerFirstName, customerLastName, setReservationID]);

  // Event handlers for input changes
  const handlePickupDateChange = (e) => {
    setPickupDate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    const newReturnDate = e.target.value;
    if (newReturnDate > pickupDate) {
      setReturnDate(newReturnDate);
      setValidation(true);
    } else {
      alert("Return date must be after pickup date");
      setValidation(false);
    }
  };
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  return (
    <form>
      <div>
        <div className="mb-3">
          <label htmlFor="reservationID" className="form-label">
            Reservation ID
          </label>
          <input
            type="text"
            className="form-control"
            value={reservationID}
            readOnly
            id="reservationID"
            onChange={() => {}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pickupDate" className="form-label">
            <Required value="Pickup Date" />
          </label>
          <input
            type="date"
            className="form-control"
            id="pickupDate"
            value={pickupDate}
            onChange={handlePickupDateChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">
            <Required value="Return Date" />
          </label>
          <input
            type="date"
            className="form-control"
            id="returnDate"
            value={returnDate}
            onChange={handleReturnDateChange}
          />
        </div>
        <div className="row g-3 mb-3">
          <label htmlFor="duration" className="col-2 col-form-label">
            Duration
          </label>
          <div className="col-2"></div>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              id="duration"
              placeholder="1 Week 1 Day"
              value={duration}
              onChange={handleDurationChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="discount" className="form-label">
            Discount
          </label>
          <input
            type="number"
            className="form-control"
            id="discount"
            value={discount}
            onChange={handleDiscountChange}
          />
        </div>
      </div>
    </form>
  );
};

export default ReservationDetailsForm;
