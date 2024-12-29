import { Questions } from "./Questions";
import { Feature } from "./Feature";
import { QuestionSidebar } from "./QuestionSidebar";

export const Main = () => {
    return (
        <div className="flex-grow"> 
            <div className="hidden md:flex bg-black border-t border-white/30"> {/* sm:flex */}
                <Feature />
            </div>
            <div className="px-4 bg-black">
                <div className="flex gap-2  overflow-scroll border-t border-white/30"> {/* no overflow-scroll */}   
                    <QuestionSidebar />
                    <div className="flex-auto">
                        <Questions />
                    </div>
                </div>
            </div>
        </div>
    );
};