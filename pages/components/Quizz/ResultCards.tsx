import truncate from 'lodash/truncate';
import he from 'he';
import cn from 'classnames';

const truncateQuestion = (text:string) => truncate(text, { length: 70, separator: ' ' });

const ResultsCard = ({ questions, answers }: ResultsCardProps) => {
  return (
    <article className="bg-white rounded-lg p-4 pl-8 text-black max-h-full">
      <ol className="space-y-2 list-decimal">
        {questions.map((q:any, i:number) => {
          return (
            <li
              key={q.question}
              className={cn(
                'leading-tight break-words',
                { ['wrong-answer']: q.correct_answer !== answers[i] },
                { ['correct-answer']: q.correct_answer === answers[i] }
              )}
            >
              {truncateQuestion(he.decode(q.question))}
            </li>
          );
        })}
      </ol>
    </article>
  );
};

interface ResultsCardProps {
  questions?: any;
  answers?: any;
}

export default ResultsCard;