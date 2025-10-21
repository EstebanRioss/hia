import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { CheckCircle2, Download, Mail, Calendar, Clock, MapPin, Ticket } from "lucide-react";

interface ConfirmacionProps {
  purchaseData: any;
  onNavigate: (page: string) => void;
}

export function Confirmacion({ purchaseData, onNavigate }: ConfirmacionProps) {
  const orderNumber = `TM${Date.now().toString().slice(-8)}`;
  const currentDate = new Date().toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl mb-2">¡Compra Confirmada!</h1>
          <p className="text-gray-600">
            Tu compra se ha procesado exitosamente
          </p>
        </div>

        {/* Order Details */}
        <Card className="mb-6">
          <CardHeader className="bg-purple-50">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Confirmación de Pedido</CardTitle>
                <CardDescription className="mt-2">
                  Número de orden: <strong>{orderNumber}</strong>
                </CardDescription>
              </div>
              <Badge className="bg-green-600">Confirmado</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            {/* Event Details */}
            <div>
              <h3 className="mb-4 flex items-center gap-2">
                <Ticket className="w-5 h-5" />
                Detalles del Espectáculo
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Espectáculo</p>
                  <p>{purchaseData.show.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Fecha
                    </p>
                    <p className="text-sm">{purchaseData.show.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Horario
                    </p>
                    <p className="text-sm">{purchaseData.show.time} hs</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Sala
                  </p>
                  <p className="text-sm">{purchaseData.show.room}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Ticket Details */}
            <div>
              <h3 className="mb-4">Entradas</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tipo de ubicación:</span>
                  <span className="capitalize">{purchaseData.seatType}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Cantidad:</span>
                  <span>{purchaseData.quantity} entrada{purchaseData.quantity > 1 ? "s" : ""}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment Details */}
            <div>
              <h3 className="mb-4">Detalles de Pago</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Método de pago:</span>
                  <span className="capitalize">
                    {purchaseData.paymentMethod === "credit" && "Tarjeta de Crédito"}
                    {purchaseData.paymentMethod === "debit" && "Transferencia Bancaria"}
                    {purchaseData.paymentMethod === "wallet" && "Billetera Digital"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Fecha de compra:</span>
                  <span>{currentDate}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span>Total pagado:</span>
                  <span className="text-purple-700">${purchaseData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Buyer Info */}
            <div>
              <h3 className="mb-4">Datos del Comprador</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nombre:</span>
                  <span>{purchaseData.nombre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    Email:
                  </span>
                  <span>{purchaseData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Teléfono:</span>
                  <span>{purchaseData.telefono}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Alert */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm mb-1">Entradas enviadas por email</h4>
              <p className="text-sm text-gray-700">
                Hemos enviado tus entradas digitales a <strong>{purchaseData.email}</strong>. 
                Por favor, revisa tu bandeja de entrada y la carpeta de spam.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Presenta las entradas desde tu dispositivo móvil o impresas el día del evento.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.print()}
          >
            <Download className="w-4 h-4 mr-2" />
            Descargar Comprobante
          </Button>
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700"
            onClick={() => onNavigate("home")}
          >
            Volver al Inicio
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>¿Necesitas ayuda? Contáctanos:</p>
          <p className="mt-1">
            Email: <a href="mailto:info@teatromitre.gob.ar" className="text-purple-600 hover:underline">info@teatromitre.gob.ar</a> | 
            Tel: <a href="tel:+543884221596" className="text-purple-600 hover:underline"> +54 388 422-1596</a>
          </p>
          <p className="mt-1 text-xs">
            Calle Alvear esq. Belgrano - San Salvador de Jujuy
          </p>
        </div>
      </div>
    </div>
  );
}
