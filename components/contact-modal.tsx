"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { MessageCircle, Instagram } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const whatsappNumber = "5584991167857"
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const instagramLink = "https://www.instagram.com/alntecnologia/"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Entre em Contato</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Escolha a melhor forma de falar conosco
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            asChild
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground justify-start"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="font-semibold">WhatsApp</span>
                <span className="text-sm opacity-90">(84) 99116-7857</span>
              </div>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full justify-start border-2 hover:bg-gray-50 bg-transparent"
          >
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-3 h-5 w-5 text-primary" />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-gray-900">Instagram</span>
                <span className="text-sm text-gray-600">@andreallysson30</span>
              </div>
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
