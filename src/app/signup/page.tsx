import { SignupForm } from "@/components/forms/signup-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2">
              <div className="relative h-8 w-8 bg-primary rounded-full overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
                  AR
                </div>
              </div>
              <span className="font-bold text-xl">AlugaRooms</span>
            </Link>
            <h1 className="mt-6 text-3xl font-bold">Crie sua conta</h1>
            <p className="mt-2 text-sm text-muted-foreground">Cadastre-se para começar a usar o AlugaRooms</p>
          </div>
          <SignupForm />
          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Já tem uma conta?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Faça login
              </Link>
            </p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
