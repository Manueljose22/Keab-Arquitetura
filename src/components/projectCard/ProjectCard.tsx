import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  type: string;
  image: string;
}

export function ProjectCard({ title, type, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow p-0 pb-5">
      <CardHeader className="p-0">
        <div className="relative h-50">
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{type}</p>
      </CardContent>
      <CardFooter>
        <button className="text-primary text-sm font-medium hover:underline cursor-pointer">
          Ver Detalhes
        </button>
      </CardFooter>
    </Card>
  );
}