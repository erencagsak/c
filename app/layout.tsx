import "./globals.css";

export const metadata = {
  title: "Albion Kills",
  description: "Real-time Albion Online Killboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}