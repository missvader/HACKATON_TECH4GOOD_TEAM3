const SelectList = () => {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        Selecciona el teu districte:
      </option>
      <option>Ciutat Vella</option>
      <option>Eixample</option>
      <option>Sants-Montjuïc</option>
      <option>Les Corts</option>
      <option>Sarrià-Sant Gervasi</option>
      <option>Gràcia</option>
      <option>Horta-Guinardó</option>
      <option>Nou Barris</option>
      <option>Sant Andreu</option>
      <option>Sant Martí</option>
    </select>
  );
};

export default SelectList;
