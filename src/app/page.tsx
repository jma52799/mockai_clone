import { Banner } from "@/components/Banner";
import { Filter } from "@/components/Filter";
import { Main } from "@/components/Main";
import { LeftNavbar } from "@/components/LeftNavbar";

export default function Home() {
  return (
    <>
      <Banner />
      <Filter />
      <div className="flex">
        <div className="hidden sm:inline-flex">
          <LeftNavbar />
        </div>
        <Main />
      </div>
      
    </>
  );
}

