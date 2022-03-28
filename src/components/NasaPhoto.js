import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
// no import for css file becuase its already the parent to all these files, since we imported in app.js

const apiKey = process.env.REACT_APP_NASA_KEY;


// browser router test app
export default function NasaPhoto(){
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto(){
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${ apiKey }`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div className='nasaPhotoContainer'>
      <NavBar />

      {photoData.media_type === "image" ? (
      <img className="nasaPhotoDiv1" src={photoData.url} alt={photoData.title}></img>
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          allow="autoplay"
          // allow="encrypted-media"
          allowFullScreen
          className='photo'
        ></iframe>
      )}
      <div className='nasaPhotoDiv2'>
        <h1 className='nasaTitle'>{photoData.title}</h1>
        <p className="nasaDate">{photoData.date}</p>
        <p className='nasaExplanation'>{photoData.explanation}</p>
      </div>
    </div>

  )
}