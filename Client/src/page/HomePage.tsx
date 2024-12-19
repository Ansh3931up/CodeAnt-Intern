import { useState } from "react"
import RepositoryList from "@/components/MainPage.tsx"
import { SidebarNav } from "../components/Sidebar.tsx"
import { MobileMenu } from "../components/MobileMenu.tsx"
import { Button } from "../components/ui/button"
import { Menu } from "lucide-react"
import logo from "../assets/logo.svg"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      {/* Mobile Header */}
      <header className="lg:hidden h-[72px] flex items-center px-4 bg-white border-b border-gray-200">
        <div className="w-full justify-between items-center inline-flex">
          <div className="h-8 justify-start items-center gap-3 flex">
            <img 
              src={logo} 
              alt="CodeAnt AI Logo" 
              className="h-6 w-6"
            />
            <span className="text-gray-900 text-2xl font-normal font-satoshi leading-relaxed">CodeAnt AI</span>
          </div>
          <Button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-10 h-10 relative bg-white text-black hover:bg-white "
          >
            <Menu className="w-10 h-10" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-[242px]">
          <SidebarNav />
        </aside>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Main Content */}
        <main className="w-full">
          <RepositoryList />
        </main>
      </div>
    </div>
  )
}

