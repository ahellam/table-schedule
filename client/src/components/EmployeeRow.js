import React from "react";
import EmployeeShift from "./EmployeeShift";

const EmployeeRow = ({ employee, index }) => {

  return (
    <tr className="border-[1px] border-black" data-testid={`employee-${index}`}>
      <td className="text-md font-bold py-3 border-[1px] border-black">
        {employee.name} &nbsp; (
        {employee.shifts.reduce((prev, curr) => prev + curr.duration, 0)} hrs)
      </td>
      <EmployeeShift shifts={employee.shifts} />
    </tr>
  );
};

export default EmployeeRow;
