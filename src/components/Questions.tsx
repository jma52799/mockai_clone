import { QuestionCard } from "./QuestionCard";

const questions = [
    {
        questionType: ["Easy", "Array", "Hash Table"],
        title: "Two Sum"
    },
    {
        questionType: ["Easy", "Linked List", "Math", "Recursion"],
        title: "Add Two Numbers"
    },
    {
        questionType: ["Medium", "Hash Table", "String", "Sliding Window"],
        title: "Longest Substring Without Repeating Characters"
    },
    {
        questionType: ["Easy", "Array", "Binary Search", "Divide and Conquer"],
        title: "Median of Two Sorted Arrays"
    },
    {
        questionType: ["Medium", "Array", "Two Pointers", "String", "Dynamic Programming"],
        title: "Longest Palindromic Substring"
    },
];

export const Questions = () => {
    return (
        <div className="bg-black px-4 pb-16">
            <div className="hidden md:flex py-4"> {/* sm:flex */}
                <span className="text-sm text-white/30">Showing 5 of 150</span>
            </div>
            <div className="">
                {questions.map((question) => (
                    <QuestionCard key={question.title} questionType={question.questionType} title={question.title} />
                ))}
            </div>
            <div className="flex justify-center mt-5">
                <button className="px-6 py-2 rounded-full text-black bg-white">Upgrade to Premium to unlock all 150 questions</button>
            </div>
        </div>
    );    
}