import he from 'he';

const QuestionCard = ({
  category,
  question,
  incorrect_answer,
  questionIndicator,
  onSelectAnswer,
}: QuestionCardProps) => {
  return (
    <article className="flex flex-col justify-evenly bg-white rounded-lg p-5 text-black text-center">
      <div className="pb-8">
        <small className="text-gray-400 font-bold mb-3">{questionIndicator}</small>
        <br />
        <small className="text-gray-600 leading-tight">{category}</small>
        <h1 className="leading-tight font-semibold sm:text-3xl text-xl break-words">
          {he.decode(question)}
        </h1>
      </div>
      <div className="h-full flex  justify-center space-y-5">
        <div className="grid grid-cols-2 gap-2">
        
          {incorrect_answer.map(
            (answer:any) => <> <button onClick={() => onSelectAnswer(answer)} className="w-24 h-24 bg-black hover:bg-black text-white font-bold rounded">{answer}</button>
           </>)}
           
        </div>
      </div>
    </article>
  );
};

interface QuestionCardProps {
  category: string;
  question: string;
  incorrect_answer:string[];
  questionIndicator: string;
  onSelectAnswer: Function;
}

export default QuestionCard;

