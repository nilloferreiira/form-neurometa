import { StepProps } from "@/utils/interfaceSteps";
import { useState, useEffect } from "react";
import { StepLg } from "./step-lg";
import { StepSm } from "./step-sm";

interface NavStepsProps {
  steps: StepProps[];
  currentStep: number;
}

export function NavSteps({ steps, currentStep }: NavStepsProps) {
  return (
    <nav className="w-3/4 md:w-1/2 mx-auto flex items-end justify-around gap-4 p-2 md:p-6 text-center text-sm md:text-base">
      {steps.map((step, index) => (
        <StepLg
          key={step.id}
          step={step}
          currentStep={currentStep}
          index={index}
        />
      ))}
    </nav>
  );
}
