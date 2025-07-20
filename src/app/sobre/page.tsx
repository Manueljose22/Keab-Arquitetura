import Image from "next/image";




export default function Sobre() {
  return (
    <section className="w-full h-[80vh] py-9 px-2 lg:px-[100px]">
      <div className="container  flex flex-col lg:flex-row gap-10 items-center px-4">
        <div className="lg:w-1/2">
          <Image
            src="/images/about.jpg"
            alt="Equipe de arquitetura"
            width={500}
            height={50}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/1">
          <h1 className="text-3xl font-bold mb-4">Quem Somos</h1>
          <p className="text-gray-600 lg:w-3xl">
            Na Keab, acreditamos que cada espaço tem o potencial de contar uma história. Somos uma empresa especializada em projetos arquitetônicos, construção civil e reformas, unindo técnica, estética e funcionalidade para criar ambientes que inspiram e acolhem.
          </p>
          <p className="text-gray-600 lg:w-3xl mt-2">
            Nosso propósito é transformar ideias em espaços que elevam a experiência de viver, trabalhar e conviver. Com uma equipe multidisciplinar e apaixonada por arquitetura, atuamos em todas as etapas do processo – do conceito à execução – sempre com atenção aos detalhes, prazos e expectativas dos nossos clientes.
          </p>

          <h4 className="text-2xl font-bold mt-4">Nossa Missão</h4>
          <p className="text-gray-600 lg:w-3xl mt-2">
            Projetar e construir com excelência, criatividade e responsabilidade, oferecendo soluções inteligentes e personalizadas que agreguem valor à vida das pessoas e ao meio em que vivem.
          </p>
            <h4 className="text-2xl font-bold mt-4">Nossa Visão</h4>
          <p className="text-gray-600 lg:w-3xl mt-2">
            Ser referência em arquitetura e construção pela qualidade dos projetos, inovação nos processos e confiança construída com cada cliente.
          </p>
          
        </div>
      </div>

      <div className="">

      </div>
    </section>
  )
}
