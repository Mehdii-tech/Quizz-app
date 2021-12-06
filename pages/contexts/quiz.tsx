import { createContext, useReducer } from 'react';
import { createReducer, createAction } from '@reduxjs/toolkit';

interface QuizState {
  questions: any[];
  answers: string[];
}

export const QuizContext = createContext(null);

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
  const reducerControl = useReducer(reducer, { ...initialState, ...initialStaticState });
  return <QuizContext.Provider value={reducerControl}>{children}</QuizContext.Provider>;
};