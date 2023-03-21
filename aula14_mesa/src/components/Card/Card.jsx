import {useEffect, useState} from "react";
import styles from "./styles.module.css";

const Card = () => {
  const url = "https://dummyjson.com/users";
  const [user, setUser] = useState([]);

  async function getUsers() {
    try {
      const data = await (await fetch(url)).json();
      setUser(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Users</h1>
      <ul className={styles.list_container}>
        {user.map(user => (
          <li className={styles.list} key={user.id}>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p className={styles.user_title}>{user.company.title}</p>
            <p>Username: {user.username}</p>
            <p>University: {user.university}</p>
            <img src={user.image} alt="user image" />
            <p>Phone: {user.phone}</p>
            <a href={`mailto:${user.email}`}>{user.email}</a>
            <a href={user.domain}>{user.domain}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Card;
<h1>Users</h1>;
