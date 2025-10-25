import { Card } from "@/components/ui/card"
import { Smartphone, Bot, Video, Code, Sparkles } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Criação de App",
      description:
        "Desenvolvemos aplicativos sob medida para o seu negócio, com design moderno, performance otimizada e foco na experiência do usuário. Leve sua marca para o celular dos seus clientes e aumente o engajamento de forma inteligente.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Bot,
      title: "Bot em IA",
      description:
        "Automatize o atendimento e melhore a comunicação com seus clientes através de bots inteligentes. Nossos assistentes virtuais entendem, respondem e aprendem — reduzindo custos e aumentando a eficiência do seu negócio.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Video,
      title: "Videos em IA",
      description:
        "Produza vídeos profissionais sem precisar de equipe ou equipamentos caros. Com tecnologia de IA, criamos vídeos personalizados que dão voz e rosto à sua marca, ideais para redes sociais e campanhas digitais.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Code,
      title: "Sites modernos",
      description:
        "Criamos sites rápidos, responsivos e visualmente impactantes que destacam a sua marca e convertem visitantes em clientes. Da ideia ao lançamento, entregamos presença digital com alta performance e resultados reais.",
      color: "bg-green-100 text-green-600",
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-green-600" />
            <p className="text-sm text-gray-600 uppercase tracking-wider font-medium">Nossos Serviços</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-none bg-white"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
