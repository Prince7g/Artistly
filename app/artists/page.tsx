// app/artists/page.tsx
export default function ArtistsPage() {
  const categories = [
    { name: 'Singers', image: '/images/singer.jpg' },
    { name: 'Dancers', image: '/images/dancer.jpg' },
    { name: 'DJs', image: '/images/dj.jpg' },
    { name: 'Speakers', image: '/images/speaker.jpg' },
  ];

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Artists</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-white rounded-lg shadow hover:scale-105 transition-transform"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="p-2 text-center font-medium">{cat.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
      }
