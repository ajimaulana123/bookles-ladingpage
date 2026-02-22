"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home", type: "page" },
  { href: "/#features", label: "Fitur", type: "anchor" },
  { href: "/produk", label: "Produk", type: "page" },
  { href: "/harga", label: "Harga", type: "page" },
  { href: "/portfolio", label: "Portfolio", type: "page" },
  { href: "/klien", label: "Klien", type: "page" },
  { href: "/kontak", label: "Kontak", type: "page" },
]

export function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Only track anchor links for active state when on homepage
      if (pathname !== "/") return
      
      const anchorLinks = navLinks.filter(link => link.type === "anchor")
      const sections = anchorLinks.map(link => link.href.split('#')[1])
      const scrollPosition = window.scrollY + 100
      
      // If at very top, set to home
      if (scrollPosition < 200) {
        setActiveSection("home")
        return
      }
      
      // Check if we're at the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10
      
      if (isBottom) {
        setActiveSection("contact")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Set initial state
    if (pathname === "/") {
      handleScroll()
    } else {
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo-elfan.png" width="50" height="50" alt="logo elfan" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const sectionId = link.href.includes('#') ? link.href.split('#')[1] : null
              
              // Check if page link is active
              const isPageActive = link.type === "page" && pathname === link.href
              
              // Check if anchor link is active (only on homepage)
              // Home should NOT be active when viewing anchor sections
              const isAnchorActive = link.type === "anchor" && pathname === "/" && sectionId && activeSection === sectionId
              
              // Special case: Home should only be active when at top of homepage (not when scrolled to other sections)
              const isHomeActive = link.href === "/" && pathname === "/" && (activeSection === "home" || activeSection === "")
              
              const isActive = link.href === "/" ? isHomeActive : (isPageActive || isAnchorActive)
              
              return link.type === "anchor" ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-green-600"
                      : "text-slate-700 hover:text-green-600"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 rounded-full" />
                  )}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-green-600"
                      : "text-slate-700 hover:text-green-600"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/6289604666665" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6">
                Hubungi Kami
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-green-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const sectionId = link.href.includes('#') ? link.href.split('#')[1] : null
                
                // Check if page link is active
                const isPageActive = link.type === "page" && pathname === link.href
                
                // Check if anchor link is active (only on homepage)
                const isAnchorActive = link.type === "anchor" && pathname === "/" && sectionId && activeSection === sectionId
                
                // Special case: Home should only be active when at top of homepage
                const isHomeActive = link.href === "/" && pathname === "/" && (activeSection === "home" || activeSection === "")
                
                const isActive = link.href === "/" ? isHomeActive : (isPageActive || isAnchorActive)
                
                return link.type === "anchor" ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors py-2 ${
                      isActive
                        ? "text-green-600"
                        : "text-slate-700 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors py-2 ${
                      isActive
                        ? "text-green-600"
                        : "text-slate-700 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a 
                href="https://wa.me/6289604666665" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full">
                  Hubungi Kami
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
