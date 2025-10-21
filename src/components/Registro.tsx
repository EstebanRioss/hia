import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2, UserPlus } from "lucide-react";

interface RegistroProps {
  onNavigate: (page: string) => void;
}

export function Registro({ onNavigate }: RegistroProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    acceptTerms: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.acceptTerms) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-light flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-2 border-gold/20 shadow-2xl">
          <CardHeader className="text-center pb-8 pt-10">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-black" />
              </div>
            </div>
            <CardTitle className="text-3xl text-black">¡Registro Exitoso!</CardTitle>
            <CardDescription className="text-base mt-2">
              Bienvenido al Teatro Mitre
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pb-10">
            <p className="text-gray-700 mb-8 text-base">
              Tu cuenta ha sido creada exitosamente. Hemos enviado un correo de confirmación a <strong className="text-black">{formData.email}</strong>
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={() => onNavigate("home")}
                className="flex-1 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-black h-14 text-base shadow-lg"
              >
                Ir al Inicio
              </Button>
              <Button 
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="flex-1 border-2 border-gold text-black hover:bg-gold/10 h-14 text-base"
              >
                Nuevo Registro
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-black-soft to-black text-white py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 bg-gold/10 border border-gold rounded-full mb-4">
            <span className="text-gold text-sm tracking-wider">ÚNETE A NOSOTROS</span>
          </div>
          <h1 className="text-5xl mb-6 text-gold">Crear Cuenta</h1>
          <p className="text-2xl text-gray-300">
            Regístrate para acceder a beneficios exclusivos y comprar entradas fácilmente
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-2 border-gold/20 shadow-xl">
          <CardHeader className="pb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-black" />
              </div>
              <div>
                <CardTitle className="text-2xl text-black">Información Personal</CardTitle>
                <CardDescription className="text-base mt-1">
                  Solo necesitamos algunos datos básicos
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Nombre Completo */}
              <div className="space-y-3">
                <Label htmlFor="nombre" className="text-base text-black">Nombre Completo *</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="h-14 text-base border-2 focus:border-gold"
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <Label htmlFor="email" className="text-base text-black">Correo Electrónico *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-14 text-base border-2 focus:border-gold"
                />
              </div>

              {/* Password */}
              <div className="space-y-3">
                <Label htmlFor="password" className="text-base text-black">Contraseña *</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="h-14 text-base border-2 focus:border-gold"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 p-4 bg-gray-light rounded-lg border border-gold/20">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, acceptTerms: checked as boolean }))
                  }
                  className="mt-1"
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                >
                  Acepto los términos y condiciones del Teatro Mitre. Entiendo que mis datos serán utilizados únicamente para la gestión de entradas y comunicaciones del teatro.
                </Label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={!formData.acceptTerms}
                className="w-full h-16 text-lg bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-black shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <UserPlus className="w-6 h-6 mr-2" />
                Crear Mi Cuenta
              </Button>

              <p className="text-center text-sm text-gray-600">
                ¿Ya tienes cuenta?{" "}
                <button 
                  type="button"
                  onClick={() => onNavigate("login")}
                  className="text-gold-dark hover:underline"
                >
                  Inicia sesión aquí
                </button>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
