import { Star } from "lucide-react"

export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Carlos Silva",
            role: "CEO, TechCorp",
            content:
                "A HiBy3 transformou completamente nossos processos. Economizamos mais de 30 horas por semana em tarefas manuais e nossa produtividade aumentou significativamente.",
            rating: 5,
        },
        {
            name: "Mariana Costa",
            role: "Diretora de Operações, LogiFlow",
            content:
                "O HiBy3 WorkFlow é intuitivo e poderoso. A consultoria da equipe foi fundamental para implementarmos automações que realmente fazem diferença no dia a dia.",
            rating: 5,
        },
        {
            name: "Roberto Almeida",
            role: "CTO, DataSmart",
            content:
                "Parceria excepcional! A equipe HiBy3 entende profundamente de automação e IA. Os resultados superaram nossas expectativas em todos os aspectos.",
            rating: 5,
        },
    ]

    return (
        <section className="py-12 sm:py-16 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                    <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
                        O que nossos clientes dizem
                    </h2>
                    <p className="text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
                        Empresas de diversos setores confiam na HiBy3 para transformar suas operações
                    </p>
                </div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg sm:p-8"
                        >
                            <div className="mb-3 flex gap-1 sm:mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-primary text-primary sm:h-5 sm:w-5" />
                                ))}
                            </div>
                            <p className="mb-4 text-sm text-muted-foreground sm:mb-6 sm:text-base">{testimonial.content}</p>
                            <div className="border-t border-border pt-3 sm:pt-4">
                                <div className="text-sm font-semibold sm:text-base">{testimonial.name}</div>
                                <div className="text-xs text-muted-foreground sm:text-sm">{testimonial.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
