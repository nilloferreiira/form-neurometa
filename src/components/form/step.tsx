import { StepProps } from "@/utils/interfaceSteps";


interface NavStepsProps {
    step: StepProps;
    currentStep: number;
    index: number
}

export function Step({ step, currentStep, index }: NavStepsProps) {
  return (
    <div
    key={step.id}
    className="w-1/2 flex flex-col items-center justify-center text-center"
  >
    <div className="w-full flex items-center justify-center p-2 space-x-2 text-center">
      <div
        className={`rounded-full size-6 bg-royleBlue text-zinc-50 flex items-center justify-center ${
          currentStep === index ? "opacity-100" : "opacity-20"
        }`}
      >
        {step.id}
      </div>{" "}
      <span>{step.stepName}</span>
    </div>
    <div
      className={`w-full h-1  ${
        currentStep === index ? "bg-royleBlue/70" : "bg-royleBlue/20"
      }`}
    />
  </div>
      
    
  );
}
