import { SidebarProvider } from "@/components/ui/sidebar";
import { SlideBar } from "@/src/app/sidebar/page";
import Celendar from "@/src/app/calendar/page";
import "@/src/app/globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <SidebarProvider>
          <SlideBar/>
          <main>
            <SlideBar/>
            {children}
          </main>
        </SidebarProvider>
        <Celendar></Celendar>
    </div>
  );
}
