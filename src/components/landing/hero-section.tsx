"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Encontre o quarto perfeito para sua estadia
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Reservas simples, rápidas e seguras para sua próxima viagem. Descubra conforto e qualidade em cada
              detalhe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/rooms">Reserve Agora</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#rooms">Ver Quartos</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Quarto luxuoso"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
