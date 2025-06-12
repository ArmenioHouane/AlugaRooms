'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/landing/header"
import { useRouter } from "next/navigation";


export default function TermsPage() {
     const router = useRouter();

  return (
    <>
    <Header /> 
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="mb-8 ">
           <Button variant="ghost" className="mb-4" onClick={() => router.back()}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      Voltar
    </Button>
          <h1 className="text-4xl font-bold tracking-tight">Termos e Condições</h1>
          <p className="text-muted-foreground mt-2">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Aceitação dos Termos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Ao acessar e usar o AlugaRooms, você concorda em cumprir e estar vinculado a estes Termos e Condições de
                Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Descrição do Serviço</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                O AlugaRooms é uma plataforma online que permite aos usuários pesquisar, comparar e reservar
                acomodações. Atuamos como intermediários entre hóspedes e proprietários de acomodações.
              </p>
              <ul>
                <li>Facilitamos reservas de quartos e acomodações</li>
                <li>Processamos pagamentos de forma segura</li>
                <li>Fornecemos suporte ao cliente</li>
                <li>Mantemos um sistema de avaliações e comentários</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Cadastro e Conta do Usuário</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Para usar nossos serviços, você deve criar uma conta fornecendo informações precisas e atualizadas. Você
                é responsável por:
              </p>
              <ul>
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades que ocorrem em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                <li>Fornecer informações verdadeiras e atualizadas</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Reservas e Pagamentos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h4>4.1 Processo de Reserva</h4>
              <p>
                Ao fazer uma reserva, você está fazendo uma oferta para reservar a acomodação nas datas especificadas. A
                reserva só é confirmada após o pagamento ser processado com sucesso.
              </p>

              <h4>4.2 Preços e Taxas</h4>
              <ul>
                <li>Todos os preços são exibidos em Meticais(MT/MZN)</li>
                <li>Os preços podem incluir taxas de serviço e impostos</li>
                <li>Preços estão sujeitos a alterações até a confirmação da reserva</li>
              </ul>

              <h4>4.3 Métodos de Pagamento</h4>
              <p>
                Aceitamos cartões de crédito, débito e outros métodos de pagamento especificados no momento da reserva.
                O pagamento é processado de forma segura através de nossos parceiros de pagamento.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Política de Cancelamento</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h4>5.1 Cancelamento pelo Hóspede</h4>
              <ul>
                <li>Cancelamento gratuito até 48 horas antes do check-in</li>
                <li>Cancelamentos após esse período estão sujeitos a taxas</li>
                <li>No-show resulta em cobrança total da reserva</li>
              </ul>

              <h4>5.2 Cancelamento pela Acomodação</h4>
              <p>
                Em casos raros, uma acomodação pode cancelar uma reserva. Nestes casos, oferecemos reembolso total e
                assistência para encontrar acomodação alternativa.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Responsabilidades do Usuário</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Ao usar nossos serviços, você concorda em:</p>
              <ul>
                <li>Usar o serviço apenas para fins legais</li>
                <li>Não violar direitos de propriedade intelectual</li>
                <li>Não transmitir conteúdo ofensivo ou ilegal</li>
                <li>Respeitar as regras da acomodação</li>
                <li>Tratar a propriedade com cuidado e respeito</li>
                <li>Seguir as leis locais durante sua estadia</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Limitação de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>O AlugaRooms atua como intermediário e não é responsável por:</p>
              <ul>
                <li>Qualidade, segurança ou legalidade das acomodações</li>
                <li>Veracidade das informações fornecidas pelos proprietários</li>
                <li>Ações ou omissões dos proprietários ou hóspedes</li>
                <li>Danos indiretos ou consequenciais</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Propriedade Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Todo o conteúdo do site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade do
                AlugaRooms ou de seus licenciadores e está protegido por leis de direitos autorais.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Modificações dos Termos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
                imediatamente após a publicação no site. O uso continuado do serviço após as alterações constitui
                aceitação dos novos termos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Lei Aplicável</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                Estes termos são regidos pelas leis moçambicanas. Qualquer disputa será resolvida nos tribunais
                competentes de Moçambique.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contato</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>Se você tiver dúvidas sobre estes Termos e Condições, entre em contato conosco:</p>
              <ul>
                <li>Email: legal@alugarooms.com</li>
                <li>Telefone: +258 865010307</li>
                <li>Endereço: Av. Malhangalene, 1104 - Maputo</li>
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
