import React from "react";

const WeekTableHead = ({ shifts }) => {
  return (
    <thead className="text-center">
      <tr className="bg-slate-300">
        {[" ", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
          (weekDayCol, index) => {
            let totalHours = 0;
            for (const employee of shifts) {
              const shift = employee.shifts.find((shift) => shift.day === index - 1);
              totalHours += shift ? shift.duration : 0;
            }
            return (
              <td key={index} className="font-bold border-[1px] border-black">
                {weekDayCol} {index > 0 && `(${totalHours} hrs)`}
              </td>
            );
          }
        )}
      </tr>
    </thead>
  );
};

export default WeekTableHead;
