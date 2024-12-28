import TargetIcon from "../assets/icons/target.svg";
import OfficeIcon from "../assets/icons/office.svg";
import BracketIcon from "../assets/icons/bracket.svg";
import TimeIcon from "../assets/icons/time.svg";
import SendIcon from "../assets/icons/send.svg";

export const LeftNavbar = () => {
    return (
        <div className=" px-3 py-4 flex flex-col gap-4" >
            <div className="flex gap-1 items-center">
                <TargetIcon width="23" height="23" />
                <p className="text-sm whitespace-nowrap">Top 150 Interview Questions</p>
            </div>
            <div className="flex gap-1 items-center">
                <OfficeIcon width="23" height="23" />
                <p className="text-sm whitespace-nowrap">Practice for Companies</p>
            </div>
            <div className="flex gap-1 items-center">
                <BracketIcon width="23" height="23" />
                <p className="text-sm whitespace-nowrap">Question Bank</p>
            </div>
            <div className="flex gap-1 items-center">
                <TimeIcon width="23" height="23" />
                <p className="text-sm whitespace-nowrap">My Practices</p>
            </div>
            <div className="flex gap-1 items-center">
                <SendIcon width="23" height="23" />
                <p className="text-sm whitespace-nowrap">My Applications</p>
            </div>
        </div>
    );
};