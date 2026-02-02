import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "./UserCard";
import UserModal from "./UserModal";

const UserList = () => {
  const { users, loading, setQuery } = useContext(UserContext);

  return (
    <div className="app-shell">
      <div className="header">
        <h1>User Analytics</h1>
        <p>Internal dashboard for monitoring registered users</p>
      </div>

      <div className="controls">
        <input
          className="search-input"
          placeholder="Search user..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="count">Users: {users.length}</span>
      </div>

      {loading ? (
        <div className="state">Loading user data…</div>
      ) : users.length === 0 ? (
        <div className="state">No users found.</div>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      <UserModal />
    </div>
  );
};

export default UserList;
