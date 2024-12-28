import { Banner } from "@/components/Banner";
import { Filter } from "@/components/Filter";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Banner />
        <Filter />
        <Main />
      </div>
    </>
  );
}

