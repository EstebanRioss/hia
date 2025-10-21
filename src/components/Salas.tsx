import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Armchair, Accessibility, Wifi, AirVent, Camera } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Room {
  id: number;
  name: string;
  capacity: number;
  description: string;
  features: string[];
  image: string;
  dimensions: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Sala Principal Mitre",
    capacity: 600,
    description: "Nuestra histórica sala principal, inaugurada en 1929, combina la elegancia arquitectónica de principios del siglo XX con tecnología moderna. Ideal para grandes producciones teatrales, conciertos sinfónicos y eventos culturales de la región NOA.",
    features: ["Aire acondicionado", "Accesibilidad", "Sistema de sonido profesional", "Iluminación escénica", "Butacas restauradas", "Acústica natural"],
    image: "https://images.unsplash.com/photo-1722321974501-059dff03e970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwaW50ZXJpb3IlMjBzZWF0c3xlbnwxfHx8fDE3NjEwNjYwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    dimensions: "22m x 28m"
  },
  {
    id: 2,
    name: "Sala de Cámara",
    capacity: 120,
    description: "Espacio íntimo ideal para obras de teatro experimental, recitales de música de cámara y presentaciones de artistas locales. Un ambiente acogedor que favorece el contacto directo entre artistas y público.",
    features: ["Climatización", "Accesibilidad", "Sonido adaptable", "Iluminación flexible", "Butacas confortables"],
    image: "https://images.unsplash.com/photo-1458639817867-2c9d4c5dcad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwaGFsbHxlbnwxfHx8fDE3NjEwNjYwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    dimensions: "10m x 14m"
  }
];

export function Salas() {
  const getFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes("accesib")) return <Accessibility className="w-5 h-5 text-gold" />;
    if (feature.toLowerCase().includes("aire") || feature.toLowerCase().includes("acondicionado") || feature.toLowerCase().includes("climat")) return <AirVent className="w-5 h-5 text-gold" />;
    if (feature.toLowerCase().includes("wifi")) return <Wifi className="w-5 h-5 text-gold" />;
    if (feature.toLowerCase().includes("asiento") || feature.toLowerCase().includes("butaca")) return <Armchair className="w-5 h-5 text-gold" />;
    return <Camera className="w-5 h-5 text-gold" />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-black-soft to-black text-white py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 bg-gold/10 border border-gold rounded-full mb-4">
            <span className="text-gold text-sm tracking-wider">ESPACIOS ÚNICOS</span>
          </div>
          <h1 className="text-5xl mb-6 text-gold">Nuestras Salas</h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Espacios con historia diseñados para ofrecer la mejor experiencia cultural
          </p>
        </div>
      </div>

      {/* Rooms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-gold/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-gradient-to-r from-gold to-gold-dark text-black border-0 px-4 py-2 text-base">
                      <Users className="w-4 h-4 mr-2" />
                      {room.capacity} personas
                    </Badge>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-3xl text-black mb-4">{room.name}</CardTitle>
                    <CardDescription className="text-lg text-gray-700 leading-relaxed">{room.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="mb-6 p-4 bg-gray-light rounded-lg border border-gold/20">
                      <p className="text-base text-gray-700 mb-2">
                        <span className="text-gold">◆</span> <strong>Dimensiones:</strong> {room.dimensions}
                      </p>
                      <p className="text-base text-gray-700">
                        <span className="text-gold">◆</span> <strong>Capacidad:</strong> {room.capacity} espectadores
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg mb-4 text-black">Características y Servicios</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {room.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 text-base text-gray-700 p-2 rounded hover:bg-gray-light transition-colors"
                          >
                            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                              {getFeatureIcon(feature)}
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-black via-black-soft to-black rounded-2xl p-10 border-4 border-gold shadow-2xl">
          <h3 className="text-3xl mb-8 text-center text-gold">Sobre el Teatro Mitre</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 rounded-xl border border-gold/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-2xl text-black">🏛️</span>
              </div>
              <h4 className="mb-3 text-xl text-gold">Historia</h4>
              <p className="text-base text-gray-300 leading-relaxed">
                Fundado en 1929, el Teatro Mitre es un símbolo cultural de Jujuy y el norte argentino, preservando su arquitectura original con comodidades modernas.
              </p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-gold/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-2xl text-black">📍</span>
              </div>
              <h4 className="mb-3 text-xl text-gold">Ubicación</h4>
              <p className="text-base text-gray-300 leading-relaxed">
                Calle Alvear esquina Belgrano, centro de San Salvador de Jujuy. Estacionamiento cercano disponible en zona céntrica.
              </p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-gold/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-2xl text-black">✨</span>
              </div>
              <h4 className="mb-3 text-xl text-gold">Servicios</h4>
              <p className="text-base text-gray-300 leading-relaxed">
                Confitería, guardarropa, accesibilidad total, y atención personalizada para grupos escolares y contingentes turísticos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
