import React, { useEffect, useState } from "react";
import DonutChart from "./DonutChart";

export default function Charts() {
  const [data, setData] = useState({profiles: []});
  async function getData () {
    await fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setData(myJson);
      });
  }
  useEffect(() => {
    getData()
  }, [])

  console.log(data);
  return (
    <div className='Charts'>
      {data.profiles.map(i => <DonutChart data={i} />)}
    </div>
  );
}
