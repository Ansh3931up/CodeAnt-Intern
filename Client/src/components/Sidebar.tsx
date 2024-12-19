import { useState } from "react"
import { Button } from "./ui/button"
import { ChevronDown, X } from "lucide-react"
import logo from "../assets/logo.svg"
import Book from "../assets/book.svg"
import Code from "../assets/code.svg"
import Cloud from "../assets/cloud.svg"
import Settings from "../assets/Setting.svg"
import Phone from "../assets/Call.svg"
import Logout from "../assets/logout.svg"
import Home from "../assets/home.svg"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

interface SidebarNavProps {
  onClose?: () => void
}

interface User {
  name: string
  email: string
  // Add other user properties as needed
}

export function SidebarNav({ onClose }: SidebarNavProps) {
  const [activeItem, setActiveItem] = useState("Repositories")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  // Mock user data - replace with actual user data from your auth system
  const user: User = {
    name: "UtkarshDhairyaPanwar",
    email: "utkarsh@example.com"
  }

  const menuItems = [
    { icon: Home, label: "Repositories" },
    { icon: Code, label: "AI Code Review" },
    { icon: Cloud, label: "Cloud Security" },
    { icon: Book, label: "How to Use" },
    { icon: Settings, label: "Settings" },
  ]

  const footerItems = [
    { icon: Phone, label: "Support" },
    { icon: Logout, label: "Logout" },
  ]

  // Function to truncate long usernames
  const truncateUsername = (name: string) => {
    if (name.length > 15) {
      return `${name.slice(0, 15)}...`
    }
    return name
  }

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...")
  }

  return (
    <SidebarProvider>
      <Sidebar className="w-[242px] border-r bg-[#FFFEFE] text-black">
        <Button 
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </Button>
        <SidebarHeader className="px-5 pt-6 gap-5">
          <div className="flex items-center h-8 gap-3">
            <img 
              src={logo} 
              alt="CodeAnt AI Logo" 
              className="h-6 w-6"
            />
            <div className="text-gray-900 text-2xl font-normal font-['Inter'] leading-relaxed">
              CodeAnt AI
            </div>
          </div>
          
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button className="h-10 px-[12px] py-[8px] bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-zinc-300 w-full flex items-center justify-between">
                <div className="grow shrink basis-0 h-6 flex items-center gap-[8px]">
                  <span className="text-gray-900 text-base font-normal font-['Inter'] leading-normal truncate">
                    {truncateUsername(user.name)}
                  </span>
                </div>
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isDropdownOpen ? "transform rotate-180" : ""
                )} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-[--radix-dropdown-menu-trigger-width] p-1"
              align="start"
            >
              <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md">
                <div className="text-gray-700">Profile</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md">
                <div className="text-gray-700">Settings</div>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md text-red-600"
                onClick={handleLogout}
              >
                <div>Logout</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarHeader>
        <SidebarContent className="mt-2 px-4">
          <SidebarMenu>
            {menuItems.map((item) => (
              <NavItem 
                key={item.label}
                icon={item.icon} 
                label={item.label} 
                isActive={activeItem === item.label}
                onClick={() => setActiveItem(item.label)}
              />
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="mt-auto">
          <SidebarMenu>
            {footerItems.map((item) => (
              <NavItem 
                key={item.label}
                icon={item.icon} 
                label={item.label}
                isActive={activeItem === item.label}
                onClick={() => setActiveItem(item.label)}
              />
            ))}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}

interface NavItemProps {
  icon: string
  label: string
  isActive?: boolean
  onClick?: () => void
}

function NavItem({ icon, label, isActive, onClick }: NavItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className={cn(
          "h-[44px] w-[210px] transition-colors",
          isActive 
            ? "!bg-blue-600 !text-white !font-medium rounded-lg"
            : "text-[#404751] hover:bg-gray-100 bg-[#FFFEFE] rounded-lg"
        )}
      >
        <button 
          className="flex items-center gap-3 px-[14px] py-[10px] w-full"
          onClick={onClick}
        >
          <img 
            src={icon} 
            className={cn("h-6 w-6", isActive ? "text-white" : "text-gray-700")} 
            alt=""
          />
          <span className={cn(
            "text-base font-semibold h-6 font-['Inter'] leading-normal",
            isActive ? "text-white" : "text-gray-700"
          )}>
            {label}
          </span>
        </button>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

