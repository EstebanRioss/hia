import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Clock, MapPin, Calendar } from "lucide-react";
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

interface CarteleraProps {
  onNavigate: (page: string, showId?: number) => void;
  shows: Show[];
}

export function Cartelera({ onNavigate, shows }: CarteleraProps) {
  const [filter, setFilter] = useState("all");

  const filteredShows = filter === "all" 
    ? shows 
    : shows.filter(show => show.theme.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#0A0A0A] text-white py-24 border-b-4 border-[#D4AF37]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full mb-6">
            <span className="text-[#D4AF37] text-sm tracking-wider font-medium">TODOS LOS EVENTOS</span>
          </div>
          <h1 className="text-6xl mb-6 text-[#D4AF37] font-['Playfair_Display'] tracking-tight">Cartelera Completa</h1>
          <p className="text-2xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            Explora nuestra programación completa y encuentra el espectáculo perfecto para ti
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b-2 border-[#E0E0E0] sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Tabs defaultValue="all" onValueChange={setFilter}>
            <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-5 gap-4 bg-transparent h-auto">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-[#0A0A0A] border-2 border-[#E0E0E0] data-[state=active]:border-[#D4AF37] h-12 text-base hover:border-[#D4AF37] transition-all rounded-lg"
              >
                Todos
              </TabsTrigger>
              <TabsTrigger 
                value="drama"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-[#0A0A0A] border-2 border-[#E0E0E0] data-[state=active]:border-[#D4AF37] h-12 text-base hover:border-[#D4AF37] transition-all rounded-lg"
              >
                Drama
              </TabsTrigger>
              <TabsTrigger 
                value="comedia"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-[#0A0A0A] border-2 border-[#E0E0E0] data-[state=active]:border-[#D4AF37] h-12 text-base hover:border-[#D4AF37] transition-all rounded-lg"
              >
                Comedia
              </TabsTrigger>
              <TabsTrigger 
                value="musical"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-[#0A0A0A] border-2 border-[#E0E0E0] data-[state=active]:border-[#D4AF37] h-12 text-base hover:border-[#D4AF37] transition-all rounded-lg"
              >
                Musical
              </TabsTrigger>
              <TabsTrigger 
                value="infantil"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-[#0A0A0A] border-2 border-[#E0E0E0] data-[state=active]:border-[#D4AF37] h-12 text-base hover:border-[#D4AF37] transition-all rounded-lg"
              >
                Infantil
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Shows Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <p className="text-lg text-[#666666]">
            <span className="text-[#D4AF37]">●</span> Mostrando <strong className="text-[#0A0A0A]">{filteredShows.length}</strong> espectáculo{filteredShows.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShows.map((show) => (
            <Card 
              key={show.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col border-2 border-[#E0E0E0] hover:border-[#D4AF37] group"
            >
              <div className="relative h-72 overflow-hidden bg-[#0A0A0A]">
                <ImageWithFallback
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50"></div>
                <div className="absolute top-6 left-6 right-6">
                  <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#0A0A0A] border-0 px-4 py-1 font-medium">
                    {show.theme}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-[#0A0A0A] font-['Playfair_Display'] leading-tight">
                  {show.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-base text-[#666666] leading-relaxed">
                  {show.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow pb-4">
                <div className="space-y-3">
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
    </div>
  );
}
