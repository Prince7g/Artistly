export default function ArtistCard({ artist }: { artist: any }) {
  return (
    <div className="border rounded p-4 shadow bg-white">
      <h2 className="text-xl font-semibold">{artist.name}</h2>
      <p className="text-sm">Category: {artist.category}</p>
      <p className="text-sm">Location: {artist.location}</p>
      <p className="text-sm">Fee: ₹{artist.price}</p>
      <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">Ask for Quote</button>
    </div>
  );
}
