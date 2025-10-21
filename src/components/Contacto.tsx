import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#0A0A0A] via-[#1a1a1a] to-[#0A0A0A] text-white py-24 border-b-4 border-[#D4AF37]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full mb-6">
            <span className="text-[#D4AF37] text-sm tracking-wider font-medium">CONTÁCTANOS</span>
          </div>
          <h1 className="text-6xl mb-6 text-[#D4AF37] font-['Playfair_Display'] tracking-tight">Estamos Aquí para Ti</h1>
          <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto leading-relaxed">
            ¿Tienes preguntas, sugerencias o deseas más información? Nos encantaría escucharte.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl mb-6 text-[#0A0A0A] font-['Playfair_Display']">Información de Contacto</h2>
              <p className="text-[#666666] mb-8 leading-relaxed text-lg">
                Nuestro equipo está disponible para atenderte y brindarte la mejor experiencia teatral.
              </p>
            </div>

            <Card className="border-2 border-[#E0E0E0] hover:border-[#D4AF37] transition-all shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#0A0A0A] font-['Playfair_Display']">Dirección</h3>
                    <p className="text-[#666666] leading-relaxed">
                      Calle Alvear esquina Belgrano<br />
                      San Salvador de Jujuy, Jujuy<br />
                      Argentina (CP 4600)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#0A0A0A] font-['Playfair_Display']">Teléfono</h3>
                    <a href="tel:+543884221596" className="text-[#7B1E26] hover:text-[#D4AF37] transition-colors text-lg">
                      +54 388 422-1596
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#0A0A0A] font-['Playfair_Display']">Email</h3>
                    <a href="mailto:info@teatromitre.gob.ar" className="text-[#7B1E26] hover:text-[#D4AF37] transition-colors text-lg">
                      info@teatromitre.gob.ar
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#0A0A0A] font-['Playfair_Display']">Horarios de Boletería</h3>
                    <p className="text-[#666666]">
                      Lunes a Viernes: 10:00 - 20:00 hs<br />
                      Sábados: 10:00 - 14:00 hs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de Contacto */}
          <Card className="border-2 border-[#D4AF37]/30 shadow-2xl">
            <CardHeader className="pb-6 bg-gradient-to-br from-[#4A3B2A]/5 to-transparent">
              <CardTitle className="text-3xl text-[#0A0A0A] font-['Playfair_Display']">Envíanos un Mensaje</CardTitle>
              <CardDescription className="text-base text-[#666666] mt-2">
                Completa el formulario y te responderemos a la brevedad
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-[#0A0A0A]" />
                  </div>
                  <h3 className="text-2xl mb-3 text-[#0A0A0A] font-['Playfair_Display']">¡Mensaje Enviado!</h3>
                  <p className="text-[#666666] text-lg">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="nombre" className="text-base text-[#0A0A0A]">Nombre Completo *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="h-14 text-base border-2 border-[#E0E0E0] focus:border-[#D4AF37] bg-white"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base text-[#0A0A0A]">Correo Electrónico *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 text-base border-2 border-[#E0E0E0] focus:border-[#D4AF37] bg-white"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="asunto" className="text-base text-[#0A0A0A]">Asunto *</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      type="text"
                      placeholder="Motivo de tu consulta"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="h-14 text-base border-2 border-[#E0E0E0] focus:border-[#D4AF37] bg-white"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="mensaje" className="text-base text-[#0A0A0A]">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Escribe tu mensaje aquí..."
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="text-base border-2 border-[#E0E0E0] focus:border-[#D4AF37] resize-none bg-white"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-16 text-lg bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#7B1E26] hover:to-[#7B1E26] text-[#0A0A0A] hover:text-white shadow-xl transition-all"
                  >
                    <Send className="w-6 h-6 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
