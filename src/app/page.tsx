import { Banner } from "@/components/Banner";
import { Filter } from "@/components/Filter";
import { Main } from "@/components/Main";
import { LeftNavbar } from "@/components/LeftNavbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Banner />
      <Filter />
      <div className="flex flex-1 overflow-hidden"> {/* overflow-auto */}
        <div className="hidden md:flex"> {/* sm:flex */}
          <LeftNavbar />
        </div>
        <div className="flex-1 overflow-auto"> {/* Prev no: flex-grow overflow-hidden */}
          <Main />
        </div>
      </div>
    </div>
  );
}


