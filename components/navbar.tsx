"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#0a3b5c] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl">
            Servicios de Estomatología
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#servicios" className="hover:text-[#e6c9a5] transition-colors">
              Servicios
            </Link>
            <Link href="#instagram" className="hover:text-[#e6c9a5] transition-colors">
              Instagram
            </Link>
            <Link href="#citas" className="hover:text-[#e6c9a5] transition-colors">
              Citas
            </Link>
            <Button className="bg-[#e6c9a5] hover:bg-[#d4b48c] text-[#0a3b5c] font-semibold" asChild>
              <Link href="https://wa.me/18292665637" target="_blank">
                Contactar
              </Link>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a3b5c] pb-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link
              href="#servicios"
              className="py-2 hover:text-[#e6c9a5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#instagram"
              className="py-2 hover:text-[#e6c9a5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Instagram
            </Link>
            <Link
              href="#citas"
              className="py-2 hover:text-[#e6c9a5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Citas
            </Link>
            <Button className="bg-[#e6c9a5] hover:bg-[#d4b48c] text-[#0a3b5c] font-semibold w-full" asChild>
              <Link href="https://wa.me/18292665637" target="_blank" onClick={() => setIsMenuOpen(false)}>
                Contactar por WhatsApp
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
