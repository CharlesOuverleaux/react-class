import { useReducer, useRef } from "react";

export default function EventSearch(props){
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event){
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className="flex justify-center rounded-lg bg-white p-2">
      <div className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">
        <label htmlFor="year">Year</label>
        <select id="year" ref={yearInputRef}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">
        <label htmlFor="month">Month</label>
        <select id="month" ref={monthInputRef}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <button onClick={submitHandler} className="bg-blue-500 hover:bg-blue-700 text-white p-2 font-bold rounded-lg">
        Search
      </button>
    </form>
  );
}
