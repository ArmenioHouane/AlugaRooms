"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CreditCard, Lock } from "lucide-react"

export default function CardPaymentPage() {
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
            <div className="bg-green-100 p-3 rounded-full">
              <CreditCard className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Pagamento com Cartão</h1>
          <p className="text-muted-foreground">Digite os dados do seu cartão de crédito ou débito</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Dados do Cartão</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Número do cartão</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>

            <div>
              <Label htmlFor="cardName">Nome no cartão</Label>
              <Input id="cardName" placeholder="Nome como aparece no cartão" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Validade</Label>
                <Input id="expiry" placeholder="MM/AA" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>

            <div>
              <Label htmlFor="cardType">Tipo de cartão</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit">Crédito</SelectItem>
                  <SelectItem value="debit">Débito</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Endereço de cobrança</h3>
              <div className="space-y-3">
                <Input placeholder="Nome completo" />
                <Input placeholder="Endereço" />
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="Cidade" />
                  <Input placeholder="CEP" />
                </div>
              </div>
            </div>

            <Button asChild className="w-full" size="lg">
              <Link href="/booking-confirmation">
                <Lock className="h-4 w-4 mr-2" />
                Pagar R$ 1.475
              </Link>
            </Button>

            <div className="text-center text-xs text-muted-foreground">
              🔒 Seus dados estão protegidos com criptografia SSL
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
