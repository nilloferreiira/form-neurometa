import { StepProps } from "@/utils/interfaceSteps";
import { useState, useEffect } from "react";
import { StepLg } from "./step-lg";
import { StepSm } from "./step-sm";

interface NavStepsProps {
  steps: StepProps[];
  currentStep: number;
}

export function NavSteps({ steps, currentStep }: NavStepsProps) {
  const [windowSize, setWindowSize] = useState<{ width: number }>({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-3/4 md:w-1/2 mx-auto flex items-end justify-around gap-4 p-2 md:p-6 text-center text-sm md:text-base">
      {windowSize.width > 768 ? (
        <>
          {steps.map((step, index) => (
            <StepLg
              key={step.id}
              step={step}
              currentStep={currentStep}
              index={index}
            />
          ))}
        </>
      ) : (
        <>
          {steps.map((step, index) => (
            <StepSm
              key={step.id}
              step={step}
              currentStep={currentStep}
              index={index}
            />
          ))}
        </>
      )}
    </nav>
  );
}
