import { Questions } from "./Questions";
import { Feature } from "./Feature";
import { QuestionSidebar } from "./QuestionSidebar";

export const Main = () => {
    return (
        <div className="w-full"> 
            <div className="hidden sm:flex bg-black border border-white/30">
                <Feature />
            </div>
            <div className="sm:flex sm:gap-2 bg-black max-h-screen ">
                <QuestionSidebar />
                <div className="sm:flex-grow overflow-y-scroll">
                    <Questions />
                </div>
            </div>
        </div>
    );
};