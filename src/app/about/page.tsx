import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Award, Users, MapPin, Heart } from "lucide-react"
import { Header } from "@/components/landing/header"

export default function AboutPage() {
 
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Hospitalidade",
      description: "Tratamos cada hóspede como família, oferecendo um atendimento caloroso e personalizado.",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Qualidade",
      description: "Mantemos os mais altos padrões de qualidade em todas as nossas acomodações e serviços.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Comunidade",
      description: "Construímos uma comunidade de viajantes e anfitriões que compartilham experiências únicas.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Localização",
      description: "Oferecemos acomodações em localizações privilegiadas para maximizar sua experiência.",
    },
  ]

  return (
  <>
    <Header />
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 bg-blue-300 dark:text-black">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight">Sobre o AlugaRooms</h1>
          <p className="text-muted-foreground mt-2">
            Conheça nossa história, missão e a equipe por trás do AlugaRooms.
          </p>
        </div>

        <div className="space-y-12">
          {/* Hero Section */}
          <section className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O AlugaRooms nasceu em 2020 com uma missão simples: tornar as viagens mais acessíveis, confortáveis e
                  memoráveis para todos. Fundado por uma equipe apaixonada por hospitalidade e tecnologia, começamos
                  como uma pequena startup com grandes sonhos.
                </p>
                <p>
                  Hoje, somos uma das principais plataformas de reservas de acomodações em Maputo, conectando milhares
                  de viajantes a experiências únicas em todo o país. Nossa jornada é marcada pela inovação constante e
                  pelo compromisso inabalável com a satisfação de nossos clientes.
                </p>
                <p>
                  Acreditamos que cada viagem é uma oportunidade de criar memórias inesquecíveis, e estamos aqui para
                  garantir que sua estadia seja perfeita do início ao fim.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Equipe AlugaRooms"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Democratizar o acesso a acomodações de qualidade, oferecendo uma plataforma intuitiva e confiável que
                  conecta viajantes a experiências excepcionais, promovendo o turismo sustentável e o desenvolvimento
                  das comunidades locais.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser a principal plataforma de reservas de acomodações de Moçambique, reconhecida pela excelência
                  no atendimento, inovação tecnológica e compromisso com a sustentabilidade, transformando a forma como
                  as pessoas viajam e se hospedam.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Values */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam nossas decisões e moldam nossa cultura organizacional.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

         
          {/* Stats */}
          <section className="bg-muted/50 rounded-lg p-8 mt-7">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">AlugaRooms em Números</h2>
              <p className="text-muted-foreground">Alguns números que mostram nosso crescimento e impacto.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Reservas Realizadas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">120+</div>
                <div className="text-muted-foreground">Acomodações Cadastradas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2500+</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.4</div>
                <div className="text-muted-foreground">Avaliação Média</div>
              </div>
            </div>
          </section>

          {/* Awards */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Reconhecimentos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Prêmios e certificações que reconhecem nosso compromisso com a excelência.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Certificação ISO 27001</h3>
                  <p className="text-sm text-muted-foreground">Segurança da Informação</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Top 10 Apps de Viagem</h3>
                  <p className="text-sm text-muted-foreground">Revista Viagem & Turismo 2023</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-primary text-primary-foreground rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Junte-se à Nossa Jornada</h2>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Faça parte da comunidade AlugaRooms e descubra experiências incríveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Criar Conta</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href="/contact">Entre em Contato</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
      </>
  )
}
