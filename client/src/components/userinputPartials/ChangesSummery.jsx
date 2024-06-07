import React from "react";

const ChangesSummery = () => {
  return (
    <div className="summery-container">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Charge</th>
            <th scope="col">Unit</th>
            <th scope="col">Rate</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daily</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Weekly</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Collision Damage Waiver</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
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
