import Image from "next/image";
import styles from "./page.module.css";
import QuestionContainer from "@/components/QuestionContainer";
import NewQuestionContainer from "@/sections/NewQuestionContainer";

export default function Home() {
  return (
    <NewQuestionContainer />
  );
}
