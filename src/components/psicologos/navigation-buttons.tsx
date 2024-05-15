import { Button } from "../ui/button";

interface NavigationButtonProps {
    currentStep: number,
    handlePrevStep: () => void,
    handleNextStep: () => void
}

export function NavigationButtons({currentStep, handlePrevStep, handleNextStep}: NavigationButtonProps) {
  return (
    <div className="w-full flex justify-between gap-20">
      <Button
        disabled={currentStep === 0}
        onClick={handlePrevStep}
      >
        Anterior
      </Button>
      <Button
        disabled={currentStep === 2}
        onClick={handleNextStep}
      >
        Próximo
      </Button>
    </div>
  );
}
