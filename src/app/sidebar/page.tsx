import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Avatar } from "@radix-ui/react-avatar"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Danh Sách",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Lịch Học",
    url: "/Calendar/calendar",
    icon: Calendar,
  },      
  {
    title: "Tìm Lớp Học",
    url: "#",
    icon: Search,
  },
  {
    title: "Cài Đặt",
    url: "#",
    icon: Settings,
  },
]

export function SlideBar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-serif">
            <Avatar></Avatar>
            <h3>Quản Lý Lớp Học</h3>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
