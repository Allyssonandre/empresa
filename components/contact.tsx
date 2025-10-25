"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.")
    setFormData({ name: "", email: "", message: "" })
  }

  const whatsappNumber = "5584991167857"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <>
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-gray-900">
              Vamos transformar seu negócio?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
              Entre em contato conosco e conte qual desafio você quer resolver — juntos criaremos a solução ideal para o
              seu crescimento.
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

      <footer className="bg-primary text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">ALN</span>
              <span className="text-sm font-mono text-cyan-300">{"</>"}</span>
              <span className="text-sm font-semibold">Tecnologia</span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <p className="text-sm">© {new Date().getFullYear()} Todos os direitos reservados</p>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (84) 99116-7857
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
