import { Banner } from "@/components/Banner";
import { Filter } from "@/components/Filter";
import { Main } from "@/components/Main";
import { LeftNavbar } from "@/components/LeftNavbar";

export default function Home() {
  return (
    <>
      <Banner />
      <Filter />
      <div className="flex overflow-auto"> {/* overflow-auto */}
        <div className="hidden sm:flex">
          <LeftNavbar />
        </div>
        <div className="flex-grow">
          <Main />
        </div>
      </div>
      
    </>
  );
}

