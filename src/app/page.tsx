import { Banner } from "@/components/Banner";
import { Filter } from "@/components/Filter";
import { Main } from "@/components/Main";
import { LeftNavbar } from "@/components/LeftNavbar";
import QuestionsContextProvider from "@/contexts/questions-context-provider";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Banner />
      <Filter />
      <div className="flex flex-1 overflow-hidden"> 
        <QuestionsContextProvider>
          <div className="hidden md:flex"> 
            <LeftNavbar />
          </div>
          <div className="flex-1 overflow-auto"> 
            <Main />
          </div>
        </QuestionsContextProvider>
      </div>
    </div>
  );
}


