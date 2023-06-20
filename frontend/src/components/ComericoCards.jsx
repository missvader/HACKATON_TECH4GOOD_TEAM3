import { useState, useEffect } from "react";

const ComercioCards = () => {
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

  const colorClasses = [
    "bg-accent",
    "bg-secondary",
    "bg-primary",
    "bg-neutral",
  ];

  return (
    <>
      <div className="cards gap-4 mt-5 col-span-2">
        {data.map((data, index) => (
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
