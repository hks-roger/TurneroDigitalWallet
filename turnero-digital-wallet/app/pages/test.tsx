"use client";

import { Link } from "@chakra-ui/next-js";
import { Box } from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseConfig";

async function addDataToFirestore(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("Document written with ID ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document ", error);
    return false;
  }
}

const Test = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFirestore(name, email, message);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");

      alert("Data added to firestore DB");
    }
  };

  return (
    <Box>
      <h1>Add data to firestore database</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">message:</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Box>
  );
};

export default Test;
