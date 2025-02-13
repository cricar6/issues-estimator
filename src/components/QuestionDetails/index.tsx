'use client';

import { useQuestionContext } from "@/app/providers/QuestionProvider";

export interface QuestionDetailsProps {
    title: string;
    category: CategoryProps;
    issue: IssueProps;
    onNextQuestion: () => void;
    onPrevQuestion: () => void;
  
}

export default function QuestionDetails() {
    const {
        currentCategory,
        currentQuestion,
        currentIssue,
        handleNextQuestion,
        handlePrevQuestion,
        disableNextQuestion,
        disablePrevQuestion
    } = useQuestionContext();

  return (
    <div>
      <p>{currentQuestion.title}</p>
      <p>{currentCategory.icon_name}</p>
      <p>{currentCategory.name}</p>
      <p>{currentCategory.description}</p>
      <p>{currentIssue.name}</p>
      <button onClick={handlePrevQuestion} disabled={disablePrevQuestion}>Prev Question</button>
      <button onClick={handleNextQuestion} disabled={disableNextQuestion}>Next Question</button>
    </div>
  );
}