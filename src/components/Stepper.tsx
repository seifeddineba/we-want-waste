import { memo } from "react";
import CalendarIcon from "../assets/icons/CalendarIcon";
import CreditCardIcon from "../assets/icons/CreditCardIcon";
import DotLocationIcon from "../assets/icons/DotLocationIcon";
import ShieldIcon from "../assets/icons/ShieldIcon";
import TrashIcon from "../assets/icons/TrashIcon";
import TruckIcon from "../assets/icons/TruckIcon";

type Step = {
  label: string;
  Icon: React.FC<{ color: string }>;
};

const steps: Step[] = [
  { label: "Postcode", Icon: DotLocationIcon },
  { label: "Waste Type", Icon: TrashIcon },
  { label: "Select Skip", Icon: TruckIcon },
  { label: "Permit Check", Icon: ShieldIcon },
  { label: "Choose Date", Icon: CalendarIcon },
  { label: "Payment", Icon: CreditCardIcon },
];

interface StepperProps {
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

function Stepper({ currentStep, onStepClick }: StepperProps) {
  return (
    <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
      {steps.map((step, index) => {
        const disabled = index > currentStep;
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
         const { Icon } = step;

        const iconColor = isCompleted ? "#fff": isActive ? "#5046E4" : "#ebecf0";

        return (
          <li
            key={index}
            className={`flex w-full relative ${
              index < steps.length - 1
                ? `after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute after:left-7 ${
                    isCompleted ? "after:bg-indigo-600" : "after:bg-gray-200"
                  } lg:after:top-5 after:top-3`
                : ""
            }`}
          >
            <button
              type="button"
              disabled={disabled}
              onClick={() => onStepClick(index)}
              className="block whitespace-nowrap z-10 text-center focus:outline-none"
            >
              <span
                className={`w-6 h-6 lg:w-10 lg:h-10 mb-3 mx-auto rounded-full flex items-center justify-center border-2 text-sm ${
                  isCompleted
                    ? "bg-indigo-600 text-white border-transparent"
                    : isActive
                    ? "bg-indigo-50 text-indigo-600 border-indigo-600"
                    : "bg-gray-50 text-gray-400 border-gray-200"
                }`}
              >
                <Icon color={iconColor} />
              </span>
              <span
                className={`${
                  isActive
                    ? "text-indigo-600"
                    : isCompleted
                    ? "text-gray-800"
                    : "text-gray-400"
                } hidden sm:block`}
              >
                {step.label}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
export default memo(Stepper);
