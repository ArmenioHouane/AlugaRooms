"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, Users, MapPin, Phone, Mail, Download } from "lucide-react"

export default function BookingConfirmationPage() {
  const bookingId = "AR-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-screen-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-green-600">Reserva Confirmada!</h1>
          <p className="text-muted-foreground">Sua reserva foi processada com sucesso</p>
          <p className="text-sm text-muted-foreground mt-2">
            ID da Reserva: <span className="font-mono font-semibold">{bookingId}</span>
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Detalhes da Reserva</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Suíte Premium Ocean View</h3>
              <p className="text-muted-foreground">Andar 15 - Vista Mar</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">Check-in</div>
                  <div>15/06/2024 - 14:00</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">Check-out</div>
                  <div>18/06/2024 - 12:00</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">Hóspedes</div>
                  <div>2 adultos</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">Noites</div>
                  <div>3 noites</div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total Pago</span>
                <span>R$ 1.475</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Próximos Passos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Confirmação enviada</p>
                <p className="text-sm text-muted-foreground">Você receberá um email com todos os detalhes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Check-in disponível</p>
                <p className="text-sm text-muted-foreground">A partir das 14:00 do dia 15/06/2024</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Documentos necessários</p>
                <p className="text-sm text-muted-foreground">Traga um documento de identidade válido</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Contato do Hotel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">(11) 9999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">contato@alugarooms.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Av. Paulista, 1000 - São Paulo, SP</span>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Baixar Comprovante
          </Button>
          <Button asChild className="flex-1">
            <Link href="/">Voltar ao Início</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
