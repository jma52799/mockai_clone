"use client";

import { createContext, useState } from "react";
import { updateNumberOfCompletedQuestions } from "@/lib/actions";


type QuestionsProviderProps = {
    children: React.ReactNode;
}

type TQuestionsContext = {
  completedQuestions: number;
  updateCompletedQuestions: (newCount: number) => void;
}

export const QuestionsContext = createContext<TQuestionsContext | null>(null);

export default function QuestionsContextProvider({ children }: QuestionsProviderProps) {
  const [completedQuestions, setCompletedQuestions] = useState<number>(2);

  // event handler / actions
  const updateCompletedQuestions = async (newCount: number) => {
    const updatedCount = await updateNumberOfCompletedQuestions(newCount);
    setCompletedQuestions(updatedCount);
  };

  return (
    <QuestionsContext.Provider
      value={{ completedQuestions, updateCompletedQuestions }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}
