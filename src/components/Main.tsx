import { Questions } from "./Questions";
import { Feature } from "./Feature";

export const Main = () => {
    return (
        <div className=""> 
            <div className="hidden sm:flex bg-black border border-white/30">
                <Feature />
            </div>
            <Questions />
        </div>
    );
};