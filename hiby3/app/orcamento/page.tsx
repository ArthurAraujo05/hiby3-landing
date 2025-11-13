import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Users, Mail, Phone, MapPin, Briefcase } from "lucide-react"

export default function OrcamentoPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                            Solicite um Orçamento Personalizado
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas com uma proposta
                            customizada para sua empresa.
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                        <form className="space-y-8">
                            {/* Informações da Empresa */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 pb-2 border-b border-border">
                                    <Building2 className="h-5 w-5 text-primary" />
                                    <h2 className="text-xl font-semibold text-foreground">Informações da Empresa</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="empresa">Nome da Empresa *</Label>
                                        <Input id="empresa" placeholder="Ex: Empresa Tecnologia Ltda" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="cnpj">CNPJ *</Label>
                                        <Input id="cnpj" placeholder="00.000.000/0000-00" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="segmento">Segmento de Atuação *</Label>
                                        <Select required>
                                            <SelectTrigger id="segmento">
                                                <SelectValue placeholder="Selecione o segmento" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="tecnologia">Tecnologia</SelectItem>
                                                <SelectItem value="industria">Indústria</SelectItem>
                                                <SelectItem value="comercio">Comércio</SelectItem>
                                                <SelectItem value="servicos">Serviços</SelectItem>
                                                <SelectItem value="saude">Saúde</SelectItem>
                                                <SelectItem value="educacao">Educação</SelectItem>
                                                <SelectItem value="financeiro">Financeiro</SelectItem>
                                                <SelectItem value="outro">Outro</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="funcionarios">Número de Funcionários *</Label>
                                        <Select required>
                                            <SelectTrigger id="funcionarios">
                                                <SelectValue placeholder="Selecione a faixa" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1-10">1 a 10</SelectItem>
                                                <SelectItem value="11-50">11 a 50</SelectItem>
                                                <SelectItem value="51-200">51 a 200</SelectItem>
                                                <SelectItem value="201-500">201 a 500</SelectItem>
                                                <SelectItem value="501+">Mais de 500</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="endereco">Endereço Completo</Label>
                                    <Input id="endereco" placeholder="Rua, número, bairro, cidade, estado" />
                                </div>
                            </div>

                            {/* Informações de Contato */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 pb-2 border-b border-border">
                                    <Users className="h-5 w-5 text-primary" />
                                    <h2 className="text-xl font-semibold text-foreground">Informações de Contato</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="nome-contato">Nome Completo *</Label>
                                        <Input id="nome-contato" placeholder="Seu nome completo" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="cargo">Cargo *</Label>
                                        <Input id="cargo" placeholder="Ex: Gerente de RH" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">E-mail Corporativo *</Label>
                                        <Input id="email" type="email" placeholder="seu.email@empresa.com" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                                        <Input id="telefone" placeholder="(00) 00000-0000" required />
                                    </div>
                                </div>
                            </div>

                            {/* Necessidades e Interesse */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 pb-2 border-b border-border">
                                    <Briefcase className="h-5 w-5 text-primary" />
                                    <h2 className="text-xl font-semibold text-foreground">Sobre o Projeto</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="interesse">O que você busca? *</Label>
                                        <Select required>
                                            <SelectTrigger id="interesse">
                                                <SelectValue placeholder="Selecione a solução" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="workflow">HiBy3 WorkFlow (SaaS)</SelectItem>
                                                <SelectItem value="consultoria">Consultoria em Automação</SelectItem>
                                                <SelectItem value="integracao">Integração de Sistemas</SelectItem>
                                                <SelectItem value="completo">Solução Completa (SaaS + Consultoria)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="urgencia">Prazo Desejado *</Label>
                                        <Select required>
                                            <SelectTrigger id="urgencia">
                                                <SelectValue placeholder="Quando precisa implementar?" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="imediato">Imediato (até 30 dias)</SelectItem>
                                                <SelectItem value="curto">Curto prazo (1-3 meses)</SelectItem>
                                                <SelectItem value="medio">Médio prazo (3-6 meses)</SelectItem>
                                                <SelectItem value="longo">Apenas explorando opções</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="orcamento">Orçamento Estimado</Label>
                                        <Select>
                                            <SelectTrigger id="orcamento">
                                                <SelectValue placeholder="Faixa de investimento" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ate-5k">Até R$ 5.000</SelectItem>
                                                <SelectItem value="5k-15k">R$ 5.000 - R$ 15.000</SelectItem>
                                                <SelectItem value="15k-30k">R$ 15.000 - R$ 30.000</SelectItem>
                                                <SelectItem value="30k-50k">R$ 30.000 - R$ 50.000</SelectItem>
                                                <SelectItem value="50k+">Acima de R$ 50.000</SelectItem>
                                                <SelectItem value="nao-definido">Ainda não definido</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="descricao">Descreva suas necessidades e desafios *</Label>
                                        <Textarea
                                            id="descricao"
                                            placeholder="Conte-nos sobre os principais desafios que sua empresa enfrenta e como podemos ajudar. Seja específico sobre processos que precisam ser otimizados, sistemas que precisam ser integrados, etc."
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="sistemas">Sistemas/ERPs Utilizados (Opcional)</Label>
                                        <Input id="sistemas" placeholder="Ex: SAP, TOTVS, Senior, Protheus, etc." />
                                    </div>
                                </div>
                            </div>

                            {/* Termos e Envio */}
                            <div className="space-y-6 pt-4">
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="termos" className="mt-1" required />
                                    <Label htmlFor="termos" className="text-sm text-muted-foreground cursor-pointer">
                                        Concordo em receber comunicações da HiBy3 Solution e estou ciente de que meus dados serão utilizados
                                        conforme a Política de Privacidade e LGPD.
                                    </Label>
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                                    Enviar Solicitação de Orçamento
                                </Button>

                                <p className="text-center text-sm text-muted-foreground">
                                    Responderemos em até 24 horas úteis com uma proposta personalizada
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Informações Adicionais */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-card border border-border rounded-lg">
                            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                            <p className="text-sm text-muted-foreground">agencia@hiby3.com</p>
                        </div>

                        <div className="text-center p-6 bg-card border border-border rounded-lg">
                            <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                            <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                        </div>

                        <div className="text-center p-6 bg-card border border-border rounded-lg">
                            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-semibold text-foreground mb-2">Localização</h3>
                            <p className="text-sm text-muted-foreground">Campinas, SP</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
