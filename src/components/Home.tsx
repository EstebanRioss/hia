import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, MapPin, Calendar, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Show {
  id: number;
  title: string;
  theme: string;
  cast: string[];
  date: string;
  time: string;
  room: string;
  price: number;
  image: string;
  description: string;
}

interface HomeProps {
  onNavigate: (page: string, showId?: number) => void;
  shows: Show[];
}

export function Home({ onNavigate, shows }: HomeProps) {
  const featuredShows = shows.filter(show => [1, 2, 3].includes(show.id));

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <div className="relative h-[700px] bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjEwMDkxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Teatro Mitre"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        
        {/* Gold accent borders */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D4AF37] via-[#B8941F] to-[#D4AF37]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-4xl">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm tracking-wider font-medium">DESDE 1929</span>
            </div>
            
            <h1 className="text-7xl mb-6 text-[#D4AF37] leading-tight font-['Playfair_Display'] tracking-tight">
              Teatro Mitre
            </h1>
            <h2 className="text-4xl mb-8 text-white font-['Playfair_Display'] leading-snug">
              Donde el Arte Cobra Vida
            </h2>
            <p className="text-xl mb-12 text-[#E0E0E0] leading-relaxed max-w-2xl">
              Un ícono cultural del norte argentino. Disfruta de espectáculos inolvidables 
              en el corazón de San Salvador de Jujuy, donde la tradición se encuentra con la excelencia artística.
            </p>
            
            <div className="flex gap-6">
              <Button 
                size="lg" 
                onClick={() => onNavigate("cartelera")}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#7B1E26] hover:to-[#7B1E26] text-[#0A0A0A] hover:text-white h-16 px-10 text-lg shadow-2xl transition-all"
              >
                Ver Cartelera
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => onNavigate("salas")}
                className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] h-16 px-10 text-lg backdrop-blur-sm transition-all"
              >
                Nuestras Salas
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Shows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-full mb-6">
            <span className="text-[#D4AF37] text-sm tracking-wider font-medium">TEMPORADA 2025</span>
          </div>
          <h2 className="text-5xl mb-6 text-[#0A0A0A] font-['Playfair_Display'] tracking-tight">
            Espectáculos Destacados
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra selección de producciones más aclamadas. Arte, cultura y entretenimiento de primer nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {featuredShows.map((show) => (
            <Card 
              key={show.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-[#E0E0E0] hover:border-[#D4AF37] group"
            >
              <div className="relative h-80 overflow-hidden bg-[#0A0A0A]">
                <ImageWithFallback
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-6 right-6">
                  <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#0A0A0A] border-0 px-4 py-2 text-sm font-medium">
                    Destacado
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-[#4A3B2A]/90 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-sm">
                    {show.theme}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-[#0A0A0A] font-['Playfair_Display'] leading-tight">
                  {show.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-4">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-[#666666]">
                    <Calendar className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-sm">{show.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#666666]">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-sm">{show.time} hs</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#666666]">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-sm">{show.room}</span>
                  </div>
                </div>
                <p className="text-sm text-[#666666] line-clamp-3 leading-relaxed">
                  {show.description}
                </p>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center border-t-2 border-[#E0E0E0] pt-6 bg-gradient-to-br from-[#FAFAFA] to-white">
                <div>
                  <p className="text-xs text-[#666666] mb-1">Desde</p>
                  <p className="text-2xl text-[#0A0A0A] font-['Playfair_Display']">
                    ${show.price.toLocaleString()}
                  </p>
                </div>
                <Button 
                  onClick={() => onNavigate("compra", show.id)}
                  className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#7B1E26] hover:to-[#7B1E26] text-[#0A0A0A] hover:text-white h-12 px-8 shadow-lg transition-all"
                >
                  Comprar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#0A0A0A] py-24 border-y-4 border-[#D4AF37]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-5xl mb-8 text-[#D4AF37] font-['Playfair_Display'] tracking-tight">
            Un Legado de Excelencia Cultural
          </h3>
          <p className="text-xl text-[#E0E0E0] mb-12 leading-relaxed max-w-3xl mx-auto">
            Desde 1929, el Teatro Mitre ha sido el epicentro cultural de Jujuy. 
            Descubre la magia de nuestra arquitectura histórica, acústica excepcional 
            y programación que celebra lo mejor del arte regional y nacional.
          </p>
          <div className="flex gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate("salas")}
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#7B1E26] hover:to-[#7B1E26] text-[#0A0A0A] hover:text-white h-16 px-10 text-lg shadow-2xl transition-all"
            >
              Explora Nuestras Salas
            </Button>
            <Button 
              size="lg"
              onClick={() => onNavigate("contacto")}
              variant="outline"
              className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] h-16 px-10 text-lg backdrop-blur-sm transition-all"
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
