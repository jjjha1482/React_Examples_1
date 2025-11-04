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