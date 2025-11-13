import { Bot, Workflow, Database, Code, LineChart, MessageSquare } from "lucide-react"

export function ServicesSection() {
    const services = [
        {
            icon: Bot,
            title: "Automação com IA",
            description:
                "Implementamos soluções de inteligência artificial para automatizar processos complexos e aumentar a eficiência operacional.",
        },
        {
            icon: Workflow,
            title: "Otimização de Workflows",
            description: "Analisamos e redesenhamos seus processos empresariais para máxima eficiência e produtividade.",
        },
        {
            icon: Database,
            title: "Integração de Sistemas",
            description:
                "Conectamos suas ferramentas existentes (n8n, Make, Zapier) para criar workflows automatizados perfeitos.",
        },
        {
            icon: Code,
            title: "Desenvolvimento Custom",
            description: "Criamos soluções sob medida que atendem exatamente às necessidades específicas do seu negócio.",
        },
        {
            icon: LineChart,
            title: "Análise de Dados",
            description: "Transformamos dados em insights acionáveis para tomada de decisões estratégicas.",
        },
        {
            icon: MessageSquare,
            title: "Consultoria Especializada",
            description: "Nossa equipe experiente orienta você na implementação das melhores práticas de automação.",
        },
    ]

    return (
        <section id="servicos" className="py-12 sm:py-16 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                    <div className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent sm:mb-4 sm:px-4 sm:text-sm">
                        Serviços de Consultoria
                    </div>
                    <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
                        Soluções Personalizadas para seu Negócio
                    </h2>
                    <p className="text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
                        Nossa equipe de especialistas trabalha lado a lado com você para implementar automações e otimizar processos
                        com as tecnologias mais avançadas do mercado.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg sm:p-8"
                            >
                                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground sm:mb-4">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg md:text-xl">{service.title}</h3>
                                <p className="text-xs text-muted-foreground sm:text-sm md:text-base">{service.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
