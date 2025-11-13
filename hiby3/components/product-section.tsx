import { Clock, Users, BarChart3, Shield, Zap, Globe } from "lucide-react"

export function ProductSection() {
    const features = [
        {
            icon: Clock,
            title: "Gestão de Tempo Inteligente",
            description: "Rastreie e otimize o tempo da sua equipe com precisão",
        },
        {
            icon: Users,
            title: "Multi-tenant",
            description: "Suporte para múltiplas empresas e equipes",
        },
        {
            icon: BarChart3,
            title: "Relatórios Avançados",
            description: "Insights detalhados sobre produtividade e performance",
        },
        {
            icon: Shield,
            title: "Segurança Enterprise",
            description: "Proteção de dados com padrões de segurança corporativos",
        },
        {
            icon: Zap,
            title: "Automação de Tarefas",
            description: "Automatize processos repetitivos e economize tempo",
        },
        {
            icon: Globe,
            title: "Acesso Cloud",
            description: "Trabalhe de qualquer lugar, a qualquer momento",
        },
    ]

    return (
        <section id="produto" className="border-t border-border/40 bg-secondary/20 py-12 sm:py-16 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                    <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:mb-4 sm:px-4 sm:text-sm">
                        Produto SaaS
                    </div>
                    <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
                        HiBy3 WorkFlow
                    </h2>
                    <p className="text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
                        Sistema completo de gestão de tempo e produtividade para equipes modernas. Controle projetos, acompanhe
                        horas e maximize a eficiência operacional.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={index}
                                className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg sm:p-6"
                            >
                                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:mb-4">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="mb-2 text-base font-semibold sm:text-lg">{feature.title}</h3>
                                <p className="text-xs text-muted-foreground sm:text-sm">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
