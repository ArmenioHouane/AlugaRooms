"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Shield } from "lucide-react"

export default function PaypalPaymentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 max-w-screen-xl">
          <Button variant="ghost" asChild>
            <Link href="/payment">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Métodos de Pagamento
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-screen-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <span className="text-2xl">💳</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Pagamento via PayPal</h1>
          <p className="text-muted-foreground">Entre com sua conta PayPal para completar o pagamento</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login PayPal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email ou telefone</Label>
              <Input id="email" type="email" placeholder="Digite seu email PayPal" />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="Digite sua senha" />
            </div>

            <Button className="w-full" size="lg">
              Entrar no PayPal
            </Button>

            <div className="text-center">
              <Button variant="link" className="text-sm">
                Esqueceu sua senha?
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
              <Shield className="h-4 w-4" />
              <span>Pagamento seguro protegido pelo PayPal</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
