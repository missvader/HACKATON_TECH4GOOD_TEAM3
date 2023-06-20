import ComerciosContext from "../context/ComerciosContext";
import { useContext } from "react";

const SelectList = () => {
  const { selectedOption, handleOptionChange } = useContext(ComerciosContext);
  return (
    <select
      className="select select-bordered border-primary w-full max-w-lg mt-5"
      value={selectedOption}
      onChange={handleOptionChange}
    >
      <option disabled selected className="text-center">
        Selecciona el teu barri:
      </option>
      <option className="text-center">Ciutat Vella</option>
      <option className="text-center">Eixample</option>
      <option className="text-center">Sants-Montjuïc</option>
      <option className="text-center">Les Corts</option>
      <option className="text-center"> Sarrià-Sant Gervasi</option>
      <option className="text-center">Gràcia</option>
      <option className="text-center">Horta-Guinardó</option>
      <option className="text-center">Nou Barris</option>
      <option className="text-center">Sant Andreu</option>
      <option className="text-center">Sant Martí</option>
    </select>
  );
};

export default SelectList;
