import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Como funciona o HiBy3 WorkFlow?",
      answer:
        "O HiBy3 WorkFlow é um sistema SaaS de gestão de tempo e produtividade. Após o cadastro, você pode adicionar sua equipe, criar projetos e começar a rastrear o tempo gasto em cada atividade. O sistema gera relatórios detalhados para ajudar na tomada de decisões.",
    },
    {
      question: "Qual a diferença entre o produto SaaS e os serviços de consultoria?",
      answer:
        "O HiBy3 WorkFlow é nosso produto pronto para uso, ideal para gestão de tempo. Os serviços de consultoria são personalizados para implementar automações complexas, integrar sistemas existentes e desenvolver soluções sob medida para necessidades específicas do seu negócio.",
    },
    {
      question: "Vocês oferecem período de teste?",
      answer:
        "Sim! Oferecemos um período de teste gratuito de 14 dias para o HiBy3 WorkFlow, sem necessidade de cartão de crédito. Para serviços de consultoria, podemos agendar uma sessão de diagnóstico gratuita.",
    },
    {
      question: "Quais ferramentas vocês utilizam nas automações?",
      answer:
        "Trabalhamos com as principais plataformas do mercado, incluindo n8n, Make (Integromat), Zapier, além de desenvolvimento custom quando necessário. Escolhemos a melhor ferramenta para cada caso.",
    },
    {
      question: "Como funciona o suporte?",
      answer:
        "Oferecemos suporte técnico via chat, email e telefone durante horário comercial. Para clientes enterprise, disponibilizamos suporte prioritário 24/7 e gerente de conta dedicado.",
    },
    {
      question: "Quanto tempo leva para implementar uma solução?",
      answer:
        "Para o HiBy3 WorkFlow, você pode começar a usar imediatamente após o cadastro. Projetos de consultoria variam de 2 a 12 semanas, dependendo da complexidade e escopo do projeto.",
    },
  ]

  return (
    <section className="border-t border-border/40 bg-secondary/20 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
              Perguntas Frequentes
            </h2>
            <p className="text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
              Tire suas dúvidas sobre nossos produtos e serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm font-semibold sm:text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground sm:text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
