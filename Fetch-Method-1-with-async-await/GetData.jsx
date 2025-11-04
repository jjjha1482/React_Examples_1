import React, { useState, useEffect } from "react";

function GetData() {
  // State management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Conditional rendering
  if (loading) return <h2>Loading data…</h2>;
  if (error) return <h2>Error fetching data</h2>;

  return (
    <>
      <h2>Name: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Username: {data.username}</h2>
    </>
  );
}

export default GetData;
