"use client"

import { RoomCard } from "./room-card"
import type { Room } from "@/types/room"

interface RoomsGridProps {
  rooms: Room[]
}

export function RoomsGrid({ rooms }: RoomsGridProps) {
  if (rooms.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold mb-2">Nenhum quarto encontrado</h3>
        <p className="text-sm sm:text-base text-muted-foreground px-4">
          Tente ajustar os filtros para encontrar mais opções.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  )
}
