import TargetIcon from "../assets/icons/target.svg";

export const Feature = () => {
    return (
        <div className="w-full flex gap-4 px-4 py-3 text-white">
            <div>
                <TargetIcon className="text-red-600" width="40" height="40" />
            </div>
            <div className="">
                <div>
                    <h1 className="text-3xl sm:text-4xl md:pb-3 font-bold">150 Must Practice</h1> {/* sm:pb-3 */}
                    <p className="text-white/25 text-sm md:text-[16px] max-w-[690px]"> {/* sm:text-[16px] */}
                        These questions will cover all the important topics that you need
                        to ace a coding interview. You should practice these well before 
                        heading to an interview.
                    </p>
                </div>
            </div>
            <div className="ml-auto pr-4 flex flex-col items-end">
                <p className="text-sm md:text-lg text-white/25 text-nowrap"> {/* sm:text-lg */}
                    <span className="text-4xl text-white font-bold">2</span> / 150
                </p>
                <p className="text-sm md:text-lg tracking-tight text-white/25">Solved</p> {/* sm:text-lg */}
            </div>
        </div>
    );
};