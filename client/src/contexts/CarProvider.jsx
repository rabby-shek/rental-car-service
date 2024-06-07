import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
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
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export { CarProvider, CarContext };
