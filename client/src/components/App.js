import { useState, useEffect } from "react";
import SortSelect from "./SortSelect";
import Table from "./Table";

const App = () => {
  const shiftURL = "http://localhost:3000/employees";
  const [shifts, setShifts] = useState([]);
  const [firstOrLast, setFirstOrLast] = useState("first_name");

  useEffect(() => {
    // fetch(`${shiftURL}?sort_by=${firstOrLast}`)
    // .then(res => res.json())
    // .then(setShifts)

    const getShifts = async () => {
      let response = await fetch(`${shiftURL}?sort_by=${firstOrLast}`);
      let data = await response.json();
      setShifts(data);
    };

    getShifts();
  }, [firstOrLast]);

  return (
    <div className="App">
      <SortSelect firstOrLast={firstOrLast} setFirstOrLast={setFirstOrLast} />

      <Table shifts={shifts} />
    </div>
  );
};

export default App;
