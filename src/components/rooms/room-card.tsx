"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Maximize, MapPin, Wifi, Wind, Coffee } from "lucide-react"
import type { Room } from "@/types/room"

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group">
      <div className="relative h-48 sm:h-52 md:h-48 w-full">
        <Image
          src={room.images[currentImageIndex] || "/placeholder.svg"}
          alt={room.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />

        {room.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              →
            </button>
          </>
        )}

        {room.featured && <Badge className="absolute top-2 left-2 bg-primary text-xs">Destaque</Badge>}

        {room.originalPrice && (
          <Badge variant="destructive" className="absolute top-2 right-2 text-xs">
            -{Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}%
          </Badge>
        )}
      </div>

      <CardContent className="p-3 sm:p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base sm:text-lg font-semibold line-clamp-1 flex-1 mr-2">{room.name}</h3>
          <div className="flex items-center flex-shrink-0">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-xs sm:text-sm font-medium">{room.rating}</span>
            <span className="text-xs text-muted-foreground ml-1 hidden sm:inline">({room.reviewCount})</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">{room.description}</p>

        <div className="flex items-center gap-2 sm:gap-4 text-xs text-muted-foreground mb-3 flex-wrap">
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {room.maxGuests}
          </div>
          <div className="flex items-center">
            <Maximize className="h-3 w-3 mr-1" />
            {room.size}m²
          </div>
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span className="truncate">{room.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          {room.hasWifi && <Wifi className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />}
          {room.hasAirConditioning && <Wind className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />}
          {room.hasBreakfast && <Coffee className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />}
        </div>

        <div className="flex items-center gap-1 sm:gap-2 mb-3 flex-wrap">
          {room.amenities.slice(0, 2).map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs px-2 py-1">
              {amenity}
            </Badge>
          ))}
          {room.amenities.length > 2 && (
            <Badge variant="outline" className="text-xs px-2 py-1">
              +{room.amenities.length - 2}
            </Badge>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div>
            {room.originalPrice && (
              <span className="text-xs sm:text-sm text-muted-foreground line-through mr-2">
                R$ {room.originalPrice}
              </span>
            )}
            <span className="font-bold text-lg sm:text-xl">R$ {room.price}</span>
            <span className="text-xs sm:text-sm text-muted-foreground"> /noite</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none">
              <Link href={`/rooms/${room.id}`}>Detalhes</Link>
            </Button>
            <Button size="sm" asChild className="flex-1 sm:flex-none">
              <Link href={`/rooms/${room.id}/book`}>Reservar</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
