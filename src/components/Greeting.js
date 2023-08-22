import React, { useEffect, useState } from "react";
import "../App.css";

const Greeting = () => {
    const [name, setName] = useState(localStorage.getItem("name") || "");

    useEffect(() => {
        localStorage.setItem("name", name)
    }, [name]);

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
    }

  return (
    <section className="greeting">
      <h2 className="title">
        What's up, <input 
        type="text" 
        id="name" 
        placeholder="Name here" 
        value={name}
        onChange={handleNameChange}
        />
      </h2>
    </section>
  );
};

export default Greeting;
