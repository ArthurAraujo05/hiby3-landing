export function StatsSection() {
    const stats = [
        { value: "50%", label: "Aumento de produtividade" },
        { value: "30h", label: "Economizadas por mês" },
        { value: "98%", label: "Satisfação dos clientes" },
        { value: "24/7", label: "Suporte disponível" },
    ]

    return (
        <section className="border-b border-border/40 bg-secondary/20 py-12 sm:py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="mb-1 text-3xl font-bold text-primary sm:mb-2 sm:text-4xl md:text-5xl">{stat.value}</div>
                            <div className="text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
