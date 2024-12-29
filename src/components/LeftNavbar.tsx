"use client";

import { useState } from "react";
import { QuestionsContext } from "@/contexts/questions-context-provider";
import { useContext } from "react";
import TargetIcon from "../assets/icons/target.svg";
import OfficeIcon from "../assets/icons/office.svg";
import BracketIcon from "../assets/icons/bracket.svg";
import TimeIcon from "../assets/icons/time.svg";
import SendIcon from "../assets/icons/send.svg";
import SettingIcon from "../assets/icons/setting.svg";


const navItems = [
    { id: "top150", label: "Top 150 Interview Questions", icon: TargetIcon },
    { id: "companies", label: "Practice for Companies", icon: OfficeIcon },
    { id: "questions", label: "Question Bank", icon: BracketIcon },
    { id: "my", label: "My Practices", icon: TimeIcon },
    { id: "applications", label: "My Applications", icon: SendIcon },
];

export const LeftNavbar = () => {
    const [selected, setSelected] = useState<string | null>("top150"); 

    const { completedQuestions } = useContext(QuestionsContext)!;

    const handleClick = (id: string) => {
        setSelected(id); 
    };

    return (
        <div className="flex flex-col bg-black/95 border-t border-r border-white/25">
            <nav className="px-4 py-4 flex flex-col gap-4 text-white/50 "> {/* border-t border-r border-white/25 */}
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.id}
                            href="#" 
                            onClick={() => handleClick(item.id)}
                            className={`flex gap-2 items-center rounded-md px-2 py-2 ${
                                selected === item.id ? "bg-white/15" : "bg-transparent"
                            } hover:text-white group`}
                        >
                            <Icon className="text-inherit group-hover:text-white transition" width="23" height="23" />
                            <p className="text-sm whitespace-nowrap group-hover:text-white transition">{item.label}</p>
                            {(item.id === "my" || item.id === "applications") && (
                                <div className="ml-auto flex-shrink-0 w-5 h-5 flex items-center justify-center bg-white text-black rounded-full text-xs font-bold">
                                    {completedQuestions}
                                </div>
                            )}
                        </a>
                    );
                })}
            </nav>
            <div className="px-4 mt-auto">
                <div className="bg-black px-3 py-3 rounded-lg border-2 border-dashed border-white/10">
                    <h2 className="text-2xl font-bold text-white">
                        Upgrade to<br />Premium
                    </h2>
                    <p className="text-white/50 text-sm mt-2">Unlock all features and access</p>
                    <button className="text-black bg-white mt-4 min-w-full rounded-lg py-2">Upgrade</button> {/* New: onClick={toggleModal} */}
                </div>
            </div>
            <div className="px-4 mt-4 mb-4">
                <div className="flex items-center justify-between bg-black px-3 py-2 rounded-lg border-2 border-dashed border-white/10">
                    <p className="text-white/50">Szu Jay Ma</p>
                    <SettingIcon className="text-white" width="20" height="20" />
                </div>
            </div>
        </div>
    );
};
