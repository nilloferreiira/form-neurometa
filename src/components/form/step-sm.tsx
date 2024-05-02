import { StepComponentProps } from "@/utils/interfaceStepComponent";

export function StepSm({ step, currentStep, index }: StepComponentProps) {
  return (
    <div className="mx-3/4 flex items-center justify-center gap-2 p-2 mt-8 -mb-5 ml-2">
      <div
        className={`rounded-full size-6 p-4 bg-royleBlue text-zinc-50 flex items-center justify-center ${
          currentStep === index ? "opacity-100" : "opacity-20"
        }`}
      >
        {step.id}
      </div>
    </div>
  );
}
