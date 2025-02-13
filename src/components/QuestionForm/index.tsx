'use client';

import { useQuestionContext } from "@/app/providers/QuestionProvider";

export interface QuestionFormProps {
    question_data: QuestionProps;
}

export default function QuestionForm() {
    const { currentQuestion, answerQuestion } = useQuestionContext();

    return (
        <div>
            <p>{currentQuestion.title}</p>
            {currentQuestion.options.map((question) => (
                <button onClick={() => answerQuestion(question.value)} key={question.title + question.value}>
                    {question.value} - {question.title}
                </button>
            ))}
        </div>
    );
}