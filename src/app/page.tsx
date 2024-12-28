import { Banner } from "@/components/Banner";
import { Filter } from "@/components/Filter";
import { Main } from "@/components/Main";
import { LeftNavbar } from "@/components/LeftNavbar";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Banner />
      <Filter />
      <div className="sm:flex">
        <div className="hidden sm:flex sm:w-[200px] md:w-[300px]">
          <LeftNavbar />
        </div>
        <Main />
      </div>
    </div>
  );
}

