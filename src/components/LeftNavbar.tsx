"use client";

import { useState } from "react";
import TargetIcon from "../assets/icons/target.svg";
import OfficeIcon from "../assets/icons/office.svg";
import BracketIcon from "../assets/icons/bracket.svg";
import TimeIcon from "../assets/icons/time.svg";
import SendIcon from "../assets/icons/send.svg";

const navItems = [
    { id: "top150", label: "Top 150 Interview Questions", icon: TargetIcon },
    { id: "companies", label: "Practice for Companies", icon: OfficeIcon },
    { id: "questions", label: "Question Bank", icon: BracketIcon },
    { id: "my", label: "My Practices", icon: TimeIcon },
    { id: "applications", label: "My Applications", icon: SendIcon },
];

export const LeftNavbar = () => {
    const [selected, setSelected] = useState<string | null>(null); 

    const handleClick = (id: string) => {
        setSelected(id); 
    };

    return (
        <nav className="px-4 py-4 flex flex-col gap-4 bg-black text-white/50 border-t border-r border-white/25">
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
                    </a>
                );
            })}
        </nav>
    );
};
