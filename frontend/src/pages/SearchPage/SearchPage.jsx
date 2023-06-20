import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";

const Home = () => {
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
    <main className={styles.main}>
      <Header />
      <h1>Home</h1>
      {users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
    </main>
  );
};

export default Home;
