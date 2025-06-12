import { ContactForm } from "@/components/forms/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone, Clock } from "lucide-react"
import { Header } from "@/components/landing/header"


export default function ContactPage() {
  return (
    <>
    <Header />   
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight">Entre em Contato</h1>
          <p className="text-muted-foreground mt-2">
            Estamos aqui para ajudar. Entre em contato conosco através dos canais abaixo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>Preencha o formulário abaixo e entraremos em contato em breve.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>Outras formas de entrar em contato conosco.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contato@alugarooms.com</p>
                    <p className="text-muted-foreground">suporte@alugarooms.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-muted-foreground">+258 865010307</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Endereço</h3>
                    <p className="text-muted-foreground">
                      Av. Malhangalene
                      <br />
                     Maputo
                      <br />
                      Moçambique
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 9h às 15h
                      <br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
                <CardDescription>Antes de entrar em contato, confira se sua dúvida já foi respondida.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Como faço para cancelar uma reserva?</h4>
                    <p className="text-sm text-muted-foreground">
                      Você pode cancelar sua reserva através do seu painel de cliente ou entrando em contato conosco.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Qual é a política de reembolso?</h4>
                    <p className="text-sm text-muted-foreground">
                      Cancelamentos até 48h antes do check-in são gratuitos. Após esse período, podem ser aplicadas
                      taxas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Como posso alterar minha reserva?</h4>
                    <p className="text-sm text-muted-foreground">
                      Alterações podem ser feitas através do seu painel de cliente, sujeitas à disponibilidade.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/#faq">Ver todas as perguntas</Link>
                </Button>
              </CardContent>
            </Card>
  </div>
        </div>
      </div>
    </div>
     </>
  )
}
