import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import ResultsCard from './components/ResultCards';
// import FullConfetti from '../components/FullConfetti';
import { QuizContext } from './contexts/quiz';

const Results = () => {
  const {state, dispatch}= useContext(QuizContext);
  const { questions, answers } = state;

  const correctAnswersCount =
    questions &&
    answers &&
    questions.map((q:any, i:number) => q.correct_answer === answers[i]).filter(Boolean).length;

    console.log(correctAnswersCount,'44444', questions, answers,'2222', questions.map((q:any, i:number) => q.correct_answer ===answers[i] ? true : false))

  return (
    
    //   <FullConfetti isOnce={true} />
      <div className="w-full min-h-screen px-10">
        <div className="h-full flex flex-col">
          <div className="py-3">
            <p className="text-center font-bold text-xl">Score: {correctAnswersCount}/{questions.length}</p>
          </div>
          <div className="py-3">
            {questions && answers && <ResultsCard questions={questions} answers={answers} />}
          </div>
          <div className="flex justify-center py-10">
            <Link href="/">
              <a className="btn btn-accent">Play Again</a>
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default Results;