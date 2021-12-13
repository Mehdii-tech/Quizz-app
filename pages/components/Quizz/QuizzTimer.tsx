import { useState } from 'react';
import useInterval from 'react-use/lib/useInterval';
import useBoolean from 'react-use/lib/useBoolean';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';

const QuizTimer = ({ defaultTimer = 10, dangerTime = 4, onFinish }: QuizTimerProps) => {
  const [time, setTime] = useState(defaultTimer);
  const [delay, setDelay] = useState(1000);
  const [isRunning, toggleIsRunning] = useBoolean(true);
  const numberAnimationControls = useAnimation();

  useInterval(
    () => {
      if (time == 0) {
        onFinish();
        toggleIsRunning();
      } else {
        if (time === dangerTime) {
          numberAnimationControls.start({ scale: 2 });
        }
        setTime((prev) => prev - 1);
      }
    },
    isRunning ? delay : null
  );

  return (
    <div className="relative h-10 w-full rounded-full overflow-hidden">
      <motion.div
        className="text-white font-black left-0 w-full top-0 h-full text-center py-2 absolute z-10"
        animate={numberAnimationControls}
        transition={{ loop: 3, duration: 1 }}
      >
        <span>{time}</span>
      </motion.div>
      <div className="absolute left-0 w-full top-0 h-full bg-gray-500 opacity-25"></div>
      <div
        className={cn(
          'absolute left-0 top-0 h-full transition-all ease-out duration-1000',
          { 'bg-blue-400': time > 2 },
          { 'bg-red-700': time <= 2 }
        )}
        style={{ width: `${(time * 100) / defaultTimer}%` }}
      ></div>
    </div>
  );
};

interface QuizTimerProps {
  defaultTimer?: number;
  dangerTime?: number;
  onFinish: Function;
}

export default QuizTimer;