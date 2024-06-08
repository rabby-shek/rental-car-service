import React, { useContext } from "react";
import { CarContext } from "../../contexts/CarProvider";

const ChangesSummery = () => {
  const { data, selectedVehicleType, selectedVehicle, damageWaiver, liabilityInsurance, rentalTax, discount, duration } = useContext(CarContext);
  const selectedData = data.find(
    (vehicle) =>
      vehicle.type === selectedVehicleType && vehicle.make === selectedVehicle
  );

  // Calculate the total charge
  const dailyRate = selectedData ? selectedData.rates.daily : 0;
  const dailyCharge = dailyRate * duration;
  const damageWaiverCharge = damageWaiver ? 9 : 0;
  const liabilityInsuranceCharge = liabilityInsurance ? 15 : 0;
  const rentalTaxCharge = rentalTax ? 11.5 : 0;
  const discountAmount = discount || 0;

  const totalBeforeDiscount = dailyCharge + damageWaiverCharge + liabilityInsuranceCharge;
  const totalBeforeTax = totalBeforeDiscount * (1 - discountAmount / 100);
  const totalAmount = totalBeforeTax * (1 + rentalTaxCharge / 100);

  return (
    <div className="summery-container">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Charge</th>
            <th scope="col">Unit</th>
            <th scope="col">Rate</th>
            <th scope="col" className="text-end">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daily</td>
            <td>{duration}</td>
            <td>{dailyRate}</td>
            <td className="text-end">{dailyCharge}</td>
          </tr>
          <tr>
            <td>Collision Damage Waiver</td>
            <td className="text-end" colSpan={3}>{damageWaiverCharge} $</td>
          </tr>
          <tr>
            <td>Liability Insurance</td>
            <td className="text-end" colSpan={3}>{liabilityInsuranceCharge} $</td>
          </tr>
          <tr>
            <td>Rental Tax</td>
            <td className="text-end" colSpan={3}>{rentalTaxCharge} %</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td className="text-end" colSpan={3}>{discountAmount}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="fw-bold">Total</td>
            <td className="fw-bold text-end" colSpan={3}>{totalAmount.toFixed(2)} $</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ChangesSummery;
