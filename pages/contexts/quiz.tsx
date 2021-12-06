import { createContext, useReducer } from 'react';
import { createReducer, createAction } from '@reduxjs/toolkit';

interface QuizState {
  questions: any[];
  answers: string[];
}
interface IContextProps {
  state: QuizState;
  dispatch: ({type}:{type:string}) => void;
}


export const QuizContext = createContext({} as IContextProps);;

const initialState: QuizState = {
  questions: [],
  answers: [],
};

export const setQuestions = createAction<any>('questions/set');
export const pushAnswer = createAction<string>('answer/push');

const reducer = createReducer<QuizState, any>(initialState, {
  [setQuestions.toString()]: (state: any, action: { payload: any; }) => ({ ...state, questions: action.payload }),
  [pushAnswer.toString()]: (state: { answers: any; }, action: { payload: any; }) => ({
    ...state,
    answers: [...state.answers, action.payload],
  }),
});

export const QuizContextProvider = ({ children, initialStaticState }:any) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...initialStaticState });
  const value = { state, dispatch}
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};