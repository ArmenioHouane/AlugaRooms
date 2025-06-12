export interface Room {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  rating: number
  reviewCount: number
  type: "standard" | "deluxe" | "suite" | "family"
  maxGuests: number
  size: number
  amenities: string[]
  available: boolean
  featured: boolean
  location: string
  bedType: string
  hasBalcony: boolean
  hasSeaView: boolean
  hasWifi: boolean
  hasAirConditioning: boolean
  hasMinibar: boolean
  hasBreakfast: boolean
}

export interface RoomFilters {
  priceRange: [number, number]
  roomType: string[]
  minRating: number
  amenities: string[]
  maxGuests: number
  hasBalcony?: boolean
  hasSeaView?: boolean
  sortBy: "price-asc" | "price-desc" | "rating" | "name"
}
