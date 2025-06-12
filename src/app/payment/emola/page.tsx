"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Copy, CheckCircle, Clock, Smartphone } from "lucide-react"

export default function EmolaPaymentPage() {
  const [copied, setCopied] = useState(false)
  const phoneNumber = "+258 82 987 6543"
  const amount = "1475"
  const reference = "AR-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
            <div className="bg-orange-100 p-3 rounded-full">
              <Smartphone className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Pagamento via E-Mola</h1>
          <p className="text-muted-foreground">Siga os passos abaixo para completar seu pagamento</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center text-xs">
                1
              </Badge>
              Informações do Pagamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Número para envio:</label>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-lg">{phoneNumber}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(phoneNumber)}
                      className="h-8 w-8 p-0"
                    >
                      {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Valor:</label>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-lg font-bold">R$ {amount}</span>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(amount)} className="h-8 w-8 p-0">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium text-muted-foreground">Referência:</label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-sm">{reference}</span>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(reference)} className="h-8 w-8 p-0">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center text-xs">
                2
              </Badge>
              Como Enviar pelo E-Mola
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Abra o aplicativo E-Mola</p>
                  <p className="text-sm text-muted-foreground">No seu telefone, abra o aplicativo E-Mola</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Selecione &quot;Enviar Dinheiro&quot;</p>
                  <p className="text-sm text-muted-foreground">Toque na opção &quot;Enviar Dinheiro&quot; no menu</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Escolha &quot;Para Número E-Mola&quot;</p>
                  <p className="text-sm text-muted-foreground">Selecione enviar para outro número E-Mola</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <p className="font-medium">Digite o número</p>
                  <p className="text-sm text-muted-foreground">
                    Insira o número: <span className="font-mono font-semibold">{phoneNumber}</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  5
                </div>
                <div>
                  <p className="font-medium">Insira o valor</p>
                  <p className="text-sm text-muted-foreground">
                    Digite exatamente: <span className="font-mono font-semibold">R$ {amount}</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  6
                </div>
                <div>
                  <p className="font-medium">Adicione a referência</p>
                  <p className="text-sm text-muted-foreground">
                    No campo &quot;Comentário&quot; ou &quot;Nota&quot;, digite:{" "}
                    <span className="font-mono font-semibold">{reference}</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  7
                </div>
                <div>
                  <p className="font-medium">Confirme o envio</p>
                  <p className="text-sm text-muted-foreground">Revise os dados e confirme com seu PIN E-Mola</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center text-xs">
                3
              </Badge>
              Após o Pagamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>O pagamento será processado em até 2 minutos</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Você receberá uma confirmação por SMS e email</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Sua reserva será confirmada automaticamente</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-orange-800 mb-2">🔔 Lembrete E-Mola</h3>
          <ul className="text-sm text-orange-700 space-y-1">
            <li>• Certifique-se de que sua conta E-Mola está ativa</li>
            <li>• Verifique se tem saldo suficiente</li>
            <li>• Use exatamente o valor e referência mostrados</li>
            <li>• Guarde o comprovante de envio</li>
          </ul>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/booking-confirmation">Já Enviei o Pagamento</Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-2">Clique apenas após enviar o pagamento via E-Mola</p>
        </div>
      </div>
    </div>
  )
}
