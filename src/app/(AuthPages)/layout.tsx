import AuthFooter from "./components/AuthFooter";
import AuthHeader from "./components/AuthHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="min-h-screen flex flex-col bg-[#F4F8FA]">
     <AuthHeader  />
     <main className="">
        {children}
     </main>
     <AuthFooter />
   </div>
  );
}