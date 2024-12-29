import clsx from "clsx";

type QuestionCardProps = {
    questionType: string[];
    title: string;
}

export const QuestionCard = ({ questionType, title }: QuestionCardProps) => {
    return (
        <div className="mb-4">
            <div className="px-3 py-4 border border-white/25 hover:border-white transition rounded-md md:flex md:gap-4 md:justify-between md:items-start"> {/* Prev no md: */}
                <div className=""> 
                    <div className="flex gap-2"> {/* question type div*/}
                        {questionType.map((type, index) => (
                            <div key={type} className={clsx(
                                "px-2 rounded-sm mt2",
                                index === 0 
                                    ? type === "Medium" 
                                        ? "bg-yellow-900" : "bg-green-800" 
                                    : "bg-white/20",
                                
                            )}>
                                <p className={clsx(
                                    "text-[12px]",
                                    index === 0 ? "text-white font-bold" : "text-white/30",
                                )}>
                                    {type}
                                </p>
                            </div>
                            
                        ))}
                    </div>
                    <p className="text-white text-lg md:text-xl font-bold mt-2">{title}</p> {/* question title */}
                </div>
                <div className="mt-3 md:mt-0 md:px-8 py-8 border border-white/25 rounded-md"> 
                    <div className="flex flex-col items-center gap-2 md:gap-4"> 
                        <p className="text-white text-sm">You practiced this question on 12/20/2024</p> 
                        <div className="flex gap-8">
                            <button className="bg-white text-black text-sm px-4 py-1 rounded-2xl">Check Result</button>
                            <button className="text-white text-sm px-4 py-2 rounded-2xl border border-white/25">Practice Again</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};