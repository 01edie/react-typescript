import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);
  const addGuest: () => void = () => {
    setGuests((s) => [...s, name]);
    setName("");
  };
  return (
    <div>
      <h3>GuestList</h3>
      <ol >
        {guests.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ol>
      <div>
        <input
          style={{ marginRight: "16px" }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addGuest}>Add Guest</button>
      </div>
    </div>
  );
};

export default GuestList;
