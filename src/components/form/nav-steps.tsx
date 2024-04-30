import { StepProps } from "@/utils/interfaceSteps";
import { Step } from "./step";

interface NavStepsProps {
  steps: StepProps[];
  currentStep: number;
}

export function NavSteps({ steps, currentStep }: NavStepsProps) {
  return (
    <nav className="w-1/2 mx-auto flex items-center justify-around gap-2 p-6">
      {steps.map((step, index) => (
       <Step key={step.id} step={step} currentStep={currentStep} index={index} /> 
    ))}
    </nav>
  );
}
