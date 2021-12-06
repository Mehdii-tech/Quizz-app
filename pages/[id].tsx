import { useContext, useState } from "react";
import { useRouter } from "next/router";
import * as Quiz from "../models/Quiz";
import QuestionCard from "./components/QuestionCard";
import QuizTimer from "./components/QuizzTimer";
import { pushAnswer, QuizContext, setQuestions } from "./contexts/quiz";

export default function QuizPage({ ...quiz }) {
//   const router = useRouter();
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [isWrongAnswer, setIsWrongAnswer] = useState(false);
//   console.log(quiz.quiz.id,'6565')

//   const onAnswerClick = (answer: any) => {
//     if (answer !== quiz.quiz.Question[questionIndex].correct_answer) {
//       setIsWrongAnswer(true);
//       return;
//     }

//     setIsWrongAnswer(false);

//     if (questionIndex >= quiz.quiz.Question.length - 1) {
//       router.push("/");
//       return;
//     }

//     setQuestionIndex(questionIndex + 1);
//   }

//   return(
    
//     <div className="flex h-full w-full items-center justify-center">
//       <div className="shadow bg-gray-50 p-4 space-y-2 rounded-sm">
//         <div>
//           <h1 className="text-center font-bold">{quiz.quiz.Question[questionIndex].question}</h1>
//         </div>

//         <div className="grid grid-cols-2 gap-2">
//           {quiz.quiz.Question[questionIndex].incorrect_answer.map(
//             (answer:any) => <button onClick={() => onAnswerClick(answer)} className="w-24 h-24 bg-black hover:bg-black text-white font-bold rounded">{answer}</button>
//           )}
//         </div>

//         {isWrongAnswer && (
//           <p className="text-center text-red-500 font-bold"> Wrong Answer ! </p>
//         )}
//       </div>
//     </div>
//   );
// }
console.log(quiz.quiz, '6565')
const Router = useRouter();
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// const [state, dispatch] = useContext(QuizContext)
const {state, dispatch} = useContext(QuizContext)

const currentQuestion = quiz.quiz.Question[currentQuestionIndex];

const nextQuestion = (answer: string) => {
  dispatch(pushAnswer(answer));
  if (currentQuestionIndex !== quiz.quiz.Question.length - 1) {
    setCurrentQuestionIndex((prev) => prev + 1);
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
              correct_answer={currentQuestion.correct_answer}
              incorrect_answer={currentQuestion.incorrect_answer}
              questionIndicator={`${currentQuestionIndex + 1} / ${quiz.quiz.Question.length}`}
              onSelectAnswer={(answer: string) => setTimeout(() => nextQuestion(answer), 200)}
            />
          )}
        </div>
      </div>
    </div>
  
);
};

export async function getStaticPaths() {
    const quiz = await Quiz.find()
    const quizzes = JSON.parse(JSON.stringify(quiz));
  console.log(quizzes ,'444')
  return {
    paths: quizzes.map(
      (quiz:any) => ({ params: { id: String(quiz.id) } })
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }:any) {
    const quizz= await Quiz.findOne(Number(params.id))
    const quiz = JSON.parse(JSON.stringify(quizz))

  return {
    props: {
      quiz,
    },
  }
}