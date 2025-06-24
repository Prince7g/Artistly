"use client";

import { useEffect, useState } from "react";
import { fetchPexelsImage } from "@/lib/pexels";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Explore Artist Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard title="Singers" image={images.singers} />
          <CategoryCard title="Dancers" image={images.dancers} />
          <CategoryCard title="Speakers" image={images.speakers} />
          <CategoryCard title="DJs" image={images.djs} />
        </div>
      </main>
      <Footer />
    </>
  );
          }
