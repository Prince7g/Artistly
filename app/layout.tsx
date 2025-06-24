import '../styles/globals.css';

export const metadata = {
  title: "Artistly - Book Your Performer",
  description: "A performing artist booking platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
