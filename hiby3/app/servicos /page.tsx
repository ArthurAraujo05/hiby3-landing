import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Bot, Database, Code, MessageSquare, Zap, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const mainServices = [
    {
      id: "consultoria",
      icon: MessageSquare,
      title: "Consultoria em Automação",
      description:
        "Nossa equipe de especialistas analisa seus processos atuais, identifica gargalos e oportunidades de automação, e desenha uma estratégia customizada para transformar sua operação.",
      benefits: [
        "Análise completa dos processos atuais",
        "Mapeamento de oportunidades de automação",
        "Roadmap estratégico de implementação",
        "ROI projetado e KPIs de sucesso",
        "Acompanhamento pós-implementação",
      ],
    },
    {
      id: "automacao",
      icon: Bot,
      title: "Automação com IA",
      description:
        "Implementamos soluções de inteligência artificial e automação que eliminam tarefas manuais repetitivas, aumentam a precisão operacional e liberam sua equipe para focar no que realmente importa.",
      benefits: [
        "Automação de processos repetitivos",
        "Implementação de IA para decisões inteligentes",
        "Redução de 70-90% em tarefas manuais",
        "Integração com ferramentas existentes",
        "Monitoramento e otimização contínua",
      ],
    },
    {
      id: "integracao",
      icon: Database,
      title: "Integração de Sistemas",
      description:
        "Conectamos todos os seus sistemas legados (ERP, CRM, Contabilidade) através de soluções modernas como n8n, Make e APIs customizadas, criando um ecossistema integrado e eficiente.",
      benefits: [
        "Integração com ERP, CRM e sistemas legados",
        "Desenvolvimento de APIs RESTful customizadas",
        "Sincronização em tempo real de dados",
        "Eliminação de importação/exportação manual",
        "Fluxo de dados bidirecional seguro",
      ],
    },
    {
      id: "desenvolvimento",
      icon: Code,
      title: "Desenvolvimento Customizado",
      description:
        "Criamos soluções sob medida (Ad Hoc) que atendem exatamente às necessidades específicas do seu negócio. Não acreditamos em software 'de prateleira' quando você precisa de algo único.",
      benefits: [
        "Desenvolvimento 100% personalizado",
        "Stack tecnológica moderna (React, Node.js, Python)",
        "Arquitetura escalável e segura",
        "Código documentado e transferível",
        "Suporte e manutenção incluídos",
      ],
    },
  ]

  const technologies = [
    { name: "n8n", description: "Automação de workflows" },
    { name: "Make", description: "Integração visual" },
    { name: "Python", description: "IA e processamento de dados" },
    { name: "React/Next.js", description: "Aplicações web modernas" },
    { name: "Node.js", description: "APIs e backends" },
    { name: "OpenAI", description: "Inteligência artificial" },
  ]

  const caseStudies = [
    {
      title: "Fechamento de Folha Automatizado",
      description:
        "Redução de 15 dias para 2 horas no processo de fechamento de folha através de integração ERP + Ponto + Contabilidade.",
      results: ["95% de redução de tempo", "Zero erros manuais", "ROI em 3 meses"],
    },
    {
      title: "Gestão de Documentos com IA",
      description:
        "Sistema de classificação automática de documentos fiscais usando IA, com integração direta no sistema de contabilidade.",
      results: ["80% de automação", "Classificação em segundos", "Auditoria completa"],
    },
    {
      title: "Portal de Autoatendimento RH",
      description:
        "Desenvolvimento de portal customizado para colaboradores com integração total ao sistema de ponto e folha.",
      results: ["70% menos chamados ao RH", "Satisfação de 95%", "Disponível 24/7"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-secondary/20 py-16 sm:py-20 md:py-28 lg:py-36">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent sm:mb-6">
              Serviços de Consultoria
            </div>
            <h1 className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Automação e Inteligência para seu Negócio
            </h1>
            <p className="mb-8 text-pretty text-base text-muted-foreground sm:mb-10 sm:text-lg md:text-xl">
              Transformamos processos complexos em workflows automatizados e eficientes. Consultoria especializada em
              automação, IA e integração de sistemas.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="https://calendly.com/hiby3solution/demonstracao-rh-automacao" target="_blank">
                  Agendar Consultoria <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="#consultoria">Conhecer Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20 md:space-y-28">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <div
                    className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mb-6 text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
                        {service.description}
                      </p>
                      <Button asChild>
                        <Link href="https://calendly.com/hiby3solution/demonstracao-rh-automacao" target="_blank">
                          Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                        <h3 className="mb-4 text-lg font-semibold">O que está incluído:</h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="border-y border-border/40 bg-secondary/20 py-16 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Tecnologias que Usamos
            </h2>
            <p className="text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
              Stack moderno e comprovado para entregar soluções robustas e escaláveis.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Sucesso */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Casos de Sucesso
            </h2>
            <p className="text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
              Veja como ajudamos empresas a transformar suas operações.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 sm:p-8">
                <h3 className="mb-3 text-lg font-semibold sm:mb-4">{study.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground sm:mb-6">{study.description}</p>
                <div className="space-y-2 border-t border-border pt-4">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="border-t border-border/40 bg-secondary/20 py-16 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Como Trabalhamos
            </h2>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Diagnóstico",
                description: "Análise dos processos atuais e identificação de oportunidades",
              },
              {
                step: "2",
                title: "Proposta",
                description: "Apresentação da solução customizada com cronograma e investimento",
              },
              {
                step: "3",
                title: "Implementação",
                description: "Desenvolvimento e integração da solução com acompanhamento constante",
              },
              {
                step: "4",
                title: "Suporte",
                description: "Monitoramento, otimização contínua e suporte técnico dedicado",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                  {phase.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="border-t border-border/40 bg-gradient-to-b from-background to-secondary/20 py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl">
              Vamos Automatizar seu Negócio?
            </h2>
            <p className="mb-8 text-pretty text-sm text-muted-foreground sm:mb-10 sm:text-base md:text-lg">
              Agende uma consultoria gratuita e descubra como podemos transformar suas operações com automação e IA.
            </p>
            <Button size="lg" asChild>
              <Link href="https://calendly.com/hiby3solution/demonstracao-rh-automacao" target="_blank">
                Agendar Consultoria Gratuita <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
