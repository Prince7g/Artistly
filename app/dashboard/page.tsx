import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dummyArtists = [
  {
    name: "Ariana Melody",
    category: "Singers",
    fee: 15000,
    location: "Mumbai"
  },
  {
    name: "DJ Spark",
    category: "DJs",
    fee: 20000,
    location: "Delhi"
  }
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="p-6 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
        <table className="w-full border">
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
              <tr key={artist.name}>
                <td className="p-2 border">{artist.name}</td>
                <td className="p-2 border">{artist.category}</td>
                <td className="p-2 border">{artist.location}</td>
                <td className="p-2 border">₹{artist.fee}</td>
                <td className="p-2 border">
                  <button className="text-blue-600 underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
}
