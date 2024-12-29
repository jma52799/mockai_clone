import { Questions } from "./Questions";
import { Feature } from "./Feature";
import { QuestionSidebar } from "./QuestionSidebar";

export const Main = () => {
    return (
        <div className="flex-grow flex flex-col h-full">  
            <div className="hidden md:flex bg-black border-t border-white/30 sticky top-0 z-10"> 
                <Feature />
            </div>
            <div className="flex gap-2 md:border-t border-white/30 px-4 bg-black overflow-scroll">   {/* */}
                <div className="hidden md:block sticky top-0 flex-auto max-w-md">
                    <QuestionSidebar /> 
                </div>  
                <div className="flex-auto">  
                    <Questions />
                </div>
            </div>
        </div>     
    );
};
  

/*
      <div className="flex flex-col h-full">
        <div className="hidden md:flex bg-black border-t border-white/30 sticky top-0 z-10">
          <Feature />
        </div>
        <div className="flex-1 gap-2 min-h-0 px-4 bg-black flex md:border-t border-white/30">
          <div className="hidden md:inline-flex">
            <QuestionSidebar />
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto">
            <Questions />
          </div>
        </div>
      </div>
*/

/*
        <div className="flex-grow flex flex-col h-full">  
            <div className="hidden md:flex bg-black border-t border-white/30 sticky top-0 z-10"> 
                <Feature />
            </div>
            <div className="px-4 bg-black overflow-scroll"> 
                <div className="flex gap-2 md:border-t border-white/30">     
                    <QuestionSidebar /> 
                    <div className="flex-auto">  
                        <Questions />
                    </div>
                </div>
            </div>
        </div>  
*/