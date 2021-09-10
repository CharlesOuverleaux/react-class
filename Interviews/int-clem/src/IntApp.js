import React, { useEffect, useState } from "react";
import "./IntApp.css";
import axios from 'axios';

export default function IntApp(){
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(20);
  const [headers, setHeaders] = useState([]);
  const flatten = require('flat');
  useEffect(() => {
    const apiUrl = `https://randomuser.me/api/?results=${page}`;
    async function getData() {
      try {
        const response = await axios.get(apiUrl);
        // console.log(response.data.results);
        setPeople(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
    setHeaders(people.map(p => Object.keys(flatten(p.location)))[0]);
    console.log(headers);
  },[page]);

  return(
    <div>
      <h1>Interview app</h1>
      <table>
        <thead>
          <tr>
            <th>Gender</th>
            <th>Name</th>
            {/* {headers.map(header => <th>{header}</th>)} */}
            <th></th>
          </tr>
        </thead>
        <tbody>
            {people.map((p, i) =>
              <tr key= { i }>
                <td>{p.gender}</td>
                <td>{p.name.first}</td>
                {Object.keys(flatten(p.location)).map(item =>
                  <td> {flatten(p.location)[item]}</td>)
                    }
              </tr>
              )}
        </tbody>
      </table>
    </div>
  )
}
