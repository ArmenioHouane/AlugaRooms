"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { roomTypes, amenitiesList } from "@/data/rooms"
import type { RoomFilters } from "@/types/room"

interface RoomFiltersProps {
  filters: RoomFilters
  onFiltersChange: (filters: RoomFilters) => void
  mobile?: boolean
}

export function RoomFiltersComponent({ filters, onFiltersChange, mobile = false }: RoomFiltersProps) {
  const [localFilters, setLocalFilters] = useState<RoomFilters>(filters)

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...localFilters, priceRange: [value[0], value[1]] as [number, number] }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const handleRoomTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked ? [...localFilters.roomType, type] : localFilters.roomType.filter((t) => t !== type)

    const newFilters = { ...localFilters, roomType: newTypes }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const newAmenities = checked
      ? [...localFilters.amenities, amenity]
      : localFilters.amenities.filter((a) => a !== amenity)

    const newFilters = { ...localFilters, amenities: newAmenities }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const handleRatingChange = (value: number[]) => {
    const newFilters = { ...localFilters, minRating: value[0] }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const handleGuestsChange = (value: number[]) => {
    const newFilters = { ...localFilters, maxGuests: value[0] }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const defaultFilters: RoomFilters = {
      priceRange: [0, 1000],
      roomType: [],
      minRating: 0,
      amenities: [],
      maxGuests: 6,
      sortBy: "price-asc",
    }
    setLocalFilters(defaultFilters)
    onFiltersChange(defaultFilters)
  }

  const content = (
    <Card className={mobile ? "border-none shadow-none" : "h-fit"}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filtros</CardTitle>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Limpar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            Preço por noite: R$ {localFilters.priceRange[0]} - R$ {localFilters.priceRange[1]}
          </Label>
          <div className="px-2">
            <Slider
              value={localFilters.priceRange}
              onValueChange={handlePriceChange}
              max={1000}
              min={0}
              step={50}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>R$ 0</span>
            <span>R$ 1000</span>
          </div>
        </div>

        <Separator />

        {/* Room Type */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Tipo de Quarto</Label>
          <div className="space-y-2">
            {roomTypes.map((type) => (
              <div key={type.value} className="flex items-center space-x-2">
                <Checkbox
                  id={type.value}
                  checked={localFilters.roomType.includes(type.value)}
                  onCheckedChange={(checked) => handleRoomTypeChange(type.value, checked as boolean)}
                />
                <Label htmlFor={type.value} className="text-sm">
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Rating */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Avaliação mínima: {localFilters.minRating} estrelas</Label>
          <div className="px-2">
            <Slider
              value={[localFilters.minRating]}
              onValueChange={handleRatingChange}
              max={5}
              min={0}
              step={0.5}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0★</span>
            <span>5★</span>
          </div>
        </div>

        <Separator />

        {/* Max Guests */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Máximo de hóspedes: {localFilters.maxGuests}</Label>
          <div className="px-2">
            <Slider
              value={[localFilters.maxGuests]}
              onValueChange={handleGuestsChange}
              max={6}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1</span>
            <span>6</span>
          </div>
        </div>

        <Separator />

        {/* Amenities */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Comodidades</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {amenitiesList.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity}
                  checked={localFilters.amenities.includes(amenity)}
                  onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                />
                <Label htmlFor={amenity} className="text-sm">
                  {amenity}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return content
}
