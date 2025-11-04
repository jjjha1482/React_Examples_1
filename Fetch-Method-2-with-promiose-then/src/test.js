import { useEffect } from "react";

useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json)
      .then((result) => {
         setData(result);
      })
      .catch((err) => {
         console.log(err);
         serError(true);
      })
      .finally(() => setLoading(false));
}, []);


useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
         if (!response.ok) {
            throw new Error("Network response was not ok");
         }
         return response.json();
      })
      .then((result) => {
         setData(result);
      })
      .catch((err) => {
         console.error(err);
         setError(true);
      })
      .finally(() => {
         setLoading(false);
      });
}, []);
