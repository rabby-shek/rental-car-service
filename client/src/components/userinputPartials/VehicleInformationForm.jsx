import React, { useContext, useState, useEffect } from "react";
import { CarContext } from "../../contexts/CarProvider";
import Required from "./Required";

const VehicleInformationForm = () => {
  const { data, setSelectedVehicleType, setSelectedVehicle } =
    useContext(CarContext);
  const [selectedType, setSelectedType] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  // Filter vehicles based on selected type
  useEffect(() => {
    if (selectedType) {
      const filtered = data.filter((vehicle) => vehicle.type === selectedType);
      setFilteredVehicles(filtered);
    } else {
      // If no type is selected, show all vehicles
      setFilteredVehicles([]);
    }
  }, [selectedType, data]);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedVehicleType(e.target.value);
  };

  return (
    <form>
      <div>
        <div className="mb-3">
          <label htmlFor="vehicleType" className="form-label">
            <Required value="Vehicle Type" />
          </label>
          <select
            className="form-select"
            aria-label="vehicleType"
            onChange={handleTypeChange}
            value={selectedType}
          >
            <option value="">Select Type</option>
            {/* Assuming types are available in an array */}
            {data.map((vehicle, index) => (
              <option key={index} value={vehicle.type}>
                {vehicle.type}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="vehicle" className="form-label">
            <Required value="Vehicle" />
          </label>
          <select
            className="form-select"
            aria-label="vehicle"
            onChange={(e) => setSelectedVehicle(e.target.value)}
          >
            <option selected>Open this select menu</option>
            {/* Map over filtered vehicles */}
            {filteredVehicles.map((vehicle, index) => (
              <option key={index} value={vehicle.make}>
                {vehicle.make}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};

export default VehicleInformationForm;
