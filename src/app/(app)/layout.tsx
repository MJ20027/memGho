import Navbar from '@/components/Navbar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div style={{"backgroundColor" : "rgb(15, 25, 59)"}}className="flex flex-col min-h-screen ">
      <Navbar />
      {children}
    </div>
  );
}
