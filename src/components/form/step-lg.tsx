import { StepComponentProps } from "@/utils/interfaceStepComponent";

export function StepLg({ step, currentStep, index }: StepComponentProps) {
  return (
    <div
    key={step.id}
    className="w-[30%] md:w-1/2 flex flex-col items-center gap-2 justify-center text-center"
  >
    <div className="w-full flex items-center justify-center gap-2 text-center">
      <div
        className={`rounded-full size-6 p-2 bg-royleBlue text-zinc-50 flex items-center justify-center ${
          currentStep === index ? "opacity-100" : "opacity-20"
        }`}
      >
        {step.id}
      </div>
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
