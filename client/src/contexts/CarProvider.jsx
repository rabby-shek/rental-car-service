import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [validation, setValidation] = useState(false);
  // reservation details
  const [reservationID, setReservationID] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [duration, setDuration] = useState(0);
  const [discount, setDiscount] = useState(0);
  // vehicle information
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  // additional charges
  const [damageWaiver, setDamageWaiver] = useState(false);
  const [liabilityInsurance, setLiabilityInsurance] = useState(false);
  const [rentalTax, setRentalTax] = useState(false);
  // customer information
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const fetchCarsData = async () => {
    try {
      const response = await axios.get(
        "https://exam-server-7c41747804bf.herokuapp.com/carsList"
      );
      setData(response.data.data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchCarsData();
  }, []);

  return (
    <CarContext.Provider
      value={{
        data,
        selectedVehicleType,
        setSelectedVehicleType,
        selectedVehicle,
        setSelectedVehicle,
        reservationID,
        setReservationID,
        pickupDate,
        setPickupDate,
        damageWaiver,
        setDamageWaiver,
        liabilityInsurance,
        setLiabilityInsurance,
        rentalTax,
        setRentalTax,
        customerFirstName,
        setCustomerFirstName,
        customerLastName,
        setCustomerLastName,
        customerEmail,
        setCustomerEmail,
        customerPhone,
        setCustomerPhone,
        returnDate,
        setReturnDate,
        duration,
        setDuration,
        discount,
        setDiscount,
        validation,
        setValidation
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export { CarProvider, CarContext };
