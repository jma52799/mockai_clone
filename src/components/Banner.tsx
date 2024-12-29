import MenuIcon from "../assets/icons/menu.svg";
import InfoIcon from "../assets/icons/info.svg";
import TargetIcon from "../assets/icons/target.svg";
export const Banner = () => {
  return (
    <div className="bg-black md:bg-black/95 text-white"> 
      <div className="hidden md:inline-flex py-4 px-6 border-r border-white/25"> 
        <p className="text-lg sm:text-xl">MockAI</p>
        <div className="ml-[145px]"></div> 
      </div>
      <div className="py-4 px-4 flex gap-4 md:hidden"> 
        <div className="py-2 px-2">
          <MenuIcon className="text-white" width="24" height="24" />
        </div>
        <div className="flex items-center gap-2">
          <TargetIcon className="text-red-600 font-bold" width="19" height="19" />
          <p className="text-lg font-bold tracking-tighter">150 Must Practice</p>
          <InfoIcon className="text-white/50" width="19" height="19" />
        </div>
      </div>
    </div>
  );
};
