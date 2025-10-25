import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Plataforma E-commerce",
      description: "Loja virtual completa com sistema de pagamentos, gestão de estoque e painel administrativo",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
      title: "App de Produtividade",
      description: "Aplicativo mobile para gestão de tarefas com sincronização em tempo real e notificações",
      image: "/productivity-app-mobile-interface.jpg",
      tags: ["React Native", "Firebase", "TypeScript"],
    },
    {
      title: "Dashboard Analytics",
      description: "Painel de análise de dados com visualizações interativas e relatórios personalizados",
      image: "/analytics-dashboard.png",
      tags: ["React", "D3.js", "Node.js"],
    },
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Projetos em destaque</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Alguns dos trabalhos que desenvolvi recentemente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <div className="relative h-48 sm:h-64 bg-muted">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full sm:w-auto mt-4 bg-transparent">
                  Ver projeto
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
