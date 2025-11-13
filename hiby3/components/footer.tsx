import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-3 flex items-center gap-2 sm:mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono text-lg font-bold text-primary-foreground">H3</span>
              </div>
              <span className="text-lg font-semibold sm:text-xl">HiBy3 Solution</span>
            </Link>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Transformando negócios através de automação inteligente e gestão eficiente de workflows.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Produto</h3>
            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
              <li>
                <Link
                  href="/produto/workflow"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  HiBy3 WorkFlow
                </Link>
              </li>
              <li>
                <Link
                  href="/produto/workflow#funcionalidades"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link
                  href="/produto/workflow#precos"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Preços
                </Link>
              </li>
              <li>
                <Link
                  href="https://calendly.com/hiby3solution/demonstracao-rh-automacao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Demonstração
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Serviços</h3>
            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
              <li>
                <Link
                  href="/servicos#consultoria"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Consultoria
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#automacao"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Automação
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#integracao"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Integração
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#desenvolvimento"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Desenvolvimento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Contato</h3>
            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
              <li>
                <Link href="/orcamento" className="text-muted-foreground transition-colors hover:text-foreground">
                  Solicitar Orçamento
                </Link>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="mt-0.5 h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
                <span>agencia@hiby3.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="mt-0.5 h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
                <span>Campinas, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 sm:mt-12 sm:pt-8">
          <p className="text-center text-xs text-muted-foreground sm:text-sm">
            &copy; {new Date().getFullYear()} HiBy3 Solution. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
