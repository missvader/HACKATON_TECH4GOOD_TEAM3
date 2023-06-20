import Search from "../components/Search";
import ComercioCards from "../components/ComericoCards";

const SearchPage = () => {
  // const fakeData = [
  //   {
  //     personalId: 0,
  //     mercat: "Mercat de Sant Josep - La Boqueria",
  //     carrer: "Carrer la Rambla",
  //     barri: "el Raval",
  //     districte: "Ciutat Vella",
  //     coordenadaX: 41.38204889437501,
  //     coordenadaY: 2.17227075910574,
  //   },
  //   {
  //     personalId: 1,
  //     mercat: "Mercat de Santa Caterina",
  //     carrer: "Av Francesc Cambó",
  //     barri: "Sant Pere, Santa Caterina i la Ribera",
  //     districte: "Ciutat Vella",
  //     coordenadaX: 41.38639488164491,
  //     coordenadaY: 2.1781771121189712,
  //   },
  //   {
  //     personalId: 2,
  //     mercat: "Mercat d'Hostafrancs",
  //     carrer: "Carrer de la Creu Coberta",
  //     barri: "Hostafrancs",
  //     districte: "Sants-Montjuïc",
  //     coordenadaX: 41.37516234439833,
  //     coordenadaY: 2.143853943380838,
  //   },
  //   {
  //     personalId: 3,
  //     mercat: "Mercat de Sants",
  //     carrer: "C Sant Jordi",
  //     barri: "Sants",
  //     districte: "Sants-Montjuïc",
  //     coordenadaX: 41.37474144032811,
  //     coordenadaY: 2.133754628418325,
  //   },
  //   {
  //     personalId: 4,
  //     mercat: "Mercat de la Marina",
  //     carrer: "Passeig de la Zona Franca",
  //     barri: "la Marina de Port",
  //     districte: "Sants-Montjuïc",
  //     coordenadaX: 41.36038025969584,
  //     coordenadaY: 2.1391929530213143,
  //   },
  //   {
  //     personalId: 5,
  //     mercat: "Mercat de Ciutat Meridiana",
  //     carrer: "Carrer de Costabona",
  //     barri: "Ciutat Meridiana",
  //     districte: "Nou Barris",
  //     coordenadaX: 41.46171736162206,
  //     coordenadaY: 2.17781157944736,
  //   },
  // ];
  // useEffect(() => {
  //   // Simulación de la obtención de datos desde una API
  //   setData(fakeData);
  // }, []);

  return (
    <div className="search-page-container bg-white">
      <h1 className="text-4xl m-5 p-5">Què busques?</h1>
      <Search />
      <ComercioCards />
    </div>
  );
};

export default SearchPage;
