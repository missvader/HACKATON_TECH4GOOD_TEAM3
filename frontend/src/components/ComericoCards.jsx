import React, { useContext } from "react";
import ComerciosContext from "../context/ComerciosContext";

const ComercioCards = () => {
  const { filteredData } = useContext(ComerciosContext);

  const colorClasses = [
    "bg-accent",
    "bg-secondary",
    "bg-primary",
    "bg-neutral",
  ];

  return (
    <>
      <div className="cards gap-4 mt-5 col-span-2">
        {filteredData.map((data, index) => (
          <div
            className={`bg-accent p-4 shadow mt-5 rounded-lg ${
              colorClasses[index % colorClasses.length]
            }`}
            key={data.personalId}
          >
            <h2 className="text-xl text-black font-bold">{data.nomLocal}</h2>
            <p className="text-gray-700">{data.nomVia}</p>
            <p className="text-gray-700">{data.nomDistricte}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ComercioCards;
