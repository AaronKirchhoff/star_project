import React, { useEffect, useState } from 'react';

// browser router test app
export default function NasaPhoto(){
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto(){
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=6l3gpeSno0tShfNMamoyXhRLDU3pFCac6QE8fkuN`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div>
      <img src={photoData.url} alt={photoData.title}></img>
    </div>

  )
}