import {
  Theater,
  Home,
  Calendar,
  User,
  LogOut,
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  userName?: string;
  onLogout?: () => void;
}

export function Navigation({
  currentPage,
  onNavigate,
  userName,
  onLogout,
}: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "cartelera", label: "Cartelera", icon: Calendar },
    { id: "salas", label: "Salas", icon: Theater },
    { id: "contacto", label: "Contacto", icon: Mail },
  ];

  return (
    <nav className="bg-[#0A0A0A] text-white shadow-2xl sticky top-0 z-50 border-b-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-4 hover:opacity-90 transition-opacity group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Theater className="w-8 h-8 text-[#0A0A0A]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl text-[#D4AF37] font-['Playfair_Display'] tracking-tight">
                Teatro Mitre
              </span>
            </div>
          </button>

          {/* Navigation Items */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all font-medium ${
                    isActive
                      ? "bg-[#D4AF37] text-[#0A0A0A]"
                      : "text-[#E0E0E0] hover:bg-[#4A3B2A] hover:text-[#D4AF37]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden md:inline">
                    {item.label}
                  </span>
                </button>
              );
            })}

            {/* User Menu */}
            {userName ? (
              <div className="flex items-center gap-3 ml-4 pl-4 border-l-2 border-[#4A3B2A]">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#4A3B2A] rounded-lg border border-[#D4AF37]/30">
                  <User className="w-5 h-5 text-[#D4AF37]" />
                  <span className="hidden sm:inline text-[#E0E0E0]">
                    {userName}
                  </span>
                </div>
                <Button
                  onClick={onLogout}
                  variant="default"
                  size="sm"
                  className="bg-[#D4AF37] text-[#0A0A0A] font-semibold border border-[#D4AF37] hover:bg-[#B8962F] hover:text-white hover:border-[#B8962F] shadow-md transition-all duration-200"
                >
                  <LogOut className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">
                    Salir
                  </span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => onNavigate("login")}
                className="ml-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#7B1E26] hover:to-[#7B1E26] text-[#0A0A0A] hover:text-white px-6 py-3 h-auto transition-all"
              >
                <User className="w-5 h-5 mr-2" />
                Iniciar Sesión
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}