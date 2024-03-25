"use client";

import { Link } from "@chakra-ui/next-js";
import { Box } from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { useMetaMask } from "metamask-react";

async function addDataToFirestore(
  name: string,
  email: string,
  message: string
) {
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
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
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
        <Box>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Box>
        {status === "initializing" && (
          <div>Synchronisation with MetaMask ongoing...</div>
        )}
        {status === "unavailable" && <div>MetaMask not available :(</div>}
        {status === "notConnected" && (
          <button onClick={connect}>Connect to MetaMask</button>
        )}
        {status === "connecting" && <div>Connecting...</div>}
        {status === "connected" && (
          <div>
            Connected account {account} on chain ID {chainId}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Test;
