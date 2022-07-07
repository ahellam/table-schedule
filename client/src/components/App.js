import { useState, useEffect } from "react";
import SortSelect from "./SortSelect";
import Table from "./Table";

const App = () => {
  const shiftURL = "http://localhost:3000/employees";
  const [shifts, setShifts] = useState([]);
  const [firstOrLast, setFirstOrLast] = useState("first_name");

  useEffect(() => {
    getShifts();
  }, [firstOrLast]);

  const getShifts = async () => {
    try {
      let response = await fetch(`${shiftURL}?sort_by=${firstOrLast}`);
      let data = await response.json();
      setShifts(data);
    } catch(err){
        console.error(err)
    }
  };
  
  return (
    <div className="App" data-testid="app">
      <SortSelect firstOrLast={firstOrLast} setFirstOrLast={setFirstOrLast} />

      <Table shifts={shifts} />
    </div>
  );
};

export default App;

