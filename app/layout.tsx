import Topbar from "./(pages)/(homepage)/topbar";
import "./globals.css";

export const metadata = {
  title: "Albion Kills",
  description: "Albion Online Killboard Tracker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white min-h-screen">
        <Topbar />
        <main className="px-6 py-4">{children}</main>
      </body>
    </html>
  );
}