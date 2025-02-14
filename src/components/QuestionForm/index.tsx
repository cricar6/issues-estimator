'use client';

import { useQuestionContext } from "@/app/providers/QuestionProvider";
import styles from './styles.module.scss';
import { useState } from "react";

export interface QuestionFormProps {
    question_data: QuestionProps;
}

export default function QuestionForm() {
    const { currentQuestion, answerQuestion } = useQuestionContext();

    const handleClick = (value: number) => {
        answerQuestion(value);
    };

    return (
        <div className={styles.QuestionForm}>
            <p className="heading-4">{currentQuestion.title}</p>
            {currentQuestion.options.map((question) => (
                <button
                    key={question.title + question.value}
                    className={`${styles.QuestionOption} body ${currentQuestion.answer === question.value ? styles.QuestionOptionSelected : ""}`}
                    onClick={() => handleClick(question.value)}
                >
                    {question.value} - {question.title}
                </button>
            ))}
        </div>
    );
}