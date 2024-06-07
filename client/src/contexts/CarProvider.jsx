import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [data, setData] = useState([]);
  // reservation details
  const [reservationID, setReservationID] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  // vehicle information
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  // additional charges
  const [damageWaiver, setDamageWaiver] = useState(false);
  const [liabilityInsurance, setLiabilityInsurance] = useState(false);
  const [rentalTax, setRentalTax] = useState(false);
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
        setRentalTax
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export { CarProvider, CarContext };
