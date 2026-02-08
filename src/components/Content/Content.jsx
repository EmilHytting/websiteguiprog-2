import React from 'react'

export default function Content({ paragraphOne, paragraphTwo, paragraphThree }) {
  return (
    <main className="content">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Webside billede" className="content-image" />
      <p>{paragraphOne}</p>
      <p>{paragraphTwo}</p>
      <p>{paragraphThree}</p>
    </main>
  );
}