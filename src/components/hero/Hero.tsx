import Image from 'next/image';
import { Button } from '../ui/button';






export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="../images/hero-bg.jpg"
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
  )
}
