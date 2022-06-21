import { useState, useEffect } from "react";
import EmployeeRow from "./EmployeeRow";

const App = () => {

  const shiftURL = "http://localhost:3000/employees"
  const [shifts, setShifts] = useState([]);
  const [firstOrLast, setFirstOrLast] = useState("first_name");

  useEffect (() => {
    fetch(`${shiftURL}?sort_by=${firstOrLast}`)
    .then(res => res.json())
    .then(setShifts)
  },[firstOrLast])


  return (
    <div className="App">

      <div className="m-1">
        <label>
          Sort by
          <select
            className="border-[1px] border-black rounded-md ml-1"
            value={firstOrLast}
            onChange={(e) => setFirstOrLast(e.target.value)}
          >
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
          </select>
        </label>
      </div>

      <div className="m-1">
      <table className="w-full table-auto border-[1px] border-black">
        <thead className="text-center">
          <tr className="bg-slate-300">
          {["Employee", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (col, index) => {
              let totalHours = 0
              for (const employee of shifts) {
                const shift = employee.shifts.find(shift => shift.day === index - 1)
                totalHours += shift ? shift.duration : 0
              }
              return (<td className="font-bold border-[1px] border-black">{col} {index > 0 && `(${totalHours} hrs)`}</td>)
            }
          )}
          </tr>
        </thead>
        <tbody className="border-[1px] border-black text-center">
          {shifts.map((employee) => (
            <EmployeeRow key={employee.id} employee={employee}/>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  );
}

export default App;
