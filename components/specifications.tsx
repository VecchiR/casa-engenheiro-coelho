import { Home, Bed, Bath, Car, Grid, CookingPot, Sofa, Utensils, WashingMachine } from "lucide-react"

interface SpecificationsProps {
  details: {
    quartos: number
    banheiros: number
    salaEstar: boolean
    salaJantar: boolean
    cozinha: string
    vagasGaragem: number
    areaServico: string
    lote: string
    construção: string
  }
}

export default function Specifications({ details }: SpecificationsProps) {
  const specs = [
    { icon: <Grid className="h-6 w-6" />, label: `Lote de ${details.lote}` },
    { icon: <Home className="h-6 w-6" />, label: `${details.construção} construídos` },
    { icon: <Bed className="h-6 w-6" />, label: `${details.quartos} quartos` },
    { icon: <Bath className="h-6 w-6" />, label: `${details.banheiros} banheiro${details.banheiros > 1 ? "s" : ""}` },
    { icon: <Car className="h-6 w-6" />, label: `${details.vagasGaragem} vagas` },
    { icon: <CookingPot className="h-6 w-6" />, label: `Cozinha ${details.cozinha}` },
    { icon: <Sofa className="h-6 w-6" />, label: `Sala de Estar` },
    { icon: <Utensils className="h-6 w-6" />, label: `Sala de Jantar` },
    { icon: <WashingMachine className="h-6 w-6" />, label: `Área de Serviço ${details.areaServico}` }
  ]

  return (
    <section id="specs" className="py-16 px-4  scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-text-300">Especificações do Imóvel</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
          {specs.map((spec, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="text-primary mb-2">{spec.icon}</div>
              <p className="font-medium text-text-200">{spec.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
