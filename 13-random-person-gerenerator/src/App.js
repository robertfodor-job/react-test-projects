import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/71.jpg';
function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');

  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    console.log(person);
    // phone email
    const { phone, email } = person;
    // image
    const {
      picture: { large },
    } = person;
    // password
    const {
      login: { password },
    } = person;
    // first and last name
    const { first, last, title } = person.name;
    // age
    const {
      dob: { age },
    } = person;
    // street
    const {
      street: { number, name: street },
      city,
      country,
    } = person.location;

    const newPerson = {
      name: `${title} ${first} ${last}`,
      password,
      img: large,
      phone,
      email,
      age,
      street: `${number} ${street} ${city} ${country}`,
    };
    setPerson(newPerson);
    setTitle('name');
    setValue(newPerson.name);
    setLoading(false);
  };

  useEffect(() => {
    getPerson();
  }, []);

  // same handler for mouseOver
  const handleValue = e => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label;

      // My [title] is [value]...
      // dynamic properties assets on object
      setValue(person[newValue]);
      setTitle(newValue);
    }
  };
  return (
    <main>
      <div className="bcg-black block"> </div>
      <div className="block">
        <div className="container">
          <img
            src={person ? person.img : defaultImage}
            alt="person"
            className="user-img"
          />
          <p className="user-title">My {title} is </p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button type="button" className="btn" onClick={getPerson}>
            {loading ? 'loading...' : 'Random User'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
