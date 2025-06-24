export default function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="border rounded shadow hover:shadow-md transition overflow-hidden bg-white">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <h3 className="text-lg font-semibold p-2 text-center">{title}</h3>
    </div>
  );
}
