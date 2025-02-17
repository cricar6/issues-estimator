'use client';

import { useQuestionContext } from "@/app/providers/QuestionProvider";
import styles from './styles.module.scss';
import Icon from "@/app/icons";

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
    <div className={styles.QuestionDetails}>
      <div className={`${styles.QuestionDetails__Title} ${styles.QuestionDetails__Content}`}>
        <p className="heading-3">{currentQuestion.title}</p>
      </div>
      <div className={styles.QuestionDetails__Content}>
        <div className={styles.CategoryDescription}>
          <div className={styles.CategoryDescription__Icon}>
            <Icon name={currentCategory.icon_name} size="2rem"/>
          </div>
          <p className={`${styles.CategoryDescription__Title} heading-5`}>{currentCategory.name}</p>
          <p className={`${styles.CategoryDescription__Content} body`}>{currentCategory.description}</p>
        </div>
        <div className={styles.IssueDescription}>
          <p className={`${styles.IssueDescription__Title} body`}>You are estimating</p>
          <div className={`${styles.IssueDescription__Name} body`} contentEditable data-placeholder={currentIssue.name} />
        </div>
        
        <button
          onClick={handlePrevQuestion}
          disabled={disablePrevQuestion}
          className={`button-high-priority`}
          >
            Prev Question
        </button>
        <button  className={`button-high-priority`} onClick={handleNextQuestion} disabled={disableNextQuestion}>Next Question</button>
      </div>
    </div>
  );
}