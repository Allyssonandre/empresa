import { Card } from "@/components/ui/card"
import { Code2, Palette, Zap } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Código limpo e escalável usando as tecnologias mais modernas do mercado",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Interfaces intuitivas e atraentes que proporcionam experiências memoráveis",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização constante para garantir velocidade e eficiência em cada projeto",
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Sobre meu trabalho</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Combinando criatividade, tecnologia e estratégia para entregar resultados excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 border-border">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
