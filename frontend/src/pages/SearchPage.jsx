import { useState, useEffect } from "react";
import Search from "../components/Search";

const SearchPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      console.log(data);
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <main className="bg-secondary searchpage">
      <Search />
      {/*{users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}*/}
    </main>
  );
};

export default SearchPage;
