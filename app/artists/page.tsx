"use client";

import { useState } from "react";
import artistData from "@/data/artists.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";

export default function ArtistsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArtists = selectedCategory
    ? artistData.filter((a) => a.category === selectedCategory)
    : artistData;

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Available Artists</h1>
        <FilterBlock onSelect={setSelectedCategory} selected={selectedCategory} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
                        }
