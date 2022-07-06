import React from 'react'
import EmployeeRow from "./EmployeeRow";
import WeekTableHead from './WeekTableHead';

const Table = ({ shifts }) => {

  return (
    <div className="m-4">
      <table className="w-full table-auto border-[1px] border-black">
        <WeekTableHead shifts={shifts}/>
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