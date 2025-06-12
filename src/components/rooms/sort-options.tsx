"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface SortOptionsProps {
  sortBy: string
  onSortChange: (sortBy: string) => void
  totalResults: number
}

export function SortOptions({ sortBy, onSortChange, totalResults }: SortOptionsProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
      <div>
        <p className="text-sm text-muted-foreground">
          {totalResults} {totalResults === 1 ? "quarto encontrado" : "quartos encontrados"}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Label htmlFor="sort" className="text-sm whitespace-nowrap">
          Ordenar por:
        </Label>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Menor preço</SelectItem>
            <SelectItem value="price-desc">Maior preço</SelectItem>
            <SelectItem value="rating">Melhor avaliação</SelectItem>
            <SelectItem value="name">Nome A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
