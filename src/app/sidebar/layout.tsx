import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { SlideBar } from "@/src/app/sidebar/app-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <body>
        <SidebarProvider>
          <SlideBar/>
          <main>
            <SlideBar/>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </div>
  );
}
