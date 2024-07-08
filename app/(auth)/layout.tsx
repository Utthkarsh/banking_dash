import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        
        <div className="relative w-full h-1/2">
          <Image
            src="/icons/banking_auth_img.png"
            alt="auth-img"
            layout="fill"
            
          />
        </div>
      </div>
    </main>
  );
}
