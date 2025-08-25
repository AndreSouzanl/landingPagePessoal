import "./globals.css";



export const metadata = {
  title: "Landing Page DevSouza",
  description: "Minha página pessoal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
