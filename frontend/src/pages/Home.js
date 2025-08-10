import React, { useEffect, useState } from "react";

export default function Home() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch("/api/listings")
      .then(res => res.json())
      .then(setListings);
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Knowledge Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {listings.map(l => (
          <div key={l._id} className="p-4 border rounded">
            <h2 className="font-semibold">{l.title}</h2>
            <p>{l.description}</p>
            <p className="text-blue-600 font-bold">${l.price}</p>
            <a href={`/listing/${l._id}`} className="btn btn-primary">View</a>
          </div>
        ))}
      </div>
    </div>
  );
}