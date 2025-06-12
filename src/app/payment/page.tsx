"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CreditCard, Smartphone, Building2 } from "lucide-react"

const paymentMethods = [
  {
    id: "paypal",
    name: "PayPal",
    description: "Pague com sua conta PayPal",
    icon: "💳",
    type: "online",
   
  },
  {
    id: "card",
    name: "Cartão de Crédito/Débito",
    description: "Visa, Mastercard",
    icon: "💳",
    type: "online",
    disabled: true,
  },
  {
    id: "mpesa",
    name: "M-Pesa",
    description: "Pagamento via M-Pesa",
    icon: "📱",
    type: "mobile",
    
  },
  {
    id: "mkesh",
    name: "Mkesh",
    description: "Pagamento via Mkesh",
    icon: "📱",
    type: "mobile",
    
  },
  {
    id: "emola",
    name: "E-Mola",
    description: "Pagamento via E-Mola",
    icon: "📱",
    type: "mobile",
    
  },
  {
    id: "pos",
    name: "POS (Terminal)",
    description: "Pagamento no terminal POS",
    icon: "🏪",
    type: "terminal",
    disabled: true,
  },
]

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("")

  const handleContinue = () => {
    if (!selectedMethod) return

    // Redirect based on payment method
    switch (selectedMethod) {
      case "mpesa":
        window.location.href = "/payment/mpesa"
        break
      case "mkesh":
        window.location.href = "/payment/mkesh"
        break
      case "emola":
        window.location.href = "/payment/emola"
        break
      case "paypal":
        window.location.href = "/payment/paypal"
        break
      case "card":
        window.location.href = "/payment/card"
        break
      case "pos":
        window.location.href = "/payment/pos"
        break
    }
  }

  const getMethodIcon = (type: string) => {
    switch (type) {
      case "online":
        return <CreditCard className="h-5 w-5" />
      case "mobile":
        return <Smartphone className="h-5 w-5" />
      case "terminal":
        return <Building2 className="h-5 w-5" />
      default:
        return <CreditCard className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 max-w-screen-xl">
          <Button variant="ghost" asChild>
            <Link href="/room-details">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Detalhes
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Escolha o Método de Pagamento</CardTitle>
                <p className="text-muted-foreground">Selecione como deseja pagar sua reserva</p>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center space-x-3">
                      <RadioGroupItem value={method.id} id={method.id} disabled={method.disabled} />
                      <Label
                        htmlFor={method.id}
                        className="flex-1 flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {getMethodIcon(method.type)}
                          <div>
                            <div className="font-medium">{method.name}</div>
                            <div className="text-sm text-muted-foreground">{method.description}</div>
                          </div>
                        </div>
                        <span className="text-2xl">{method.icon}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="mt-8">
                  <Button onClick={handleContinue} disabled={!selectedMethod} className="w-full" size="lg">
                    Continuar com {selectedMethod ? paymentMethods.find((m) => m.id === selectedMethod)?.name : "..."}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Resumo da Reserva</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Suíte Premium Ocean View</h3>
                  <p className="text-sm text-muted-foreground">Andar 15 - Vista Mar</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span>15/06/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span>18/06/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hóspedes:</span>
                    <span>2 adultos</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Noites:</span>
                    <span>3</span>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span> 450 MT x 3 noites</span>
                    <span>1.350 MT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de limpeza</span>
                    <span>50 MT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de serviço</span>
                    <span>75 MT</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>1.475 MT</span>
                  </div>
                </div>

                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    🔒 Seus dados de pagamento são protegidos com criptografia SSL
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
