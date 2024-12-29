import FilterIcon from "../assets/icons/filter.svg";
export const Filter = () => {
    return (
        <div className="bg-black border-t border-white/25 md:hidden"> {/* sm:hidden */}
            <div className="flex items-center justify-between px-4 py-4">
                <span className="text-sm text-white/30">Showing 5 of 150</span>
                <div className="inline-flex items-center gap-2 px-2 bg-gray-300/30 rounded-md">
                    <span className="text-sm font-semibold text-white">Filters</span>
                    <FilterIcon className="text-white" width="15" height="15" />
                </div>
            </div>
        </div>
    );
};