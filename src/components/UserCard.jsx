import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserCard = ({ user }) => {
  const { setSelectedUser } = useContext(UserContext);

  return (
    <div className="user-card" onClick={() => setSelectedUser(user)}>
      <div className="user-top">
        <h3>{user.name}</h3>
        <span>Active</span>
      </div>

      <p className="email">{user.email}</p>

      <div className="meta">
        <span>{user.company.name}</span>
        <span>{user.address.city}</span>
      </div>
    </div>
  );
};

export default UserCard;
