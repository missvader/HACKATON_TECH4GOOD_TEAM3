import { useState, useEffect } from "react";
<<<<<<< HEAD:frontend/src/pages/SearchPage.jsx
import Search from "../components/Search";
=======
import Header from "../../components/Header/Header";
>>>>>>> main:frontend/src/pages/Home/Home.jsx

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
<<<<<<< HEAD:frontend/src/pages/SearchPage.jsx
    <main className="bg-secondary searchpage">
      <Search />
      {/*{users.map((user) => (
=======
    <main className={styles.main}>
      <Header />
      <h1>Home</h1>
      {users.map((user) => (
>>>>>>> main:frontend/src/pages/Home/Home.jsx
        <p key={user._id}>{user.name}</p>
      ))}*/}
    </main>
  );
};

export default SearchPage;
