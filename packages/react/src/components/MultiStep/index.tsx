import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}


//let length = 8
//const result = Array.from({length}, (_, i) => i + 1)
// O segundo argumento da função Array.from() é uma função de mapeamento que é chamada para cada item no array resultante. Neste caso, o argumento _ é ignorado (é comum usar _ para argumentos não utilizados) e i é o índice do item. i + 1 é usado para gerar uma sequência de números começando de 1, já que os índices começam de 0.
//console.log(result)