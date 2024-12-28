import TargetIcon from "../assets/icons/target.svg";

export const Feature = () => {
    return (
        <div className="flex gap-4 px-4 py-3 text-white w-full">
            <div>
                <TargetIcon className="text-red-600" width="40" height="40" />
            </div>
            <div className="">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold md:pb-2">150 Must Practice</h1>
                    <p className="text-white/50 text-sm md:text-[16px] md:pb-3 max-w-[700px]">
                        These questions will cover all the important topics that you need
                        to ace a coding interview. You should practice these well before 
                        heading to an interview.
                    </p>
                </div>
            </div>

            <div className="ml-auto min-w-[70px]">
                <p className="text-sm text-white/25">
                    <span className="text-4xl text-white font-bold">2</span> / 150
                </p>
                <p className="text-sm text-white/25">Solved</p>
            </div>
        </div>
    );
};