import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"

const testimonials = [
  {
    id: 1,
    name: "Ana Bila",
    comment: "Excelente serviço! Os quartos são exatamente como nas fotos e o atendimento é impecável.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Carlos Duvane",
    comment: "Reservei para minha família e foi uma experiência incrível. Certamente voltaremos!",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Juliana Costa da Silva",
    comment: "Ótima relação custo-benefício. Quartos limpos e confortáveis.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
  return (
    <RevealSection id="testimonials" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiências reais de hóspedes que escolheram o AlugaRooms
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic text-muted-foreground">&quot;{testimonial.comment}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
