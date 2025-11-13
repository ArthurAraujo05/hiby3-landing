import { Target, Users, Zap } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Nossa Missão
          </h2>
          <p className="mb-8 text-pretty text-sm text-muted-foreground sm:mb-12 sm:text-base md:mb-16 md:text-lg">
            Capacitar empresas a alcançar excelência operacional através de soluções tecnológicas inovadoras e
            consultoria especializada.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg sm:p-8">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">Foco em Resultados</h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              Desenvolvemos soluções que geram impacto mensurável nos seus processos e na produtividade da sua equipe.
            </p>
          </div>

          <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg sm:p-8">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">Inovação Contínua</h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              Utilizamos as tecnologias mais avançadas para garantir que sua empresa esteja sempre à frente da
              concorrência.
            </p>
          </div>

          <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg sm:p-8">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">Parceria de Longo Prazo</h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              Mais do que fornecedores, somos parceiros comprometidos com o sucesso e crescimento do seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
