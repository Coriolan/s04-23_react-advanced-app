import React, { useEffect, useState } from 'react';

export default function NewUserInfo() {
  const [user, setUser] = useState({});
  const [userID, setUserID] = useState(1);

  useEffect(myEffectFunction, [userID]); //AKA useEffect(() => {});

  function myEffectFunction() {
    console.log(`myEffectFunction() called... userID: ${userID}`);
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
    return () => {
      console.log(`clean up...`);
    };
  }

  const handleChange = (e) => {
    setUserID(e.target.value);
  };

  return (
    <div className="user">
      <br />
      NEW User Info:{' '}
      <input type="text" value={userID} onChange={handleChange} />
      <br />
      <br />
      NEW Name: {user.name}
      <br />
      NEW Email: {user.email}
    </div>
  );
}
