'use client';

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArtistDetail({ params }: { params: { id: string } }) {
  const [artist, setArtist] = useState<any>(null);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("artists") || "[]");
    const found = all.find((a: any) => a.id === Number(params.id));
    setArtist(found);
  }, [params.id]);

  if (!artist) return <p className="p-6">Artist not found.</p>;

  return (
    <>
      <Header />
      <main className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
        <h1 className="text-3xl font-bold mb-4">{artist.name}</h1>

        {artist.image && (
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-64 object-cover rounded mb-4"
          />
        )}

        <div className="space-y-2 text-gray-700">
          <p><strong>Category:</strong> {artist.category.join(", ")}</p>
          <p><strong>Location:</strong> {artist.location}</p>
          <p><strong>Fee:</strong> {artist.fee}</p>
          <p><strong>Languages:</strong> {artist.languages.join(", ")}</p>
          <p><strong>Bio:</strong> {artist.bio}</p>
        </div>
      </main>
      <Footer />
    </>
  );
          }
