declare global {
    interface CategoryProps {
        icon_name: string;
        name: string;
        description: string;
        order_value: number;
        max_question_value: number;
        questions: Array<QuestionProps>
    };

    interface IssueProps {
        name: string;
    }

    interface OptionProps {
        title: string;
        value: number;
    }

    interface QuestionProps {
        title: string;
        options: Array<OptionProps>;
        answer?: number;
    }
  }
  
  export {};