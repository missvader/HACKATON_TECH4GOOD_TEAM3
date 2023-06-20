import RestaurantIcon from "@mui/icons-material/Restaurant";

const Badges = () => {
  return (
    <div className="badges-container flex space-x-2 my-8 flex-wrap w-4/5 ">
      <div className="badge badge-secondary">RESTAURANTS</div>
      <div className="badge badge-neutral">BARS</div>
      <div className="badge badge-primary">ROBA</div>
      <div className="badge badge-secondary">PERRUQUERIES</div>
      <div className="badge badge-accent">SUPERMERCAT</div>
      <div className="badge badge-primary">PÀ</div>
      <div className="badge badge-accent">ESTÈTICA</div>
      <div className="badge badge-secondary">REPARACIONS</div>
      <div className="badge badge-neutral">FARMÀCIA I SANITAT</div>
      <div className="badge badge-primary">CARNISSERIA</div>
      <div className="badge badge-secondary">FRUITES I VERDURES</div>
      <div className="badge badge-accent">PEIX</div>
      <div className="badge badge-primary">JOIERIA</div>
      <div className="badge badge-neutral">EQUIPAMENT LLAR</div>
      <div className="badge badge-secondary ">CALÇAT</div>
    </div>
  );
};

export default Badges;
