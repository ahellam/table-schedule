import {Fragment} from 'react'
import Shift from './Shift';

const EmployeeShift = ({ shifts }) => {
  const shiftWithNullDays = [];

  for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
    shiftWithNullDays.push(
      shifts.find((shift) => shift.day === dayIndex) ?? null
    );
  }

  return (
    <Fragment>
      {shiftWithNullDays.map((shift) => (
        <Shift shift={shift} />
      ))}
      
    {/* {shiftWithNullDays.map((shift) => {\      
        return shift ? <Table.Cell>{shift.role}</Table.Cell> : <Table.Cell></Table.Cell>
      })} */}
    </Fragment>
  )
}

export default EmployeeShift