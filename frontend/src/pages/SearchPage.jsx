import { useState, useEffect } from "react";
import Search from "../components/Search";
import SelectList from "../components/SelectList";

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
  const [places, setPlaces] = useState([]);
  /*useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      console.log(data);
      setPlaces(data);
    }
    fetchData();
  }, []);*/
  useEffect(() => {
    // Simulación de la obtención de datos desde una API
    setPlaces(fakeData);
  }, []);

  return (
    <main className="bg-white searchpage ">
      <Search />
      <SelectList />
      {/*{users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}*/}
      <div className="grid grid-cols-2 gap-4 mt-5">
        {places.map((place) => (
          <div className="bg-accent p-4 shadow" key={place.personalId}>
            <h2 className="text-xl text-black font-bold">{place.mercat}</h2>
            <p className="text-gray-700">{place.carrer}</p>
            <p className="text-gray-700">{place.barri}</p>
            <p className="text-gray-700">{place.districte}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SearchPage;
