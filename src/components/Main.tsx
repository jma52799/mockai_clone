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
  

