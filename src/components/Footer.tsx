import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Información del Teatro */}
          <div>
            <h3 className="text-2xl text-[#D4AF37] mb-6 font-['Playfair_Display']">Teatro Mitre</h3>
            <p className="text-[#E0E0E0] mb-6 leading-relaxed">
              Un ícono cultural del norte argentino desde 1929. Dedicados a promover el arte, 
              la cultura y el entretenimiento de calidad en San Salvador de Jujuy.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#4A3B2A] hover:bg-[#7B1E26] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#4A3B2A] hover:bg-[#7B1E26] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#4A3B2A] hover:bg-[#7B1E26] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-2xl text-[#D4AF37] mb-6 font-['Playfair_Display']">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#E0E0E0]">Calle Alvear esquina Belgrano</p>
                  <p className="text-[#E0E0E0]">San Salvador de Jujuy, Jujuy</p>
                  <p className="text-[#E0E0E0]">Argentina (CP 4600)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <a href="tel:+543884221596" className="text-[#E0E0E0] hover:text-[#D4AF37] transition-colors">
                  +54 388 422-1596
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <a href="mailto:info@teatromitre.gob.ar" className="text-[#E0E0E0] hover:text-[#D4AF37] transition-colors">
                  info@teatromitre.gob.ar
                </a>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-2xl text-[#D4AF37] mb-6 font-['Playfair_Display']">Horarios de Atención</h3>
            <div className="space-y-3 text-[#E0E0E0]">
              <div>
                <p className="text-[#D4AF37] font-medium">Boletería</p>
                <p>Lunes a Viernes: 10:00 - 20:00 hs</p>
                <p>Sábados: 10:00 - 14:00 hs</p>
              </div>
              <div className="mt-4">
                <p className="text-[#D4AF37] font-medium">Funciones</p>
                <p>Consultar cartelera según</p>
                <p>programación mensual</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#4A3B2A] text-center">
          <p className="text-[#E0E0E0] text-sm">
            © {new Date().getFullYear()} Teatro Mitre - San Salvador de Jujuy. Todos los derechos reservados.
          </p>
          <p className="text-[#666666] text-xs mt-2">
            Sitio web desarrollado como proyecto académico
          </p>
        </div>
      </div>
    </footer>
  );
}
