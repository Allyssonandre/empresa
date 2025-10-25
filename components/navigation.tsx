"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Briefcase, MessageSquare } from "lucide-react"
import { ContactModal } from "./contact-modal"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-xl sm:text-2xl font-bold text-gray-900">ALN</span>
              <span className="text-lg sm:text-xl font-mono text-primary">{"</>"}</span>
              <span className="text-sm sm:text-base font-semibold text-gray-700">Tecnologia</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                Serviços
              </button>
              <Button
                onClick={() => setIsContactModalOpen(true)}
                size="sm"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                Contato
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-900">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="flex items-center gap-2 text-left text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Briefcase className="w-4 h-4" />
                  Serviços
                </button>
                <Button
                  onClick={() => {
                    setIsContactModalOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  size="sm"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  Contato
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
