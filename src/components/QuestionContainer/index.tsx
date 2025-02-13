'use client';

import { useQuestionContext } from "@/app/providers/QuestionProvider";
import ProgressTracker, { ProgressStep } from "@/components/ProgressTracker";
import QuestionDetails from "@/components/QuestionDetails";
import QuestionForm from "@/components/QuestionForm";

export default function QuestionContainer() {
  const { categoryList, currentCategory } = useQuestionContext();

  const progressSteps: Array<ProgressStep> = categoryList.map((category) => {
    const step: ProgressStep = {
      value: category.order_value,
      name: category.name,
    };

    return step;
  })

  return (
    <div>
      <QuestionDetails />
      <QuestionForm />
      <ProgressTracker fields={{
        current_step_value: currentCategory.order_value,
        steps: progressSteps,
      }} />
    </div>
  );
}