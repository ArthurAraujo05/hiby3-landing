import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BenefitsSection() {
  const benefits = [
    // Vende a Consultoria e Automação (Foco em Receita/Eficiência):
    "Velocidade: Aumente a velocidade operacional eliminando tarefas manuais com Automação e IA.",
    "Customização Inteligente: Entregamos a solução exata (Ad Hoc), sem depender de software 'de prateleira'.",
    "Integração Total: Conectamos sistemas legados (ERP, Contabilidade) via Automação (n8n), sem atrito.",

    // Vende a Solidez e Confiança (Foco no WorkFlow/Arquitetura):
    "Risco Zero em RH: Ponto eletrônico com Compliance garantido e Workflow de Edição auditável (WorkFlow).",
    "Confiança: Arquitetura Multi-Tenant com isolamento total dos dados de cada cliente (Segurança Máxima).",
    "Foco no Core Business: Deixe a complexidade tecnológica e de ponto conosco.",

    // Benefícios Estratégicos e Mensuráveis:
    "Insights em Tempo Real: Dados prontos para decisões estratégicas, não apenas para relatórios.",
    "Escalabilidade: Cresça sem se preocupar com gargalos de infraestrutura ou segurança.",
  ]

  return (
    <section id="beneficios" className="border-t border-border/40 bg-secondary/20 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:mb-4 sm:px-4 sm:text-sm">
              Por que escolher HiBy3
            </div>
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
              Transforme seu negócio com automação inteligente
            </h2>
            <p className="mb-6 text-pretty text-sm text-muted-foreground sm:mb-8 sm:text-base md:text-lg">
              Nossas soluções são projetadas para gerar resultados mensuráveis, permitindo que sua empresa alcance novos
              patamares de eficiência e crescimento.
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              <Link href="/orcamento">Solicitar Orçamento</Link>
            </Button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 transition-all hover:border-primary/50 sm:gap-4 sm:p-4"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground sm:h-6 sm:w-6">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <p className="text-sm text-foreground sm:text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
