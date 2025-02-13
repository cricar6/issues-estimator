'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface QuestionContextProps {
  currentCategory: CategoryProps;
  currentQuestion: QuestionProps;
  currentIssue: IssueProps;
  categoryList: Array<CategoryProps>;
  handleNextQuestion: () => void;
  handlePrevQuestion: () => void;
  answerQuestion: (optionValue: number) => void;
  disableNextQuestion: boolean;
  disablePrevQuestion: boolean;
}

// Create Context
const QuestionContext = createContext<QuestionContextProps | undefined>(undefined);

// Hook for easy usage
export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuestionContext must be used within a QuestionProvider");
  }
  return context;
};

// Provider Component
export const QuestionProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Array<CategoryProps>>([
    {
      icon_name: 'category icon name',
      name: 'Uncertainty',
      description: 'Defines how much we know about the thing to solve. Ask for a more complex description',
      order_value: 1,
      max_question_value: 3,
      questions: [
        {
          title: 'Is the solution well understood?',
          options: [
            { title: 'Yes', value: 1 },
            { title: 'Somewhat', value: 2 },
            { title: 'No, we need research or discovery', value: 3 }
          ]
        },
        {
          title: 'Have we done something similar before?',
          options: [
            { title: 'Yes, many times', value: 1 },
            { title: 'Yes, but not exactly the same', value: 2 },
            { title: 'No, this is new for us', value: 3 }
          ]
        },
        {
          title: 'Are there gaps between development and the requirements and A/C?',
          options: [
            { title: 'No, we can deliver exactly what’s described on requirements and A/C', value: 1 },
            { title: 'Maybe, there can be some gaps on development', value: 2 },
            { title: 'Yes, a lot of gaps can arise while developing it', value: 3 }
          ]
        }
      ],
    },
    {
      icon_name: 'category icon name',
      name: 'Risk',
      description: 'How much this issue can affect or not what we currently have. Or how much does it can affect the user',
      order_value: 2,
      max_question_value: 3,
      questions: [
        {
          title: 'What is the impact of failure or bugs?',
          options: [
            { title: 'Low impact, minor inconvenience', value: 1 },
            { title: 'Medium impact, affects some users but has a workaround', value: 2 },
            { title: 'High impact, could break critical features or data', value: 3 }
          ]
        },
        {
          title: 'Does this change affect multiple parts of the system?',
          options: [
            { title: 'No, it’s isolated', value: 1 },
            { title: 'Yes, but the scope is manageable', value: 2 },
            { title: 'Yes, and it could break many things', value: 3 }
          ]
        },
        {
          title: 'Are there dependencies on other teams, services, or third-party systems?',
          options: [
            { title: 'No dependencies', value: 1 },
            { title: 'Some dependencies, but manageable', value: 2 },
            { title: 'Many dependencies', value: 3 }
          ]
        }
      ],
    },
    {
      icon_name: 'category icon name',
      name: 'Complexity',
      description: 'Overall Effort. Could be seen as a number of parts of a process. It is a result of a composite of tasks.',
      order_value: 3,
      max_question_value: 5,
      questions: [
        {
          title: 'How much code or logic needs to be modified or written??',
          options: [
            { title: 'A few lines, minor tweak', value: 1 },
            { title: 'A single module or function', value: 2 },
            { title: 'Multiple modules', value: 3 },
            { title: 'Requires refactoring or significant code changes', value: 4 },
            { title: 'Need a whole new architecture proposal', value: 5 },
          ]
        },
        {
          title: 'How difficult is testing and validation?',
          options: [
            { title: 'Simple, can be verified with minimal effort', value: 1 },
            { title: 'Some edge cases to consider', value: 2 },
            { title: 'Requires extensive testing and validation', value: 3 },
            { title: 'Needs custom test case escenarios proposal', value: 4 },
            { title: 'Requires multi-step QA, mocks, or staging hard validation', value: 5 },
          ]
        },
        {
          title: 'Are there performance or scalability concerns?',
          options: [
            { title: 'No impact on performance', value: 1 },
            { title: 'Minor, can require some further optimizations on current codebase', value: 2 },
            { title: 'Could impact performance in some cases', value: 3 },
            { title: 'Needs performance analysis and optimization', value: 4 },
            { title: 'Could require many performance and optimization analysis', value: 5 }
          ]
        }
      ],
    }
  ])

  // State to track current category and question
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [disableNextQuestion, setDisableNextQuestion] = useState(false);
  const [disablePrevQuestion, setDisablePrevQuestion] = useState(false);

  const currentCategory = categories[currentCategoryIndex];
  const currentQuestion = currentCategory.questions[currentQuestionIndex];

  const currentIssue: IssueProps = {
    name: 'issue name',
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentCategoryIndex < categories.length - 1) {
      setCurrentCategoryIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex((prev) => prev - 1);
      setCurrentQuestionIndex(categories[currentCategoryIndex - 1].questions.length - 1);
    }

  };

  const getNextQuestion = (): QuestionProps | null => {
    console.log()
    if (currentCategory.questions[currentQuestionIndex + 1]) {
      return currentCategory.questions[currentQuestionIndex + 1];
    } else if (categories[currentCategoryIndex + 1]) {
      return categories[currentCategoryIndex + 1].questions[0];
    } 

    return null;
  }

  const getPrevQuestion = (): QuestionProps | null => {
    console.log()
    if (currentCategory.questions[currentQuestionIndex - 1]) {
      return currentCategory.questions[currentQuestionIndex - 1];
    } else if (categories[currentCategoryIndex - 1]) {
      return categories[currentCategoryIndex - 1].questions[0];
    } 

    return null;
  }

  const changeQuestion = () => {
    setDisablePrevQuestion(!getPrevQuestion());
    setDisableNextQuestion(!getNextQuestion() || !(currentQuestion.answer));
  }

  const answerQuestion = (optionValue: number) => {
    setCategories((prevCategories) => {
      return prevCategories.map((category, catIndex) => {
        if (catIndex !== currentCategoryIndex) return category;

        return {
          ...category,
          questions: category.questions.map((question, qIndex) => {
            if (qIndex !== currentQuestionIndex) return question;

            return {
              ...question,
              answer: optionValue,
            };
          }),
        };
      });
    });

    handleNextQuestion();
  };

  useEffect(() => {
    changeQuestion();
  }, [currentQuestionIndex, categories]);
  

  return (
    <QuestionContext.Provider 
      value={{
        currentCategory,
        currentQuestion,
        handleNextQuestion,
        handlePrevQuestion,
        currentIssue,
        categoryList: categories,
        answerQuestion,
        disableNextQuestion,
        disablePrevQuestion,
      }}>
      {children}
    </QuestionContext.Provider>
  );
};
