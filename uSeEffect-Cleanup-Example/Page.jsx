import { useState, useEffect } from "react";
import { fetchBio } from "./api.js";

export default function Page() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setBio(null);
    fetchBio(person, { signal })
      .then((result) => {
        setBio(result);
      });

    return () => {
      controller.abort();
    }

  }, [person]);

  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </>
  );
}