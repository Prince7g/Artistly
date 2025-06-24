'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dummyArtists = [
  {
    name: "Arjun Melody",
    category: "Singers",
    location: "Mumbai",
    fee: "₹1L - ₹3L",
    image: "https://images.pexels.com/photos/167446/pexels-photo-167446.jpeg"
  },
  {
    name: "DJ Spark",
    category: "DJs",
    location: "Delhi",
    fee: "₹50K - ₹1L",
    image: "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg"
  },
  {
    name: "Rhythm Blaze",
    category: "Dancers",
    location: "Bangalore",
    fee: "₹3L - ₹5L",
    image: "https://images.pexels.com/photos/3756157/pexels-photo-3756157.jpeg"
  },
  {
    name: "MC Echo",
    category: "Speakers",
    location: "Hyderabad",
    fee: "₹1L - ₹3L",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
  }
];

export default function ArtistsPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">All Artists</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {dummyArtists.map((artist, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-lg">{artist.name}</h3>
              <p className="text-sm text-gray-600">{artist.category}</p>
              <p className="text-sm text-gray-600">{artist.location}</p>
              <p className="text-sm text-gray-800 font-medium">{artist.fee}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
              }
