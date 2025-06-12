import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/landing/header"

export default function CookiesPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight">Política de Cookies</h1>
          <p className="text-muted-foreground mt-2">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>O que são Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou
                celular) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de
                forma mais eficiente, bem como para fornecer informações aos proprietários do site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Como Usamos Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                O AlugaRooms usa cookies para melhorar sua experiência de navegação e fornecer funcionalidades
                personalizadas. Usamos cookies para:
              </p>
              <ul>
                <li>Manter você logado durante sua sessão</li>
                <li>Lembrar suas preferências e configurações</li>
                <li>Analisar como nosso site é usado</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Melhorar a segurança do site</li>
                <li>Fornecer funcionalidades de redes sociais</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tipos de Cookies que Usamos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h4>1. Cookies Essenciais</h4>
              <p>
                Estes cookies são necessários para o funcionamento básico do site. Eles permitem que você navegue pelo
                site e use suas funcionalidades essenciais.
              </p>
              <ul>
                <li>Cookies de sessão para manter você logado</li>
                <li>Cookies de segurança para proteger contra ataques</li>
                <li>Cookies de funcionalidade para lembrar suas escolhas</li>
              </ul>

              <h4>2. Cookies de Performance</h4>
              <p>
                Estes cookies coletam informações sobre como você usa nosso site, como quais páginas você visita com
                mais frequência.
              </p>
              <ul>
                <li>Google Analytics para análise de tráfego</li>
                <li>Cookies de monitoramento de performance</li>
                <li>Cookies de teste A/B</li>
              </ul>

              <h4>3. Cookies de Funcionalidade</h4>
              <p>
                Estes cookies permitem que o site lembre de escolhas que você faz e forneça funcionalidades aprimoradas
                e personalizadas.
              </p>
              <ul>
                <li>Preferências de idioma</li>
                <li>Configurações de tema (claro/escuro)</li>
                <li>Localização geográfica</li>
              </ul>

              <h4>4. Cookies de Marketing</h4>
              <p>
                Estes cookies são usados para rastrear visitantes em sites. A intenção é exibir anúncios relevantes e
                envolventes.
              </p>
              <ul>
                <li>Cookies de remarketing</li>
                <li>Cookies de redes sociais</li>
                <li>Cookies de publicidade direcionada</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies de Terceiros</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Além dos nossos próprios cookies, também usamos cookies de terceiros para relatórios de uso do site e
                anúncios:
              </p>

              <h4>Google Analytics</h4>
              <p>
                Usamos o Google Analytics para analisar o uso do nosso site. Este serviço gera estatísticas detalhadas
                sobre visitantes do site.
              </p>

              <h4>Redes Sociais</h4>
              <p>
                Nosso site inclui plugins de redes sociais (Facebook, Instagram, Twitter) que podem definir cookies
                quando você interage com eles.
              </p>

              <h4>Processadores de Pagamento</h4>
              <p>
                Quando você faz uma reserva, nossos processadores de pagamento podem definir cookies para processar
                transações com segurança.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h4>Configurações do Navegador</h4>
              <p>
                Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já
                estão no seu computador e pode configurar a maioria dos navegadores para impedir que sejam colocados.
              </p>

              <h4>Como Desabilitar Cookies</h4>
              <ul>
                <li>
                  <strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies
                </li>
                <li>
                  <strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies
                </li>
                <li>
                  <strong>Safari:</strong> Preferências → Privacidade → Cookies
                </li>
                <li>
                  <strong>Edge:</strong> Configurações → Cookies e permissões do site
                </li>
              </ul>

              <h4>Consequências de Desabilitar Cookies</h4>
              <p>
                Se você desabilitar cookies, algumas funcionalidades do nosso site podem não funcionar corretamente:
              </p>
              <ul>
                <li>Você pode precisar fazer login novamente a cada visita</li>
                <li>Suas preferências podem não ser salvas</li>
                <li>Algumas funcionalidades personalizadas podem não estar disponíveis</li>
                <li>A experiência geral do usuário pode ser prejudicada</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies e Dispositivos Móveis</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Em dispositivos móveis, você pode gerenciar cookies através das configurações do seu navegador móvel.
                Alguns dispositivos também oferecem configurações de privacidade em nível do sistema.
              </p>

              <h4>Identificadores de Publicidade Móvel</h4>
              <p>
                Em aplicativos móveis, podemos usar identificadores de publicidade móvel em vez de cookies tradicionais.
                Você pode redefinir ou desabilitar esses identificadores nas configurações do seu dispositivo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Atualizações desta Política</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossos serviços ou
                requisitos legais. Recomendamos que você revise esta página regularmente.
              </p>
              <p>
                Quando fizermos alterações significativas, notificaremos você através de um banner no site ou por email.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mais Informações</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Para mais informações sobre cookies e como eles são usados, você pode visitar:</p>
              <ul>
                <li>
                  <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
                    All About Cookies
                  </a>
                </li>
                <li>
                  <a href="https://cookiepedia.co.uk" target="_blank" rel="noopener noreferrer">
                    Cookiepedia
                  </a>
                </li>
                <li>
                  <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">
                    Your Online Choices
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contato</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco:</p>
              <ul>
                <li>Email: cookies@alugarooms.com</li>
                <li>Telefone: +258 86501307</li>
                <li>Endereço: Av. Malhangalene - Maputo</li>
              </ul>
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
    </>
  )
}
