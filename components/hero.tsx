"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, MessageCircle } from "lucide-react"

export function Hero() {
  const whatsappNumber = "5584991167857"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Soluções digitais completas
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight text-gray-900">
              Conquiste seu espaço no digital com <span className="text-primary">soluções completas</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Soluções completas que colocam seu negócio no ar com identidade, design e performance. Mais do que estar
            online, é sobre estar preparado para crescer.{" "}
            <span className="text-gray-900 font-semibold">Entre em contato e resolveremos seu problema.</span>
            <br />
            <span className="text-primary font-bold">Cresça seu negócio e aumente seus lucros.</span>
          </p>
          <div className="flex items-center justify-center pt-4">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Entre em contato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
