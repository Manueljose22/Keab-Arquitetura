import { Header } from '@/components/layout/header/Header';
import { Footer } from '@/components/layout/footer/Footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/serviceCard/ServiceCard';
import { ProjectCard } from '@/components/projectCard/ProjectCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { projects, services } from '@/constants/constants';





export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/images/hero-bg.jpg"
            alt="Edifício moderno"
            fill
            className="object-cover"
            priority
          />
          <div className="container relative z-20 text-center text-white px-2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Construindo Sonhos, Criando Realidades</h1>
            <p className="text-xl md:text-2xl mb-8">Excelência em arquitetura e construção civil</p>
            <Button color='#FC3B3C' size="lg" className="text-lg cursor-pointer">Solicite um Orçamento</Button>
          </div>
        </section>

        {/* Serviços Section */}
        <section className="py-20 bg-gray-50 px-2 lg:px-[100px]">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Nossos Serviços</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Oferecemos soluções completas para seu projeto, desde a concepção até a entrega final.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Portfólio Section */}
        <section className="py-20 px-2 lg:px-[100px]">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Nossos Projetos</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Confira alguns dos nossos trabalhos recentes que mostram nossa qualidade e diversidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  type={project.type}
                  image={project.image}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-primary cursor-pointer text-primary hover:bg-primary hover:text-white">
                Ver Todos os Projetos
              </Button>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section className="py-20 bg-gray-50 px-2 lg:px-[100px]">
          <div className="container px-4 flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/images/about.jpg"
                alt="Equipe de arquitetura"
                width={500}
                height={100}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="lg:w-1/1">
              <h2 className="text-3xl font-bold mb-6">Sobre Nossa Empresa</h2>
              <p className="text-gray-600 mb-4 lg:w-3xl ">
                Fundada em 2020, nossa empresa se destaca pela excelência em projetos arquitetônicos e construção civil.
                Combinamos criatividade, funcionalidade e técnicas construtivas avançadas para entregar resultados excepcionais.
              </p>
              <p className="text-gray-600 mb-6 lg:w-3xl ">
                Nossa equipe multidisciplinar é formada por arquitetos, engenheiros e profissionais altamente qualificados,
                comprometidos em superar as expectativas de nossos clientes.
              </p>
              <Button className='cursor-pointer'>Conheça Nossa Equipe</Button>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section className="py-20">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Entre em Contato</h2>
            <p className="text-center text-gray-600 mb-12">
              Tem um projeto em mente? Fale conosco para discutir como podemos ajudar.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Seu Nome" required />
                    </div>
                    <div>
                      <Input type="email" placeholder="Seu Email" required />
                    </div>
                  </div>
                  <div>
                    <Input placeholder="Assunto" required />
                  </div>
                  <div>
                    <Textarea placeholder="Sua Mensagem" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full cursor-pointer">Enviar Mensagem</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}