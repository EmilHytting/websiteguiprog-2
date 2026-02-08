import React from 'react'

export default function ImageCard({ title, description, children }) {
  return (
    <div className="image-card">
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
}
