import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";





export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-2 lg:px-[100px]">
      <div className="container px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <Image src="/images/logo-2.png" width={150} height={50} alt="logo" />
          
          <p className="text-gray-400 mt-2">
            Excelência em arquitetura e construção civil, transformando sonhos em realidade.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white">Início</Link></li>
            <li><Link href="/servicos" className="text-gray-400 hover:text-white">Serviços</Link></li>
            <li><Link href="/portfolio" className="text-gray-400 hover:text-white">Portfólio</Link></li>
            <li><Link href="/sobre" className="text-gray-400 hover:text-white">Sobre</Link></li>
            <li><Link href="/contato" className="text-gray-400 hover:text-white">Contato</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Serviços</h4>
          <ul className="space-y-2">
            <li className="text-gray-400">Projetos Arquitetônicos</li>
            <li className="text-gray-400">Construção Civil</li>
            <li className="text-gray-400">Reformas</li>
            <li className="text-gray-400">Consultoria</li>
            <li className="text-gray-400">Arranjos Exteriores</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Contato</h4>
          <address className="not-italic text-gray-400 space-y-2">
            <p>Viana, Grafanil Bar</p>
            <p>Travessa 5</p>
            <p>(+244) 935131015</p>
            <p>(+244) 950190449</p>
            <p>keypy06@gmail.com</p>
          </address>
        </div>
      </div>
      
      <div className="container px-4 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} 
          <span style={{color:"#FC3B3C"}}> Keab</span>. Todos os direitos reservados. | Desenvolvido por 
          <Link className="text-white" href={"https://Manuel-jose.netlify.app"} target="_blank"> Manuel José</Link>
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#">
              <FaFacebook color="#FC3B3C" className="text-gray-400" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#">
              <FaInstagram color="#FC3B3C" className="text-gray-400"  />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#">
              <FaLinkedin color="#FC3B3C" className="text-gray-400 " />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}