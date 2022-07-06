import React from 'react'
import EmployeeRow from "./EmployeeRow";

const Table = ({ shifts }) => {

  return (
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
              return (<td key={index} className="font-bold border-[1px] border-black">{col} {index > 0 && `(${totalHours} hrs)`}</td>)
            }
          )}
          </tr>
        </thead>
        <tbody className="border-[1px] border-black text-center">
          {shifts.map((employee, index) => (
            <EmployeeRow key={employee.name} employee={employee} index={index}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table