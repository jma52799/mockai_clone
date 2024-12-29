import LockIcon from "../assets/icons/lock.svg";
import clsx from "clsx";

const cards1 = [
    {
        filled: true,
        text: "lorem",
    },
    {
        filled: true,
        text: "lorem",
    },
    {
        filled: true,
        text: "lorem",
    },
]

const cards2 = [
    {
        filled: true,
        text: "lorem",
    },
    {
        filled: false,
        text: "lorem",
    },
    {
        filled: false,
        text: "lorem",
    },
    {
        filled: false,
        text: "lorem",
    },
    {
        filled: false,
        text: "lorem",
    },
    {
        filled: false,
        text: "lorem",
    },
    {
        filled: false,
        text: "lorem",
    },
]

export const QuestionSidebar = () => {
    return (
        <div className="hidden md:inline text-white pl-4 py-3 relative"> {/* sm:inline */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div> {/* Blur overlay */}
            <div className="absolute "> {/* Lock icon overlay */}
                <LockIcon width="20" height="20" />
            </div> 
            <p className="pb-3">Lorem</p>
            <div className="flex flex-col gap-2">
                {cards1.map((card) => (
                    <div key={card.text} className="bg-white/20 flex items-center gap-2 px-2 py-1">
                        <div className={clsx("w-4 h-4 rounded-full", card.filled ? "bg-white" : "bg-transparent")} />
                        <p>{card.text}</p>
                    </div>
                ))}
            </div> 
            <p className="py-3">Lorem</p>
            <div className="flex flex-col gap-2">
                {cards2.map((card) => (
                    <div key={card.text} className="bg-white/20 flex items-center gap-2 px-2 py-1">
                        <div className={clsx("w-4 h-4 rounded-full", card.filled ? "bg-white" : "bg-transparent  border border-white")} />
                        <p>{card.text}</p>
                    </div>
                ))}
            </div> 
        </div>
    );
};