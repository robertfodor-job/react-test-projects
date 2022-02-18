import { useEffect, useState } from "react";
import Table from "./Table";
import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState(Users);

  const keys = ["first_name", "last_name", "email"];

  // console.log(
  //   Users.filter((item) => item.first_name.toLowerCase().includes("fe"))
  // );

  useEffect(() => {
    const searchedUsers = Users.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
    const timeout = setTimeout(() => {
      setUsers(searchedUsers);
    }, 600);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={users} />
    </div>
  );
}

export default App;
