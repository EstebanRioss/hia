import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Salas } from "./components/Salas";
import { Registro } from "./components/Registro";
import { Cartelera } from "./components/Cartelera";
import { CompraEntrada } from "./components/CompraEntrada";
import { Confirmacion } from "./components/Confirmacion";
import { Login } from "./components/Login";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

// Mock data for shows - Teatro Mitre Jujuy
const shows = [
  {
    id: 1,
    title: "La Rebelión de Tupac Amaru",
    theme: "Drama Histórico",
    cast: ["Elenco del Norte Argentino", "Dir: Carlos Sánchez"],
    date: "15 de Noviembre, 2025",
    time: "20:30",
    room: "Sala Principal Mitre",
    price: 8000,
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2FsJTIwdGhlYXRlcnxlbnwxfHx8fDE3NjA5ODE2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Una producción especial que recrea la historia del líder indígena andino y su lucha por la libertad. Una obra que conecta con las raíces del norte argentino."
  },
  {
    id: 2,
    title: "Folklore en Danza",
    theme: "Ballet Folklórico",
    cast: ["Ballet Folklórico de Jujuy", "Músicos en Vivo"],
    date: "20 de Noviembre, 2025",
    time: "21:00",
    room: "Sala Principal Mitre",
    price: 9000,
    image: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsZXQlMjBkYW5jZXJzfGVufDF8fHx8MTc2MTA2NjAwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Espectáculo de danzas folklóricas del NOA con coreografías de zambas, chacareras y huaynos. Música en vivo con instrumentos autóctonos."
  },
  {
    id: 3,
    title: "La Casa de Bernarda Alba",
    theme: "Drama",
    cast: ["Compañía Provincial de Teatro"],
    date: "22 de Noviembre, 2025",
    time: "20:00",
    room: "Sala de Cámara",
    price: 6500,
    image: "https://images.unsplash.com/photo-1698678302519-0ce1fe8d6f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjEwMzA2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "La obra magistral de Federico García Lorca interpretada por la Compañía Provincial. Una reflexión sobre la opresión y la libertad."
  },
  {
    id: 4,
    title: "Cuentos de la Puna",
    theme: "Drama Regional",
    cast: ["Teatro Independiente Jujuy"],
    date: "25 de Noviembre, 2025",
    time: "20:30",
    room: "Sala de Cámara",
    price: 5000,
    image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjEwMDkxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Relatos andinos que rescatan leyendas y tradiciones de la Quebrada de Humahuaca y la Puna jujeña. Producción local con actores de la región."
  },
  {
    id: 5,
    title: "Tango en el Mitre",
    theme: "Musical",
    cast: ["Orquesta Típica del Norte", "Bailarines invitados"],
    date: "28 de Noviembre, 2025",
    time: "21:30",
    room: "Sala Principal Mitre",
    price: 10000,
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2FsJTIwdGhlYXRlcnxlbnwxfHx8fDE3NjA5ODE2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Una noche especial con los mejores tangos interpretados en vivo. Incluye bailarines profesionales y un homenaje a Gardel y Piazzolla."
  },
  {
    id: 6,
    title: "El Principito",
    theme: "Infantil",
    cast: ["La Comedia de los Niños"],
    date: "30 de Noviembre, 2025",
    time: "17:00",
    room: "Sala de Cámara",
    price: 4500,
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2FsJTIwdGhlYXRlcnxlbnwxfHx8fDE3NjA5ODE2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Adaptación teatral del clásico de Saint-Exupéry. Una obra mágica para disfrutar en familia con música, títeres y efectos especiales."
  },
  {
    id: 7,
    title: "Martín Fierro",
    theme: "Drama Gauchesco",
    cast: ["Grupo Teatral Gaucho", "Músicos Folkloristas"],
    date: "2 de Diciembre, 2025",
    time: "20:00",
    room: "Sala Principal Mitre",
    price: 7500,
    image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjEwMDkxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "La epopeya gauchesca de José Hernández llevada al teatro con música folklórica en vivo. Una celebración de la identidad argentina."
  },
  {
    id: 8,
    title: "Humor Norteño",
    theme: "Comedia",
    cast: ["Comediantes de Jujuy", "Stand-up Local"],
    date: "5 de Diciembre, 2025",
    time: "21:30",
    room: "Sala de Cámara",
    price: 5500,
    image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjEwMDkxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Una noche de risas con humoristas locales. Sketches y monólogos que reflejan la idiosincrasia y el humor característico del norte argentino."
  },
  {
    id: 9,
    title: "Zamba para no Morir",
    theme: "Drama Musical",
    cast: ["Elenco Regional", "Conjunto Folklórico"],
    date: "8 de Diciembre, 2025",
    time: "20:30",
    room: "Sala Principal Mitre",
    price: 8500,
    image: "https://images.unsplash.com/photo-1698678302519-0ce1fe8d6f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjEwMzA2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Homenaje a Mercedes Sosa y los cantores del norte. Una obra que entrelaza teatro, música folklórica y la historia de la música popular argentina."
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedShowId, setSelectedShowId] = useState<number | null>(null);
  const [purchaseData, setPurchaseData] = useState<any>(null);
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  const handleNavigate = (page: string, showId?: number) => {
    setCurrentPage(page);
    if (showId !== undefined) {
      setSelectedShowId(showId);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = (email: string, name: string) => {
    setUserEmail(email);
    setUserName(name);
    setCurrentPage("home");
  };

  const handleLogout = () => {
    setUserEmail("");
    setUserName("");
    setCurrentPage("home");
  };

  const handlePurchaseConfirm = (data: any) => {
    setPurchaseData(data);
    setCurrentPage("confirmacion");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedShow = selectedShowId 
    ? shows.find(show => show.id === selectedShowId) || null
    : null;

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        userName={userName}
        onLogout={handleLogout}
      />
      
      {currentPage === "login" && (
       <Login onLogin={handleLogin} onNavigate={handleNavigate} />
      )}

      {currentPage === "register" && (
       <Registro onNavigate={handleNavigate} />
      )}
      
      {currentPage === "home" && (
        <Home onNavigate={handleNavigate} shows={shows} />
      )}
      
      {currentPage === "salas" && (
        <Salas />
      )}
      
      {currentPage === "cartelera" && (
        <Cartelera onNavigate={handleNavigate} shows={shows} />
      )}
      
      {currentPage === "compra" && (
        <CompraEntrada 
          show={selectedShow} 
          onNavigate={handleNavigate}
          onConfirm={handlePurchaseConfirm}
          userEmail={userEmail}
        />
      )}
      
      {currentPage === "confirmacion" && purchaseData && (
        <Confirmacion 
          purchaseData={purchaseData}
          onNavigate={handleNavigate}
        />
      )}
      
      {currentPage === "contacto" && (
        <Contacto />
      )}

      {currentPage !== "login" && <Footer />}
      <Toaster />
    </div>
  );
}

export default App;
