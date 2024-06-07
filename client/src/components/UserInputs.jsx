import React, { useContext } from "react";
import ReservationDetailsForm from "./userinputPartials/ReservationDetailsForm";
import CustomerInformationForm from "./userinputPartials/CustomerInformationForm";
import VehicleInformationForm from "./userinputPartials/VehicleInformationForm";
import AdditionalChargesForm from "./userinputPartials/AdditionalChargesForm";
import ChangesSummery from "./userinputPartials/ChangesSummery";

const UserInputs = () => {
  return (
    <div className="user-inputs">
      <div className="user-input-header">
        <div className="row g-2">
          <div className="col-lg-6 col-sm-6 reservation">Reservation</div>
          <div className="col-lg-6 col-sm-6 text-lg-end ">
            <button className="print-btn">Print/Download</button>
          </div>
        </div>
      </div>
      <div className="user-input-form-container">
        <div className="row">
          <div className="col-lg-7 col-sm-6">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="sub-header mt-3">Reservation Details</div>
                <hr className="divider" />
                <ReservationDetailsForm />
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="sub-header mt-3">Customer Information</div>
                <hr className="divider" />
                <CustomerInformationForm />
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="sub-header mt-3">Vehicle Information</div>
                <hr className="divider" />
                <VehicleInformationForm />
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="sub-header mt-3">Additional Charges</div>
                <hr className="divider" />
                <AdditionalChargesForm />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-6">
            <div className="sub-header mt-3">Changes Summery</div>
            <hr />
            <ChangesSummery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInputs;
