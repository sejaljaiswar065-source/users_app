import { createContext, useMemo, useState } from "react";
import usersData from "../data/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);
  const [query, setQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [users, query]);

  return (
    <UserContext.Provider
      value={{
        users: filteredUsers,
        setQuery,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
