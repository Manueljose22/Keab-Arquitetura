"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";





export function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky py-3 px-2 lg:px-[100px] top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/images/logo-1.png" width={150} height={50} alt="logo" />
                </Link>

                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/" className={`text-md font-medium ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}>
                        Início
                    </Link>
                    <Link href="/servicos" className={`text-md font-medium ${pathname === '/servicos' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}>
                        Serviços
                    </Link>
                    <Link href="/portfolio" className={`text-md font-medium ${pathname === '/portfolio' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}>
                        Portfólio
                    </Link>
                    <Link href="/sobre" className={`text-md font-medium ${pathname === '/sobre' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}>
                        Sobre
                    </Link>
                    <Link href="/contato" className={`text-md font-medium ${pathname === '/contato' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}>
                        Contato
                    </Link>
                </nav>

                <Button asChild className="">
                    <Link href="/contato">Orçamento</Link>
                </Button>
            </div>
        </header>
    );
}