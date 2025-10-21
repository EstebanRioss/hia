import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { LogIn } from "lucide-react";

interface LoginProps {
  onLogin: (email: string, name: string) => void;
  onNavigate: (page: string) => void; // <-- Agregado
}

export function Login({ onLogin, onNavigate }: LoginProps) {
  const Item = [
    { id: "register", label: "Register"},
  ];
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      const name = formData.email.split("@")[0];
      const displayName =
        name.charAt(0).toUpperCase() + name.slice(1);
      onLogin(formData.email, displayName);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-light flex items-center justify-center px-4">
      <Card className="w-full max-w-md border-2 border-gold/20 shadow-xl">
        <CardHeader className="text-center pb-8 pt-10">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
              <LogIn className="w-10 h-10 text-black" />
            </div>
          </div>
          <CardTitle className="text-3xl">
            Iniciar Sesión
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Accede a tu cuenta del Teatro Mitre
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 text-base border-2 focus:border-gold"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-base">
                Contraseña
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="contraseña"
                value={formData.password}
                onChange={handleChange}
                required
                className="h-12 text-base border-2 focus:border-gold"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-14 text-lg bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-black shadow-lg"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Ingresar
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <button onClick={() => onNavigate("register")}
                className="text-gold-dark hover:underline"
              >
                Regístrate aquí
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
