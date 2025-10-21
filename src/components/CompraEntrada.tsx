import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { Alert, AlertDescription } from "./ui/alert";
import { Badge } from "./ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  Wallet,
  Building2,
  ShoppingCart,
  Minus,
  Plus,
} from "lucide-react";

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

interface CompraEntradaProps {
  show: Show | null;
  onNavigate: (page: string) => void;
  onConfirm: (data: any) => void;
}

export function CompraEntrada({
  show,
  onNavigate,
  onConfirm,
}: CompraEntradaProps) {
  const [quantity, setQuantity] = useState(1);
  const [seatType, setSeatType] = useState("platea");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });

  if (!show) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Espectáculo no encontrado</CardTitle>
            <CardDescription>
              Por favor, seleccione un espectáculo de la
              cartelera
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => onNavigate("cartelera")}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Ver Cartelera
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const seatPrices: { [key: string]: number } = {
    platea: show.price,
    pullman: show.price * 0.75,
    palco: show.price * 1.5,
  };

  const subtotal = seatPrices[seatType] * quantity;
  const serviceFee = subtotal * 0.1;
  const total = subtotal + serviceFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm({
      show,
      quantity,
      seatType,
      paymentMethod,
      total,
      ...formData,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => onNavigate("cartelera")}
            className="mb-4"
          >
            ← Volver a Cartelera
          </Button>
          <h1 className="text-3xl mb-2">Compra de Entradas</h1>
          <p className="text-gray-600">
            Complete los datos para finalizar su compra
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Show Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>{show.title}</CardTitle>
                <CardDescription>{show.theme}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>{show.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>{show.time} hs</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{show.room}</span>
                </div>
              </CardContent>
            </Card>

            {/* Ticket Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Selección de Entradas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Quantity */}
                <div className="space-y-2">
                  <Label>Cantidad de Entradas</Label>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setQuantity(Math.max(1, quantity - 1))
                      }
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-2xl w-12 text-center">
                      {quantity}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setQuantity(Math.min(10, quantity + 1))
                      }
                      disabled={quantity >= 10}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-gray-600">
                      Máximo 10 entradas
                    </span>
                  </div>
                </div>

                {/* Seat Type */}
                <div className="space-y-2">
                  <Label>Tipo de Ubicación</Label>
                  <Select
                    value={seatType}
                    onValueChange={setSeatType}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="platea">
                        Platea - ${seatPrices.platea}
                      </SelectItem>
                      <SelectItem value="pullman">
                        Pullman - ${seatPrices.pullman}
                      </SelectItem>
                      <SelectItem value="palco">
                        Palco - ${seatPrices.palco}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Personal Info */}
            <Card>
              <CardHeader>
                <CardTitle>Datos Personales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan.perez@ejemplo.com"
                  />
                  <p className="text-sm text-gray-600">
                    Recibirá las entradas en este correo
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Método de Pago</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-4">
                    <RadioGroupItem
                      value="credit"
                      id="credit"
                    />
                    <label
                      htmlFor="credit"
                      className="flex items-center gap-2 cursor-pointer flex-1"
                    >
                      <CreditCard className="w-5 h-5" />
                      <span>Tarjeta de Crédito/Débito</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4">
                    <RadioGroupItem value="debit" id="debit" />
                    <label
                      htmlFor="debit"
                      className="flex items-center gap-2 cursor-pointer flex-1"
                    >
                      <Building2 className="w-5 h-5" />
                      <span>Transferencia Bancaria</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4">
                    <RadioGroupItem
                      value="wallet"
                      id="wallet"
                    />
                    <label
                      htmlFor="wallet"
                      className="flex items-center gap-2 cursor-pointer flex-1"
                    >
                      <Wallet className="w-5 h-5" />
                      <span>
                        Billetera Digital (MercadoPago, etc.)
                      </span>
                    </label>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit" && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">
                        Número de Tarjeta *
                      </Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        required
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardExpiry">
                          Vencimiento *
                        </Label>
                        <Input
                          id="cardExpiry"
                          name="cardExpiry"
                          required
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          placeholder="MM/AA"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardCvv">CVV *</Label>
                        <Input
                          id="cardCvv"
                          name="cardCvv"
                          required
                          value={formData.cardCvv}
                          onChange={handleChange}
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Resumen de Compra
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Espectáculo
                  </p>
                  <p>{show.title}</p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tipo de entrada:</span>
                    <Badge
                      variant="secondary"
                      className="capitalize"
                    >
                      {seatType}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cantidad:</span>
                    <span>
                      {quantity} entrada
                      {quantity > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Precio unitario:</span>
                    <span>${seatPrices[seatType]}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Cargo por servicio (10%):</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-xl">
                  <span>Total:</span>
                  <span className="text-purple-700">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <Alert>
                  <AlertDescription className="text-sm">
                    Las entradas serán enviadas a su correo
                    electrónico al confirmar la compra.
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  size="lg"
                >
                  Confirmar Compra
                </Button>

                <p className="text-xs text-center text-gray-500">
                  Al confirmar aceptas nuestros términos y
                  condiciones
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}