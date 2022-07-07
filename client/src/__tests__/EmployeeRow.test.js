import { render, screen } from "@testing-library/react";
import EmployeeRow from "../components/EmployeeRow";
import { employee } from "../components/EmployeeRow";

const sortedByFirstName = [
  {
      name: "Alfred Brown",
      shifts: [
          {
              day: 0,
              start_at: "12pm",
              end_at: "5pm",
              duration: 5,
              role: "Server",
              color: "red"
          },
          {
              day: 1,
              start_at: "9am",
              end_at: "12pm",
              duration: 3,
              role: "Host",
              color: "green"
          },
          {
              day: 3,
              start_at: "9am",
              end_at: "4pm",
              duration: 7,
              role: "Server",
              color: "red"
          },
          {
              day: 5,
              start_at: "9am",
              end_at: "2pm",
              duration: 5,
              role: "Host",
              color: "green"
          }
      ]
  },
  {
      name: "Jeff Auston",
      shifts: [
          {
              day: 1,
              start_at: "11am",
              end_at: "6pm",
              duration: 7,
              role: "Chef",
              color: "orange"
          },
          {
              day: 2,
              start_at: "9am",
              end_at: "3pm",
              duration: 6,
              role: "Dishwasher",
              color: "purple"
          },
          {
              day: 4,
              start_at: "9am",
              end_at: "1pm",
              duration: 4,
              role: "Chef",
              color: "orange"
          },
          {
              day: 6,
              start_at: "9am",
              end_at: "4pm",
              duration: 7,
              role: "Dishwasher",
              color: "purple"
          }
      ]
  },
  {
      name: "Tim Cannady",
      shifts: [
          {
              day: 0,
              start_at: "11am",
              end_at: "6pm",
              duration: 7,
              role: "Chef",
              color: "orange"
          },
          {
              day: 1,
              start_at: "9am",
              end_at: "3pm",
              duration: 6,
              role: "Dishwasher",
              color: "purple"
          },
          {
              day: 2,
              start_at: "9am",
              end_at: "1pm",
              duration: 4,
              role: "Chef",
              color: "orange"
          },
          {
              day: 5,
              start_at: "9pm",
              end_at: "4am",
              duration: 7,
              role: "Dishwasher",
              color: "purple"
          }
      ]
  }
]

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(sortedByFirstName),
  })
);

it("should render first employee name", async () => {
  render(<EmployeeRow employee={sortedByFirstName[0]}/>)
  render
  const firstEmployee = await screen.findByText(/alfred brown/i)
  expect(firstEmployee).toBeInTheDocument();
})