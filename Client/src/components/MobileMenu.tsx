import { X, ChevronDown } from "lucide-react"
import logo from "../assets/logo.svg"
import Book from "../assets/Book.svg"
import Code from "../assets/Code.svg"
import Cloud from "../assets/Cloud.svg"
import Settings from "../assets/Setting.svg"
import Phone from "../assets/Call.svg"
import Logout from "../assets/Logout.svg"
import Home from "../assets/Home-d.svg"
import { Button } from "./ui/button"

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <>
      {/* Semi-transparent overlay */}
      <div 
        className="fixed inset-0 bg-neutral-600/30 z-40"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed inset-x-0 top-0 z-50 bg-white">
        {/* Header - matched height and padding with HomePage header */}
        <div className="h-[72px] px-4 border-b border-gray-200 flex items-center">
          <div className="w-full justify-between items-center inline-flex">
            <div className="h-8 justify-start items-center gap-3 flex">
              <img src={logo} alt="CodeAnt AI Logo" className="h-6 w-6" />
              <div className="text-gray-900 text-2xl font-normal font-satoshi leading-relaxed">CodeAnt AI</div>
            </div>
            <Button onClick={onClose} className="w-10 h-10  bg-white text-black hover:bg-white">
              <X className="w-10 h-10" />
            </Button>
          </div>
        </div>

        {/* Menu Content */}
        <div className="p-4 flex-col justify-start items-start gap-6 flex">
          {/* User Dropdown */}
          <div className="self-stretch h-10 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-10 flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch h-10 flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch h-10 flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch px-3 py-2 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-zinc-300 justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                      <div className="grow shrink basis-0 text-gray-900 text-base font-normal font-['Inter'] leading-normal">UtkarshDhairyaPanwar</div>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="self-stretch flex-col justify-start items-start flex">
            <MenuLink icon={Home} label="Repositories" />
            <MenuLink icon={Code} label="AI Code Review" />
            <MenuLink icon={Cloud} label="Cloud Security" />
            <MenuLink icon={Book} label="How to Use" />
            <MenuLink icon={Settings} label="Settings" />
            <MenuLink icon={Phone} label="Support" />
            <MenuLink icon={Logout} label="Logout" />
          </div>
        </div>
      </div>
    </>
  )
}

interface MenuLinkProps {
  icon: string
  label: string
  isActive?: boolean
}

function MenuLink({ icon, label}: MenuLinkProps) {
  return (
    <div className="self-stretch  justify-start items-center inline-flex overflow-hidden">
      <div className={`
        grow shrink basis-0 h- px-3 py-2 rounded-md justify-start items-center gap-3 flex
        bg-white hover:bg-gray-50'}
      `}>
        <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
          <img src={icon} className="w-6 h-6" alt="" />
          <div className={` font-semibold font-['Inter'] leading-normal text-gray-200'
          }`}>
            {label}
          </div>
        </div>
      </div>
    </div>
  )
} 