import React, { useContext } from "react";
import { CarContext } from "../../contexts/CarProvider";

const ChangesSummery = () => {
  const { data, selectedVehicleType, selectedVehicle, damageWaiver,liabilityInsurance,rentalTax } = useContext(CarContext);
  const selectedData = data.find(
    (vehicle) =>
      vehicle.type === selectedVehicleType && vehicle.make === selectedVehicle
  );
  return (
    <div className="summery-container">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Charge</th>
            <th scope="col">Unit</th>
            <th scope="col">Rate</th>
            <th scope="col" className="text-end">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daily</td>
            <td>1</td>
            <td>{selectedData ? selectedData.rates.daily : 0}</td>
            <td className="text-end">@mdo</td>
          </tr>
          <tr>
            <td>Weekly</td>
            <td>1</td>
            <td>{selectedData ? selectedData.rates.weekly : 0}</td>
            <td className="text-end">@mdo</td>
          </tr>
          <tr>
            <td>Collision Damage Waiver</td>
            <td className="text-end" colSpan={3}>
              {damageWaiver ? 9 : 0} $
            </td>
          </tr>
          <tr>
            <td>Liability Insurance</td>
            <td className="text-end" colSpan={3}>
              {liabilityInsurance ? 15 : 0} $
            </td>
          </tr>
          <tr>
            <td>Rental Tax</td>
            <td className="text-end" colSpan={3}>
              {rentalTax ? 11.5 : 0} %
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="fw-bold">Total</td>
            <td className="fw-bold text-end" colSpan={3}>
              $498.00
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ChangesSummery;
