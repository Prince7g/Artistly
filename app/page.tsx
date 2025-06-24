"use client";

import { useEffect, useState } from "react";
import { fetchPexelsImage } from "@/lib/pexels";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  const [images, setImages] = useState({
    singers: "",
    dancers: "",
    speakers: "",
    djs: ""
  });

  useEffect(() => {
    async function loadImages() {
      const singers = await fetchPexelsImage("singer");
      const dancers = await fetchPexelsImage("dancer");
      const speakers = await fetchPexelsImage("public speaker");
      const djs = await fetchPexelsImage("dj");
      setImages({ singers, dancers, speakers, djs });
    }

    loadImages();
  }, []);

  return (
    <>
      <Header />

      {/* Welcome Section */}
      <section className="flex flex-col items-center justify-center text-center p-6 min-h-[60vh]">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to Artistly.com
        </h1>
        <p className="text-gray-600 max-w-md mb-6">
          A one-stop platform for Event Planners and Artist Managers to connect and collaborate.
        </p>
        <Link href="#categories">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-lg transition">
            Explore Artists
          </button>
        </Link>
      </section>

      {/* Categories Section */}
      <section id="categories" className="p-6">
        <h2 className="text-2xl font-bold mb-4">Explore Artist Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard title="Singers" image={images.singers} link="/artists?category=Singers" />
          <CategoryCard title="Dancers" image={images.dancers} link="/artists?category=Dancers" />
          <CategoryCard title="Speakers" image={images.speakers} link="/artists?category=Speakers" />
          <CategoryCard title="DJs" image={images.djs} link="/artists?category=DJs" />
        </div>
      </section>

      <Footer />
    </>
  );
      }
