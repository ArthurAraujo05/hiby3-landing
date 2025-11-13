import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Clock, Users, BarChart3, Shield, Zap, Globe, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WorkflowPage() {
  const features = [
    {
      icon: Clock,
      title: "Gestão de Ponto Eletrônico",
      description: "Controle de jornada com validação automática de regras por cliente (Multi-Tenant).",
    },
    {
      icon: Users,
      title: "Workflows de Aprovação",
      description: "Sistema completo de edição e aprovação de horas com rastreio de auditoria.",
    },
    {
      icon: BarChart3,
      title: "Relatórios Avançados",
      description: "Dashboards em tempo real com insights sobre produtividade e custos.",
    },
    {
      icon: Shield,
      title: "Compliance Garantido",
      description: "Validação automática de regras trabalhistas e conformidade com LGPD.",
    },
    {
      icon: Zap,
      title: "Integração com ERP",
      description: "Conecte diretamente com seu sistema de folha de pagamento via API.",
    },
    {
      icon: Globe,
      title: "Isolamento de Dados",
      description: "Arquitetura Multi-Tenant com segurança máxima entre clientes.",
    },
  ]

  const plans = [
    {
      name: "Starter",
      price: "R$ 499",
      period: "/mês",
      description: "Ideal para pequenas empresas",
      features: [
        "Até 50 colaboradores",
        "Gestão básica de ponto",
        "Relatórios essenciais",
        "Suporte por email",
        "1 tenant incluído",
      ],
    },
    {
      name: "Professional",
      price: "R$ 999",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "Até 200 colaboradores",
        "Workflows de aprovação",
        "Relatórios avançados",
        "Suporte prioritário",
        "Até 5 tenants",
        "Integração via API",
        "Auditoria completa",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Solução sob medida",
      features: [
        "Colaboradores ilimitados",
        "Tenants ilimitados",
        "Customização completa",
        "Suporte 24/7",
        "SLA garantido",
        "Treinamento dedicado",
        "Infraestrutura dedicada",
      ],
    },
  ]

  const benefits = [
    "Redução de 80% no tempo de fechamento de folha",
    "Eliminação total de erros manuais no cálculo de horas",
    "Conformidade automática com legislação trabalhista",
    "Auditoria completa de todas as alterações",
    "Isolamento e segurança de dados por cliente",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-secondary/20 py-16 sm:py-20 md:py-28 lg:py-36">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary sm:mb-6">
              Produto SaaS
            </div>
            <h1 className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              HiBy3 WorkFlow
            </h1>
            <p className="mb-8 text-pretty text-base text-muted-foreground sm:mb-10 sm:text-lg md:text-xl">
              O sistema de gestão de ponto eletrônico mais completo do mercado. Multi-Tenant, seguro e com compliance
              garantido para seu RH.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="https://calendly.com/hiby3solution-demonstracao-rh-automacao/demonstracao" target="_blank">
                  Agendar Demonstração <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="#precos">Ver Preços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl">
              Funcionalidades Completas
            </h2>
            <p className="text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
              Tudo que seu RH precisa para gerenciar ponto eletrônico com segurança, compliance e eficiência.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="border-y border-border/40 bg-secondary/20 py-16 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-12 text-balance text-2xl font-bold tracking-tight sm:mb-16 sm:text-3xl md:text-4xl">
              Resultados Comprovados
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6" />
                  <p className="text-sm text-muted-foreground sm:text-base md:text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl">
              Planos Flexíveis
            </h2>
            <p className="text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
              Escolha o plano ideal para o tamanho da sua empresa. Todos incluem suporte técnico especializado.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg border p-6 sm:p-8 ${plan.featured ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-card"
                  }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Mais Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold sm:text-4xl">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.featured ? "default" : "outline"} asChild>
                  <Link href="https://calendly.com/hiby3solution/demonstracao-rh-automacao" target="_blank">
                    Contratar Agora
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="border-t border-border/40 bg-gradient-to-b from-secondary/20 to-background py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl">
              Pronto para Transformar seu RH?
            </h2>
            <p className="mb-8 text-pretty text-sm text-muted-foreground sm:mb-10 sm:text-base md:text-lg">
              Agende uma demonstração personalizada e veja como o HiBy3 WorkFlow pode otimizar sua gestão de ponto.
            </p>
            <Button size="lg" asChild>
              <Link href="https://calendly.com/hiby3solution-demonstracao-rh-automacao/demonstracao" target="_blank">
                Agendar Demonstração Gratuita <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
