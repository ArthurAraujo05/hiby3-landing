"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const handleScroll = (id: string) => {
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
  }

  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-secondary/20 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:mb-6 sm:px-4 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Transforme seus processos empresariais
          </div>

          <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Otimize seu workflow com <span className="text-primary">automação inteligente</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl px-4 text-pretty text-base text-muted-foreground sm:mb-10 sm:px-0 sm:text-lg md:text-xl">
            Aumente a produtividade da sua equipe com soluções de gestão de tempo e consultoria especializada em
            automação de processos e IA.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" className="group w-full gap-2 sm:w-auto" asChild>
              <a
                href="https://calendly.com/hiby3solution-demonstracao-rh-automacao/demonstracao"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Demonstração
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent"
              onClick={() => handleScroll("#produto")}
            >
              Conhecer WorkFlow
            </Button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-xs text-muted-foreground sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-6 sm:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              <span>Sem necessidade de cartão</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              <span>Configuração em minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              <span>Suporte dedicado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  )
}
