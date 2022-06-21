import React from 'react'

const Shift = ({ shift }) => {
  if (!shift) return <td></td>;
  // this if statement instead of line 19 on EmployeeShift
  
  const { start_at, end_at, role, color } = shift;
  const cssColors = {
    red: 'bg-red-700 text-white p-3 font-semibold',
    orange: 'bg-orange-500 text-white p-3 font-semibold',
    green: 'bg-green-600 text-white p-3 font-semibold',
    purple: 'bg-purple-700 text-white p-3 font-semibold'
  }

  return (
    <td>
      <div className={cssColors[`${color}`]}>
        <div>
          {start_at} - {end_at}
        </div>
        <div>
          {role}
        </div>
      </div>
    </td>
  )
}

export default Shift