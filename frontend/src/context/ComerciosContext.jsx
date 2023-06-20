import React, { createContext, useState, useEffect } from "react";

const ComerciosContext = createContext();

export const ComerciosProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/data");
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  const filteredData = data.filter(
    (item) => item.nomDistricte === selectedOption
  );

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <ComerciosContext.Provider
      value={{ selectedOption, handleOptionChange, filteredData }}
    >
      {children}
    </ComerciosContext.Provider>
  );
};

export default ComerciosContext;
