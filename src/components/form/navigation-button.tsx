import { Button } from "../ui/button";

interface NavigationButtonProps {
    currentStep: number,
    handlePrevStep: () => void,
    handleNextStep: () => void
}

export function NavigationButton({currentStep, handlePrevStep, handleNextStep}: NavigationButtonProps) {
  return (
    <div className="space-x-10">
      <Button
        disabled={currentStep === 0}
        className="bg-royleBlue hover:bg-royleBlue/90"
        onClick={handlePrevStep}
      >
        Anterior
      </Button>
      <Button
        className="bg-royleBlue hover:bg-royleBlue/90"
        disabled={currentStep === 2}
        onClick={handleNextStep}
      >
        {currentStep === 1 ? "Enviar" : "Próximo"}
      </Button>
    </div>
  );
}
