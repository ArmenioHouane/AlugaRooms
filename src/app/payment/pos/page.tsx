"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Clock, Phone, Building2 } from "lucide-react"

export default function PosPaymentPage() {
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
            <div className="bg-purple-100 p-3 rounded-full">
              <Building2 className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Pagamento no Terminal POS</h1>
          <p className="text-muted-foreground">Visite um dos nossos pontos de atendimento para pagar</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Informações do Pagamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Código de Referência:</label>
                  <div className="font-mono text-lg font-bold">
                    AR-POS-{Math.random().toString(36).substr(2, 6).toUpperCase()}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Valor a Pagar:</label>
                  <div className="font-mono text-lg font-bold">R$ 1.475</div>
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Apresente este código no terminal POS para processar o pagamento
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pontos de Atendimento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold">AlugaRooms - Centro</h3>
                <Badge variant="secondary">Aberto</Badge>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Av. Paulista, 1000 - Centro, São Paulo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Seg-Sex: 8h-18h | Sáb: 9h-14h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 3333-4444</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold">AlugaRooms - Shopping</h3>
                <Badge variant="secondary">Aberto</Badge>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Shopping Center Norte - Piso L2</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Seg-Dom: 10h-22h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 5555-6666</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold">AlugaRooms - Aeroporto</h3>
                <Badge variant="outline">Fechado</Badge>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Aeroporto Internacional - Terminal 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Todos os dias: 6h-23h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 7777-8888</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-800 mb-2">📋 Como Pagar no POS</h3>
          <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
            <li>Dirija-se a um dos pontos de atendimento</li>
            <li>Apresente o código de referência ao atendente</li>
            <li>Informe que deseja pagar uma reserva AlugaRooms</li>
            <li>Efetue o pagamento no terminal POS</li>
            <li>Guarde o comprovante de pagamento</li>
          </ol>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/booking-confirmation">Já Efetuei o Pagamento</Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-2">Clique apenas após efetuar o pagamento no terminal POS</p>
        </div>
      </div>
    </div>
  )
}
