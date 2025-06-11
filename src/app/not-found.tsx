"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold tracking-tight">Página não encontrada</h2>
          <p className="text-muted-foreground">Oops! A página que você está procurando não existe ou foi movida.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Voltar ao início
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Página anterior
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Se você acredita que isso é um erro, entre em contato conosco:</p>
          <Link href="/contact" className="text-primary hover:underline">
            contato@alugarooms.com
          </Link>
        </div>
      </div>
    </div>
  )
}
