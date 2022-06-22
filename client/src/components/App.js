import { useState, useEffect } from "react";
import EmployeeRow from "./EmployeeRow";
import SortSelect from "./SortSelect";

const App = () => {

  const shiftURL = "http://localhost:3000/employees"
  const [shifts, setShifts] = useState([]);
  const [firstOrLast, setFirstOrLast] = useState("first_name");

  useEffect (() => {
    // fetch(`${shiftURL}?sort_by=${firstOrLast}`)
    // .then(res => res.json())
    // .then(setShifts)
    const getShifts = async () => {
      let response = await fetch(`${shiftURL}?sort_by=${firstOrLast}`);
      let data = await response.json();
      setShifts(data);
    };

    getShifts();
  },[firstOrLast])


  return (
    <div className="App">

      <SortSelect firstOrLast={firstOrLast} setFirstOrLast={setFirstOrLast}/>

      <div className="m-4">
      <table className="w-full table-auto border-[1px] border-black">
        <thead className="text-center">
          <tr className="bg-slate-300">
          {[" ", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
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
