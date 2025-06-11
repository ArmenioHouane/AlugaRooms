import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RevealSection } from "@/components/reveal-section"

const faqs = [
  {
    question: "Como faço para reservar um quarto?",
    answer:
      "Para reservar um quarto, basta criar uma conta, escolher o quarto desejado, selecionar as datas e finalizar o pagamento. Todo o processo é feito online de forma rápida e segura.",
  },
  {
    question: "Qual a política de cancelamento?",
    answer:
      "Você pode cancelar sua reserva gratuitamente até 48 horas antes da data de check-in. Após esse período, será cobrada uma taxa equivalente a uma diária.",
  },
  {
    question: "É possível modificar minha reserva?",
    answer:
      "Sim, você pode modificar sua reserva através do seu painel de cliente, desde que seja feito com pelo menos 24 horas de antecedência e sujeito à disponibilidade.",
  },
  {
    question: "Como funciona o check-in e check-out?",
    answer:
      "O check-in é realizado a partir das 14h e o check-out até as 12h. Para early check-in ou late check-out, entre em contato com nossa equipe para verificar disponibilidade.",
  },
]

export function FaqSection() {
  return (
    <RevealSection id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">Não encontrou o que procurava? Entre em contato conosco.</p>
          <Button asChild>
            <Link href="/contact">Fale Conosco</Link>
          </Button>
        </div>
      </div>
    </RevealSection>
  )
}
