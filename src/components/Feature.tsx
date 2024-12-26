import TargetIcon from "../assets/icons/target.svg";

export const Feature = () => {
    return (
        <div className="flex px-4 py-3 text-white">
            <div>
                <TargetIcon className="text-red-600" width="40" height="40" />
            </div>
            <div className="ml-4">
                <div>
                    <h1 className="text-3xl font-bold">150 Must Practice</h1>
                    <p className="text-white/25 text-sm">
                        These questions will cover all the important topics that you need
                        to ace a coding interview. You should practice these well before 
                        heading to an interview.
                    </p>
                </div>
            </div>
            <div>
                <p className="text-sm text-white/25">
                    <span className="text-3xl text-white font-bold">2</span> / 150
                </p>
                <p className="text-sm text-white/25">Solved</p>
            </div>
        </div>
    );
};