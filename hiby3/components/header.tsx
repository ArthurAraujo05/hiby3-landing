"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-mono text-base font-bold text-primary-foreground lg:text-lg">H3</span>
            </div>
            <span className="text-lg font-semibold lg:text-xl">HiBy3 Solution</span>
          </Link>

          <nav className="hidden items-center gap-4 lg:flex lg:gap-6">
            <Link
              href="#produto"
              onClick={(e) => handleScroll(e, "#produto")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              Produto
            </Link>
            <Link
              href="#servicos"
              onClick={(e) => handleScroll(e, "#servicos")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              Serviços
            </Link>
            <Link
              href="#beneficios"
              onClick={(e) => handleScroll(e, "#beneficios")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              Benefícios
            </Link>
            <Link
              href="#contato"
              onClick={(e) => handleScroll(e, "#contato")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              Contato
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border/40 bg-background lg:hidden">
          <nav className="container mx-auto max-w-7xl flex flex-col gap-4 py-4 px-4 sm:px-6">
            <Link
              href="#produto"
              onClick={(e) => handleScroll(e, "#produto")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Produto
            </Link>
            <Link
              href="#servicos"
              onClick={(e) => handleScroll(e, "#servicos")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Serviços
            </Link>
            <Link
              href="#beneficios"
              onClick={(e) => handleScroll(e, "#beneficios")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Benefícios
            </Link>
            <Link
              href="#contato"
              onClick={(e) => handleScroll(e, "#contato")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
