"use client";

import { cls } from "@/utils/dynamicTailwinds";
import { useEffect, useState } from "react";
import WritingTag from "./WritingTag";

interface StepSidebarProps {
  step: string;
}

const StepSidebar = ({ step }: StepSidebarProps) => {
  const [currentStep, setCurrentStep] = useState("stepOne");
  const stepArr = [
    { title: "모집 내용", step: 1, value: "stepOne" },
    { title: "모집 조건", step: 2, value: "stepTwo" },
    { title: "근무 조건", step: 3, value: "stepThree" },
  ];

  const updateURL = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("step", value);
    window.history.pushState({}, "", `?${params}`);
  };

  const handleClickStep = (value: string) => {
    setCurrentStep(value);
    updateURL(value);
  };

  useEffect(() => {
    updateURL(currentStep);
  }, [currentStep]);

  return (
    <div className="hidden h-[966px] w-[452px] flex-col justify-between rounded-3xl bg-background-200 p-8 pc:flex">
      <div className="flex flex-col space-y-2">
        {stepArr.map((item) => (
          <button
            key={item.value}
            className={cls(
              "group flex items-center justify-between rounded-2xl bg-background-200 px-8 py-5 transition-all hover:bg-orange-300",
              currentStep === item.value ? "bg-orange-300" : ""
            )}
            onClick={() => handleClickStep(item.value)}
          >
            <div className="flex items-center space-x-6">
              <span
                className={cls(
                  "flex size-7 items-center justify-center rounded-full bg-background-300 text-gray-200 transition-colors group-hover:bg-orange-50 group-hover:text-orange-300",
                  currentStep === item.value
                    ? "bg-orange-50 text-orange-300"
                    : ""
                )}
              >
                {item.step}
              </span>
              <h2
                className={cls(
                  "text-xl font-bold text-black-100 transition-colors group-hover:text-white",
                  currentStep === item.value ? "text-white" : ""
                )}
              >
                {item.title}
              </h2>
            </div>
            <WritingTag currentStep={currentStep} value={item.value} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepSidebar;
