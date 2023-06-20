import Badges from "./Badges";

const Search = () => {
  return (
    <div className="mt-5">
      <div className="text-2xl text-black">Search</div>
      <Badges />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary
         w-full max-w-xs text-gray-900"
      />
    </div>
  );
};

export default Search;
