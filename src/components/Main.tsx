import { Questions } from "./Questions";
import { Feature } from "./Feature";
import { QuestionSidebar } from "./QuestionSidebar";

export const Main = () => {
    return (
        <div className=""> 
            <div className="hidden sm:flex bg-black border border-white/30">
                <Feature />
            </div>
            <div className="flex gap-2 bg-black">
                <QuestionSidebar />
                <div className="flex-auto">
                    <Questions />
                </div>
            </div>
        </div>
    );
};