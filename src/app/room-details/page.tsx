"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Users,
  Maximize,
  MapPin,
  Wifi,
  Wind,
  Coffee,
  Car,
  Tv,
  Bath,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"



// Mock data for room details
const roomDetails = {
  id: 1,
  name: "Suíte Premium Ocean View",
  description:
    "Luxuosa suíte com vista panorâmica para o mar, cama king size e varanda privativa. Inclui café da manhã gourmet e acesso exclusivo ao spa do hotel.",
  price: 450,
  originalPrice: 520,
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  rating: 4.9,
  reviewCount: 127,
  type: "suite",
  maxGuests: 2,
  size: 45,
  bedType: "Cama King Size",
  location: "Andar 15 - Vista Mar",
  amenities: [
    { icon: <Wifi className="h-4 w-4" />, name: "Wi-Fi Gratuito" },
    { icon: <Wind className="h-4 w-4" />, name: "Ar Condicionado" },
    { icon: <Coffee className="h-4 w-4" />, name: "Café da Manhã" },
    { icon: <Car className="h-4 w-4" />, name: "Estacionamento" },
    { icon: <Tv className="h-4 w-4" />, name: "TV Smart 55'" },
    { icon: <Bath className="h-4 w-4" />, name: "Banheira de Hidromassagem" },
  ],
  features: [
    "Vista panorâmica para o mar",
    "Varanda privativa com mesa e cadeiras",
    "Minibar premium incluído",
    "Roupões e chinelos de cortesia",
    "Serviço de quarto 24h",
    "Acesso ao spa e piscina",
    "Check-in/out expresso",
    "Concierge personalizado",
  ],
  policies: {
    checkIn: "14:00",
    checkOut: "12:00",
    cancellation: "Cancelamento gratuito até 48h antes",
    pets: "Animais não permitidos",
    smoking: "Quarto para não fumantes",
    children: "Crianças bem-vindas",
  },
  reviews: [
    {
      id: 1,
      name: "Maria Silva",
      rating: 5,
      date: "2024-01-15",
      comment:
        "Quarto incrível com vista espetacular! O atendimento foi excepcional e o café da manhã delicioso. Certamente voltarei.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "João Santos",
      rating: 5,
      date: "2024-01-10",
      comment:
        "Perfeito para lua de mel! O quarto é exatamente como nas fotos, muito limpo e confortável. A vista do pôr do sol é inesquecível.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Ana Costa",
      rating: 4,
      date: "2024-01-05",
      comment:
        "Ótima localização e quarto espaçoso. Apenas o wi-fi poderia ser um pouco mais rápido, mas no geral foi uma experiência excelente.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ],
}

export default function RoomDetailsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % roomDetails.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + roomDetails.images.length) % roomDetails.images.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 max-w-screen-2xl">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/rooms">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar aos Quartos
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? "text-red-500" : ""}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={roomDetails.images[currentImageIndex] || "/placeholder.svg"}
                  alt={roomDetails.name}
                  fill
                  className="object-cover"
                  priority
                />
                <Button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ←
                </Button>
                <Button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  →
                </Button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {roomDetails.images.map((_, index) => (
                    <Button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {roomDetails.images.slice(0, 4).map((image, index) => (
                  <Button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${roomDetails.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </Button>
                ))}
              </div>
            </div>

            {/* Room Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{roomDetails.name}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {roomDetails.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      Até {roomDetails.maxGuests} hóspedes
                    </div>
                    <div className="flex items-center">
                      <Maximize className="h-4 w-4 mr-1" />
                      {roomDetails.size}m²
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="font-semibold">{roomDetails.rating}</span>
                  <span className="text-muted-foreground ml-1">({roomDetails.reviewCount} avaliações)</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{roomDetails.description}</p>

              {/* Tabs */}
              <Tabs defaultValue="amenities" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="amenities">Comodidades</TabsTrigger>
                  <TabsTrigger value="features">Características</TabsTrigger>
                  <TabsTrigger value="policies">Políticas</TabsTrigger>
                  <TabsTrigger value="reviews">Avaliações</TabsTrigger>
                </TabsList>

                <TabsContent value="amenities" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {roomDetails.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                        {amenity.icon}
                        <span className="text-sm">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {roomDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="policies" className="mt-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Check-in:</strong> {roomDetails.policies.checkIn}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Check-out:</strong> {roomDetails.policies.checkOut}
                        </span>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <p className="text-sm">
                        <strong>Cancelamento:</strong> {roomDetails.policies.cancellation}
                      </p>
                      <p className="text-sm">
                        <strong>Animais:</strong> {roomDetails.policies.pets}
                      </p>
                      <p className="text-sm">
                        <strong>Fumo:</strong> {roomDetails.policies.smoking}
                      </p>
                      <p className="text-sm">
                        <strong>Crianças:</strong> {roomDetails.policies.children}
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-4">
                    {roomDetails.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden">
                              <Image
                                src={review.avatar || "/placeholder.svg"}
                                alt={review.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">{review.name}</h4>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{review.date}</p>
                              <p className="text-sm">{review.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {roomDetails.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">R$ {roomDetails.originalPrice}</span>
                    )}
                    <span className="text-3xl font-bold">R$ {roomDetails.price}</span>
                    <span className="text-muted-foreground">/ noite</span>
                  </div>
                  {roomDetails.originalPrice && (
                    <Badge variant="destructive" className="text-xs">
                      Economize R$ {roomDetails.originalPrice - roomDetails.price}
                    </Badge>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Check-in</label>
                    <Input
                      type="date"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Check-out</label>
                    <Input
                      type="date"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Hóspedes</label>
                    <Select>
                      <option value="1">1 hóspede</option>
                      <option value="2">2 hóspedes</option>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span>R$ {roomDetails.price} x 3 noites</span>
                    <span>R$ {roomDetails.price * 3}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de limpeza</span>
                    <span>R$ 50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de serviço</span>
                    <span>R$ 75</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>R$ {roomDetails.price * 3 + 50 + 75}</span>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/payment">Prosseguir para Pagamento</Link>
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-xs text-muted-foreground">Você não será cobrado ainda</p>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>Suporte: (11) 9999-9999</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Mail className="h-4 w-4" />
                    <span>contato@alugarooms.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
