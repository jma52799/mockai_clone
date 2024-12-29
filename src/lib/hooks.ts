// hooks.ts
import { useContext } from "react";
import { QuestionsContext } from "@/contexts/questions-context-provider";

export function useQuestionsContext() {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error(
      'useQuestionsContext must be used within a QuestionsContextProvider'
    );
  }
  return context;
}
