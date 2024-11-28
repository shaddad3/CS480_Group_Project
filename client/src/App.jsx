import { useEffect, useState } from "react";

import { fetchAllTables } from "./api/api";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await fetchAllTables());
    })();
  }, []);

  function generateTables() {
    const tables = [];

    for (let tablename in data) {
      tables.push(
        <table key={tablename}>
          <thead>
            <tr>
              <th colSpan={Object.keys(data[tablename][0]).length}>
                {tablename}
              </th>
            </tr>
            <tr>
              {Object.keys(data[tablename][0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data[tablename].map((table, index) => (
              <tr key={index}>
                {Object.keys(table).map((key) => (
                  <td key={key}>{table[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    return tables;
  }

  return <div className="app">{generateTables()}</div>;
}

export default App;
