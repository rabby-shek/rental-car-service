import React, { forwardRef, useContext } from "react";
import ChangesSummery from "./userinputPartials/ChangesSummery";
import BrandLogo from "../assets/images/logo.jpeg";
import { CarContext } from "../contexts/CarProvider";
const Invoice = forwardRef((props, ref) => {
  const { customerFirstName, customerLastName, customerEmail, customerPhone, reservationID, pickupDate, returnDate } =
    useContext(CarContext);
  return (
    <div className="hidden" ref={ref}>
      <div className="row p-5">
        <div className="col-6">
          <div className="row">
            <div className="col-5">
              <img className="w-75 " src={BrandLogo} alt="Brand Logo" />
              
              <div className="renters-data">
              <div className="fw-bold text-uppercase mt-3">Renter Info</div>
                <div className="name">
                  {customerFirstName} {customerLastName}
                </div>
                <div className="email">{customerEmail}</div>
                <div>PH:{customerPhone}</div>
              </div>
            </div>
            <div className="col-7">
              <div>CH Car Place Inc</div>
              <div>162 Barzen st</div>
              <div>Brooklyn, NY 12334</div>
              <div className="mb-3">PH#</div>
            </div>
            <div className="row">
              <div className="fw-bold text-uppercase mt-3">Unit Details</div>
              <div>Unit : Nissan rouge black</div>
              <div>Make and Model : Nissan rouge black</div>
              <div className="fw-bold text-uppercase mt-3">
                Bill Information
              </div>
              <div className="fw-bold">Additional Charges</div>
              <div>
                <ul className="opening">
                  <li>Collision Damage Waiver</li>
                  <li>Liability Insurance</li>
                  <li>Rental Tax</li>
                </ul>
              </div>
              <div className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus cupiditate quod dolorum sapiente excepturi, dolor
                consequatur architecto sed, nihil ipsum omnis fuga expedita
                animi sequi! Repellendus minima itaque incidunt perspiciatis!
              </div>
              <div className="fw-bold text-uppercase mt-3">Opening Days</div>
            <div>
              <ul className="opening">
                <li>Monday 9.00 Am - 6.00 PM</li>
                <li>Tuesday 9.00 Am - 6.00 PM</li>
                <li>Wednesday 9.00 Am - 6.00 PM</li>
                <li>Thursday 9.00 Am - 6.00 PM</li>
                <li>Friday 9.00 Am - 6.00 PM</li>
                <li>Saturday 9.00 Am - 6.00 PM</li>
                <li>Sunday 9.00 Am - 6.00 PM</li>
              </ul>
            </div>
            </div>
            
          </div>
        </div>
        <div className="col-6">
          <h3 className="fw-bold">Reservation</h3>
          <h4 className="fw-bold">{reservationID}</h4>
          <div>Repaid Order:</div>
          <div>CLAIM:</div>
          <div>Data/Time Out: {returnDate} </div>
          <div className="mb-3">Data/Time In: {pickupDate}</div>
          <ChangesSummery />
          <div className="text-justify mt-3 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ad dolor ullam fugit facilis. Delectus eos esse odio obcaecati
            reiciendis error, dolore laborum porro inventore voluptate ullam in,
            quaerat, dolorum quo qui accusamus sint perferendis architecto
            tenetur vitae nobis! Minus vitae quos dolore est eos maiores
            consequuntur, excepturi beatae inventore.
          </div>
          <div>Renters Signatures</div>
          <div>------------------------------</div>
          <div>Additional Driver 1</div>
          <div>------------------------------</div>
        </div>
      </div>
    </div>
  );
});

export default Invoice;
