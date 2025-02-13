'use client';

import { QuestionProvider } from "@/app/providers/QuestionProvider";
import ProgressTracker, { ProgressStep } from "@/components/ProgressTracker";
import QuestionContainer from "@/components/QuestionContainer";

// will handle the change of the question state and provide it to QuestionContainer
export default function NewQuestionContainer() {
  return (
    <div>
      <QuestionProvider>
        <QuestionContainer />
      </QuestionProvider>
    </div>
  );
}