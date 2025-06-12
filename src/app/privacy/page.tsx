import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight">Política de Privacidade</h1>
          <p className="text-muted-foreground mt-2">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Introdução</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                O AlugaRooms está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como
                coletamos, usamos, divulgamos e protegemos suas informações quando você usa nossos serviços.
              </p>
              <p>
                Ao usar nossos serviços, você concorda com a coleta e uso de informações de acordo com esta política.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Informações que Coletamos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h4>2.1 Informações Pessoais</h4>
              <p>Coletamos informações que você nos fornece diretamente, incluindo:</p>
              <ul>
                <li>Nome completo</li>
                <li>Endereço de email</li>
                <li>Número de telefone</li>
                <li>Informações de pagamento</li>
                <li>Endereço residencial</li>
                <li>Data de nascimento</li>
                <li>Documento de identidade (quando necessário)</li>
              </ul>

              <h4>2.2 Informações de Uso</h4>
              <p>Coletamos automaticamente informações sobre como você usa nossos serviços:</p>
              <ul>
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas</li>
                <li>Tempo gasto no site</li>
                <li>Referências de sites</li>
                <li>Localização geográfica aproximada</li>
              </ul>

              <h4>2.3 Cookies e Tecnologias Similares</h4>
              <p>
                Usamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do site e
                personalizar conteúdo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Como Usamos suas Informações</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Usamos suas informações para:</p>
              <ul>
                <li>Processar e gerenciar suas reservas</li>
                <li>Processar pagamentos e prevenir fraudes</li>
                <li>Fornecer suporte ao cliente</li>
                <li>Enviar confirmações e atualizações de reservas</li>
                <li>Melhorar nossos serviços</li>
                <li>Personalizar sua experiência</li>
                <li>Enviar comunicações de marketing (com seu consentimento)</li>
                <li>Cumprir obrigações legais</li>
                <li>Resolver disputas</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Compartilhamento de Informações</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Podemos compartilhar suas informações com:</p>

              <h4>4.1 Proprietários de Acomodações</h4>
              <p>
                Compartilhamos informações necessárias para completar sua reserva, incluindo nome, dados de contato e
                detalhes da reserva.
              </p>

              <h4>4.2 Prestadores de Serviços</h4>
              <p>
                Terceiros que nos ajudam a operar nossos serviços, como processadores de pagamento, provedores de email
                e serviços de análise.
              </p>

              <h4>4.3 Requisitos Legais</h4>
              <p>Quando exigido por lei ou para proteger nossos direitos, propriedade ou segurança.</p>

              <h4>4.4 Transferências Comerciais</h4>
              <p>Em caso de fusão, aquisição ou venda de ativos, suas informações podem ser transferidas.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Segurança dos Dados</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais,
                incluindo:
              </p>
              <ul>
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento regular de segurança</li>
                <li>Treinamento de funcionários sobre privacidade</li>
                <li>Auditorias de segurança regulares</li>
              </ul>
              <p>
                No entanto, nenhum método de transmissão pela internet é 100% seguro, e não podemos garantir segurança
                absoluta.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Seus Direitos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Você tem os seguintes direitos em relação às suas informações pessoais:</p>
              <ul>
                <li>
                  <strong>Acesso:</strong> Solicitar uma cópia das informações que temos sobre você
                </li>
                <li>
                  <strong>Retificação:</strong> Corrigir informações imprecisas ou incompletas
                </li>
                <li>
                  <strong>Exclusão:</strong> Solicitar a exclusão de suas informações pessoais
                </li>
                <li>
                  <strong>Portabilidade:</strong> Receber suas informações em formato estruturado
                </li>
                <li>
                  <strong>Oposição:</strong> Opor-se ao processamento de suas informações
                </li>
                <li>
                  <strong>Limitação:</strong> Solicitar a limitação do processamento
                </li>
              </ul>
              <p>Para exercer esses direitos, entre em contato conosco através dos canais fornecidos nesta política.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Retenção de Dados</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Mantemos suas informações pessoais pelo tempo necessário para:</p>
              <ul>
                <li>Fornecer nossos serviços</li>
                <li>Cumprir obrigações legais</li>
                <li>Resolver disputas</li>
                <li>Fazer cumprir nossos acordos</li>
              </ul>
              <p>Quando não precisarmos mais de suas informações, as excluiremos ou anonimizaremos de forma segura.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Transferências Internacionais</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Suas informações podem ser transferidas e processadas em países diferentes do seu país de residência.
                Garantimos que essas transferências sejam feitas com proteções adequadas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Menores de Idade</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações
                pessoais de menores. Se descobrirmos que coletamos informações de um menor, tomaremos medidas para
                excluí-las.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Alterações nesta Política</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações
                significativas por email ou através de um aviso em nosso site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contato</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em
                contato conosco:
              </p>
              <ul>
                <li>Email: privacidade@alugarooms.com</li>
                <li>Telefone: +258 865010307</li>
                <li>Endereço: Av. Malhangalene, Maputo</li>
              </ul>
              <p>Nosso Encarregado de Proteção de Dados pode ser contatado em: dpo@alugarooms.com</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/">Voltar ao início</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
