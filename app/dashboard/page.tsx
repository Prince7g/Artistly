'use client';

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DashboardPage() {
  const [artists, setArtists] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("artists") || "[]");

    // Inject 2 default dummy artists if none exist
    if (stored.length === 0) {
      const dummy = [
        {
          id: Date.now(),
          name: "A.R. Rahman",
          bio: "Legendary music composer and playback singer with global recognition.",
          category: ["Singer"],
          languages: ["Tamil", "Hindi", "English"],
          fee: "₹5L+",
          location: "Chennai",
          image: "https://upload.wikimedia.org/wikipedia/commons/9/97/A._R._Rahman_2017.jpg"
        },
        {
          id: Date.now() + 1,
          name: "Sonu Sood",
          bio: "Bollywood actor and motivational speaker known for his philanthropic work.",
          category: ["Speaker"],
          languages: ["Hindi", "Punjabi", "English"],
          fee: "₹3L - ₹5L",
          location: "Mumbai",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Sonu_Sood_2022.jpg"
        }
      ];
      localStorage.setItem("artists", JSON.stringify(dummy));
      setArtists(dummy);
    } else {
      setArtists(stored);
    }
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
                    <img
                      src={artist.image}
                      className="w-16 h-16 object-cover rounded"
                      alt={artist.name}
                    />
                  </td>
                  <td className="p-2 border">{artist.name}</td>
                  <td className="p-2 border">{artist.category.join(", ")}</td>
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
