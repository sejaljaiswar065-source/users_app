import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserModal = () => {
  const { selectedUser, setSelectedUser } = useContext(UserContext);

  if (!selectedUser) return null;

  return (
    <div className="modal-backdrop" onClick={() => setSelectedUser(null)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{selectedUser.name}</h2>
        <p className="modal-email">{selectedUser.email}</p>

        <div className="modal-section">
          <h4>Company</h4>
          <p>{selectedUser.company.name}</p>
        </div>

        <div className="modal-section">
          <h4>Address</h4>
          <p>
            {selectedUser.address.street}, {selectedUser.address.city}
          </p>
        </div>

        <div className="modal-section">
          <h4>Contact</h4>
          <p>{selectedUser.phone}</p>
          <p>{selectedUser.website}</p>
        </div>

        <button className="close-btn" onClick={() => setSelectedUser(null)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
