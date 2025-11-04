const { useEffect } = require("react");

useEffect(() => {
   let ignore = false;
   setBio(null);
   fetchBio(person).then((result) => {
      if (!ignore) {
         setBio(result);
      }
   });
   return () => {
      ignore = true;
   };
}, [person]);



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