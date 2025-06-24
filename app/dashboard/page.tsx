'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DashboardPage() {
  const [artists, setArtists] = useState<any[]>([]);

  useEffect(() => {
    const dummyArtists = [
      {
        id: 1,
        name: "A.R. Rahman",
        bio: "Legendary composer and playback singer.",
        category: ["Singer"],
        languages: ["Hindi", "Tamil", "English"],
        fee: "₹5L+",
        location: "Chennai",
        image: "https://i.imgur.com/FwbzWDb.jpg"
      },
      {
        id: 2,
        name: "Sonu Sood",
        bio: "Actor and motivational speaker.",
        category: ["Speaker"],
        languages: ["Hindi", "Punjabi", "English"],
        fee: "₹3L - ₹5L",
        location: "Mumbai",
        image: "https://i.imgur.com/V0iAn1K.jpg"
      }
    ];

    const onboarded = JSON.parse(localStorage.getItem("artists") || "[]");

    const merged = [...dummyArtists];
    for (const artist of onboarded) {
      if (!merged.some(a => a.id === artist.id)) {
        merged.push(artist);
      }
    }

    setArtists(merged);
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Location</th>
                <th className="p-2 border">Fee</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist) => (
                <tr key={artist.id}>
                  <td className="p-2 border">
                    {artist.image ? (
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-16 h-16 object-cover rounded border"
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </td>
                  <td className="p-2 border">{artist.name}</td>
                  <td className="p-2 border">{artist.category.join(', ')}</td>
                  <td className="p-2 border">{artist.location}</td>
                  <td className="p-2 border">{artist.fee}</td>
                  <td className="p-2 border">
                    <Link href={`/artists/${artist.id}`}>
                      <span className="text-blue-600 underline">View</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}
