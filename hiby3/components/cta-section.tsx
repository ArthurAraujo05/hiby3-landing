import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/20 via-accent/10 to-background p-8 sm:p-12 md:p-16 lg:p-20">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
              Pronto para transformar seus processos?
            </h2>
            <p className="mb-6 text-pretty text-sm text-muted-foreground sm:mb-8 sm:text-base md:text-lg">
              Agende uma demonstração gratuita e descubra como a HiBy3 pode revolucionar a produtividade da sua empresa
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild className="group w-full gap-2 sm:w-auto">
                <Link href="https://calendly.com/hiby3solution-demonstracao-rh-automacao/demonstracao" target="_blank">
                  Agendar Demonstração
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/orcamento">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
