'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const dummyArtists = [
  {
    id: 1,
    name: "Ariana Melody",
    category: "Singers",
    fee: 15000,
    location: "Mumbai"
  },
  {
    id: 2,
    name: "DJ Spark",
    category: "DJs",
    fee: 20000,
    location: "Delhi"
  },
  {
    id: 3,
    name: "Rhythm Blaze",
    category: "Dancers",
    fee: 18000,
    location: "Bangalore"
  },
  {
    id: 4,
    name: "MC Echo",
    category: "Speakers",
    fee: 12000,
    location: "Hyderabad"
  },
  {
    id: 5,
    name: "DJ Vibe",
    category: "DJs",
    fee: 25000,
    location: "Pune"
  }
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Location</th>
                <th className="p-2 border">Fee</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyArtists.map((artist) => (
                <tr key={artist.id}>
                  <td className="p-2 border">{artist.name}</td>
                  <td className="p-2 border">{artist.category}</td>
                  <td className="p-2 border">{artist.location}</td>
                  <td className="p-2 border">₹{artist.fee}</td>
                  <td className="p-2 border">
                    <Link href={`/artists/${artist.id}`}>
                      <button className="text-blue-600 underline hover:text-blue-800 transition">
                        View
                      </button>
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
