import Link from "next/link";

export default function CategoryCard({
  title,
  image,
  link = "#"
}: {
  title: string;
  image: string;
  link?: string;
}) {
  return (
    <Link
      href={link}
      className="block border rounded shadow hover:shadow-md transition overflow-hidden bg-white"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        />
      )}
      <h3 className="text-lg font-semibold p-2 text-center">{title}</h3>
    </Link>
  );
}
