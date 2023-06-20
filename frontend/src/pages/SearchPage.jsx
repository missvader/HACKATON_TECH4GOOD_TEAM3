import { useState, useEffect } from "react";
import Search from "../components/Search";
const SearchPage = () => {
  const fakeData = [
    {
      personalId: 0,
      mercat: "Mercat de Sant Josep - La Boqueria",
      carrer: "Carrer la Rambla",
      barri: "el Raval",
      districte: "Ciutat Vella",
      coordenadaX: 41.38204889437501,
      coordenadaY: 2.17227075910574,
    },
    {
      personalId: 1,
      mercat: "Mercat de Santa Caterina",
      carrer: "Av Francesc Cambó",
      barri: "Sant Pere, Santa Caterina i la Ribera",
      districte: "Ciutat Vella",
      coordenadaX: 41.38639488164491,
      coordenadaY: 2.1781771121189712,
    },
    {
      personalId: 2,
      mercat: "Mercat d'Hostafrancs",
      carrer: "Carrer de la Creu Coberta",
      barri: "Hostafrancs",
      districte: "Sants-Montjuïc",
      coordenadaX: 41.37516234439833,
      coordenadaY: 2.143853943380838,
    },
    {
      personalId: 3,
      mercat: "Mercat de Sants",
      carrer: "C Sant Jordi",
      barri: "Sants",
      districte: "Sants-Montjuïc",
      coordenadaX: 41.37474144032811,
      coordenadaY: 2.133754628418325,
    },
    {
      personalId: 4,
      mercat: "Mercat de la Marina",
      carrer: "Passeig de la Zona Franca",
      barri: "la Marina de Port",
      districte: "Sants-Montjuïc",
      coordenadaX: 41.36038025969584,
      coordenadaY: 2.1391929530213143,
    },
    {
      personalId: 5,
      mercat: "Mercat de Ciutat Meridiana",
      carrer: "Carrer de Costabona",
      barri: "Ciutat Meridiana",
      districte: "Nou Barris",
      coordenadaX: 41.46171736162206,
      coordenadaY: 2.17781157944736,
    },
  ];
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
  /*useEffect(() => {
    // Simulación de la obtención de datos desde una API
    setPlaces(fakeData);
  }, []);*/

  return (
    <div className="search-page-container bg-white">
      <h6 className="text-3xl text-black m-5 p-5">Què busques?</h6>
      <Search />
      {/*{users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}*/}
      <div className=" gap-4 mt-5 col-span-2">
        {data.map((data) => (
          <div
            className="bg-accent p-4 shadow mt-5 w-1/4 rounded-lg"
            key={data.personalId}
          >
            <h2 className="text-xl text-black font-bold">{data.nomLocal}</h2>
            <p className="text-gray-700">{data.nomVia}</p>
            <p className="text-gray-700">{data.nomDistricte}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
