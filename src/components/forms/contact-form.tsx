"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "O nome deve ter pelo menos 2 caracteres.",
    })
    .max(50, {
      message: "O nome não pode ter mais de 50 caracteres.",
    }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "O telefone deve ter pelo menos 10 dígitos.",
    })
    .max(15, {
      message: "O telefone não pode ter mais de 15 dígitos.",
    }),
  subject: z.string().min(1, {
    message: "Por favor, selecione um assunto.",
  }),
  message: z
    .string()
    .min(10, {
      message: "A mensagem deve ter pelo menos 10 caracteres.",
    })
    .max(1000, {
      message: "A mensagem não pode ter mais de 1000 caracteres.",
    }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactForm() {
 
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit() {
    setIsLoading(true)

    // Simular envio do formulário
    setTimeout(() => {
      toast.message('Mensagem enviada com sucesso!',{
         description: "Entraremos em contato em breve. Obrigado!",
      })
      form.reset()
      setIsLoading(false)
    }, 2000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome *</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone *</FormLabel>
                <FormControl>
                  <Input placeholder="+258 860000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assunto *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um assunto" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="reserva">Dúvidas sobre Reserva</SelectItem>
                    <SelectItem value="cancelamento">Cancelamento</SelectItem>
                    <SelectItem value="pagamento">Problemas de Pagamento</SelectItem>
                    <SelectItem value="suporte">Suporte Técnico</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="parceria">Parcerias</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva sua dúvida ou solicitação..."
                  className="resize-none"
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormDescription>Seja o mais específico possível para que possamos ajudá-lo melhor.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
            </>
          ) : (
            "Enviar Mensagem"
          )}
        </Button>
      </form>
    </Form>
  )
}
