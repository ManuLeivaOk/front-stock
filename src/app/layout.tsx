import "./styles/theme.css";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import Header from "@/components/common/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = {
    ripple: true,
  };

  return (
    <html lang="en">
      <body className="p-0 m-0">
        <PrimeReactProvider value={config}>
          <Header />
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
