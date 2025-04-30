"use client"

import { useState } from "react"
import { Check, AlertCircle } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface EligibilityGroup {
  maxIncome: number
  subsídio: string
}

interface EligibilityFilterProps {
  groups: EligibilityGroup[]
  minDownPayment: string
  restrictions: string[]
}

export default function EligibilityFilter({ groups, minDownPayment, restrictions }: EligibilityFilterProps) {
  const [income, setIncome] = useState(2000)

  // Find eligible group based on income
  const eligibleGroup = groups.find((group) => income <= group.maxIncome) || groups[groups.length - 1]

  // Format currency
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  return (
    <section id="subsidio" className="py-16 px-4  scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-text-300">Verifique sua Elegibilidade</h2>
        <p className="text-center text-text-200 mb-10 max-w-2xl mx-auto">
          Descubra se você se qualifica para o programa Minha Casa Minha Vida e quanto de subsídio você pode receber.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Simulador de Subsídio</CardTitle>
              <CardDescription>Arraste o controle deslizante para ajustar sua renda familiar mensal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-text-300/80">R$ 1.000</span>
                  <span className="text-sm text-text-300/80">R$ 8.000</span>
                </div>
                <Slider
                  value={[income]}
                  min={1000}
                  max={8000}
                  step={100}
                  onValueChange={(value) => setIncome(value[0])}
                  className="mb-2 cursor-pointer"
                />
                <div className="text-center font-medium text-lg text-text-300">Renda familiar: {formatCurrency(income)}</div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-text-300">Resultado da Simulação</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Subsídio estimado:</p>
                      <p className="text-2xl font-bold text-primary">{eligibleGroup.subsídio}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Entrada mínima:</p>
                      <p>{minDownPayment} do valor do imóvel</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Requisitos</CardTitle>
              <CardDescription>Critérios para se qualificar ao programa</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {restrictions.map((restriction, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-gray-100 p-1 rounded-full mr-2 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{restriction}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
