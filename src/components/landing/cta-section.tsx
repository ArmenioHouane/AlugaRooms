import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RevealSection } from "@/components/reveal-section"

export function CtaSection() {
  return (
    <RevealSection className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Pronto para reservar sua estadia?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Junte-se a milhares de clientes satisfeitos e tenha uma experiência incrível com o AlugaRooms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">Criar Conta</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/rooms">Ver Quartos</Link>
            </Button>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
