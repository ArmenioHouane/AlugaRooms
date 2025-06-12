import { LoginForm } from "@/components/forms/login-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
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
            <h1 className="mt-6 text-3xl font-bold">Bem-vindo de volta</h1>
            <p className="mt-2 text-sm text-muted-foreground">Entre com sua conta para acessar o sistema</p>
          </div>
          <LoginForm />
          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Não tem uma conta?{" "}
              <Link href="/signup" className="font-medium text-primary hover:underline">
                Cadastre-se
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
