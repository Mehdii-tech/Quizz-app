import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Refresh } from './components/animations/Refresh';
import ResultsCard from './components/Quizz/ResultCards';
// import FullConfetti from '../components/FullConfetti';
import { deleteAnswer, QuizContext } from './contexts/quiz';

const Results = () => {
  const Router = useRouter()
  const {state, dispatch}= useContext(QuizContext);
  const { questions, answers } = state;

  const correctAnswersCount = questions && answers && questions.map((q:any, i:number) => q.correct_answer === answers[i]).filter(Boolean).length;

  return (
    
    //   <FullConfetti isOnce={true} />
      <div className="w-full min-h-screen px-10 ">
        <div className="h-full flex flex-col">
          <div className="py-3">
            <p className="text-center font-bold text-xl">Score: {correctAnswersCount}/{questions.length}</p>
          </div>
          <div className="py-3">
            {questions && answers && <ResultsCard questions={questions} answers={answers} />}
          </div>
          <div className="flex justify-center py-10">
           
            <a onClick={()=>Router.push('/')} className='cursor-pointer'><Refresh /></a>
            
          </div>
        </div>
      </div>
    
  );
};

export default Results;