import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { RevealSection } from "@/components/reveal-section"

const featuredRooms = [
  {
    id: 1,
    name: "Suíte Premium",
    description: "Quarto espaçoso com vista para o mar e café da manhã incluso",
    price: 299,
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Quarto Deluxe",
    description: "Conforto e elegância com varanda privativa",
    price: 199,
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Quarto Família",
    description: "Espaço ideal para famílias, com área de lazer",
    price: 349,
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.8,
  },
]

export function FeaturedRoomsSection() {
  return (
    <RevealSection id="rooms" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quartos em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos quartos mais populares e reserve o seu favorito
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{room.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{room.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg">
                     {room.price} MT
                     
                    <span className="text-sm font-normal text-muted-foreground"> /noite</span>
                  </p>
                  <Button size="sm" asChild>
                    <Link href={`/rooms/${room.id}`}>Ver Detalhes</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <Link href="/rooms">Ver Todos os Quartos</Link>
          </Button>
        </div>
      </div>
    </RevealSection>
  )
}
