import React, { useState } from "react";
import { Newsletter, Response, ImageIcon } from "../styled/StyledComponents";
import cancel from "../assets/cancel.png";

// newsletter
export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [close, setClose] = useState(false);
  const [fetchResponse, setFetchResponse] = useState(
    "Subscribe to our Newsletter"
  );
  const form = async (e) => {
    e.preventDefault();
    setFetchResponse("One sec...");
    try {
      let res = await fetch("/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });
      let response = await res.json();
      setFetchResponse(response.message);
    } catch (err) {
      setFetchResponse("Something went wrong :(");
    }
  };
  return (
    <Newsletter onSubmit={form} close={close}>
      <ImageIcon
        color="black"
        icon={true}
        transition="0s"
        src={cancel}
        alt="cancel"
        onClick={() => setClose(true)}
      />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        required
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
        required
      />
      <button type="submit">Subscribe</button>
      <Response color={fetchResponse}>{fetchResponse}</Response>
    </Newsletter>
  );
};
