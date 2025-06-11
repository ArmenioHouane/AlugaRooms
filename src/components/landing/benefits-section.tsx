import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Calendar, Clock } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"

const benefits = [
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Reservas Instantâneas",
    description: "Confirme sua reserva em segundos, sem complicações",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Atendimento 24/7",
    description: "Suporte ao cliente disponível a qualquer momento",
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Flexibilidade",
    description: "Altere ou cancele suas reservas facilmente",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Processo Simplificado",
    description: "Check-in e check-out rápidos e eficientes",
  },
]

export function BenefitsSection() {
  return (
    <RevealSection id="benefits" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Por que escolher AlugaRooms?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma experiência completa para tornar sua estadia inesquecível
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
