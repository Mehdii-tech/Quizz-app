import { useContext, useState } from "react";
import { useRouter } from "next/router";
import * as Quiz from "../models/Quiz";
import QuestionCard from "./components/Quizz/QuestionCard";
import QuizTimer from "./components/Quizz/QuizzTimer";
import { pushAnswer, QuizContext, setQuestions } from "./contexts/quiz";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const QuizPage: NextPage<{}> = (quiz:any) => {
console.log(quiz.quiz, '6565')
const Router = useRouter();
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const {state, dispatch} = useContext(QuizContext)

const currentQuestion = quiz.quiz.Question[currentQuestionIndex];

const nextQuestion = (answer: any) => {
        if (answer==='') { console.log("vide")}else{dispatch(pushAnswer(answer));}
        if (currentQuestionIndex !== quiz.quiz.Question.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          dispatch(setQuestions(quiz.quiz.Question));
          Router.push('/results');
        }
};

return (
  
    <div className="w-full h-screen px-10">
      <div className="h-full flex flex-col">
        <div className="py-6">
          <QuizTimer key={`timer-${currentQuestionIndex}`} onFinish={() => nextQuestion('')} />
        </div>
        <div className="py-14">
          {currentQuestion && (
            <QuestionCard
              key={`question-${currentQuestionIndex}`}
              category={currentQuestion.category}
              question={currentQuestion.question}
              incorrect_answer={currentQuestion.incorrect_answer}
              questionIndicator={`${currentQuestionIndex + 1} / ${quiz.quiz.Question.length}`}
              onSelectAnswer={(answer: any) => setTimeout(() => nextQuestion(answer), 200)}
            />
          )}
        </div>
      </div>
    </div>
  
);
};

export const getStaticPaths: GetStaticPaths = async () => {
  const quiz = await Quiz.find()
  const quizzes = JSON.parse(JSON.stringify(quiz));
  console.log(quizzes ,'444')
  return {
  paths: quizzes.map(
    (quiz:any) => ({ params: { id: String(quiz.id) } })
  ),
  fallback: false,
};
};

export const getStaticProps: GetStaticProps = async ({ params }:any) => {
  const quizz= await Quiz.findOne(Number(params.id))
  const quiz = JSON.parse(JSON.stringify(quizz))

return {
  props: {
    quiz,
  },
}
};

export default QuizPage;