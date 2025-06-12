/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useMemo } from "react"
import { SearchBar } from "@/components/rooms/search-bar"
import { RoomFiltersComponent } from "@/components/rooms/room-filters"
import { SortOptions } from "@/components/rooms/sort-options"
import { RoomsGrid } from "@/components/rooms/rooms-grid"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { rooms } from "@/data/rooms"
import type { RoomFilters } from "@/types/room"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function RoomsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<RoomFilters>({
    priceRange: [0, 1000],
    roomType: [],
    minRating: 0,
    amenities: [],
    maxGuests: 6,
    sortBy: "price-asc",
  })

  const filteredAndSortedRooms = useMemo(() => {
    const filtered = rooms.filter((room) => {
      // Search query filter
      if (
        searchQuery &&
        !room.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !room.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Price range filter
      if (room.price < filters.priceRange[0] || room.price > filters.priceRange[1]) {
        return false
      }

      // Room type filter
      if (filters.roomType.length > 0 && !filters.roomType.includes(room.type)) {
        return false
      }

      // Rating filter
      if (room.rating < filters.minRating) {
        return false
      }

      // Max guests filter
      if (room.maxGuests > filters.maxGuests) {
        return false
      }

      // Amenities filter
      if (filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every((amenity) => room.amenities.includes(amenity))
        if (!hasAllAmenities) {
          return false
        }
      }

      return true
    })

    // Sort rooms
    switch (filters.sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return filtered
  }, [searchQuery, filters])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 py-6 sm:py-8">
        <div className="container mx-auto px-4 max-w-screen-2xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Nossos Quartos</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Encontre o quarto perfeito para sua estadia</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-screen-2xl">
        {/* Search Bar */}
        <SearchBar onSearch={setSearchQuery} />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <RoomFiltersComponent filters={filters} onFiltersChange={setFilters} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Mobile Filter Sheet */}
            <div className="lg:hidden mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros e Ordenação
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:w-80 p-0">
                  <SheetHeader className="p-6 pb-0">
                    <SheetTitle>Filtros</SheetTitle>
                    <SheetDescription>Refine sua busca para encontrar o quarto ideal</SheetDescription>
                  </SheetHeader>
                  <div className="p-6 pt-0">
                    <RoomFiltersComponent filters={filters} onFiltersChange={setFilters} mobile={true} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Sort Options */}
            <SortOptions
              sortBy={filters.sortBy}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onSortChange={(sortBy) => setFilters({ ...filters, sortBy: sortBy as any })}
              totalResults={filteredAndSortedRooms.length}
            />

            {/* Rooms Grid */}
            <RoomsGrid rooms={filteredAndSortedRooms} />
          </main>
        </div>
      </div>
    </div>
  )
}
