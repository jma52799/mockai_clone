import { Banner } from "@/components/Banner";
import { Filter } from "@/components/Filter";
import { Main } from "@/components/Main";
import { LeftNavbar } from "@/components/LeftNavbar";

export default function Home() {
  return (
    <>
      <Banner />
      <Filter />
      <div className="flex"> {/* overflow-auto */}
        <div className="hidden md:flex"> {/* sm:flex */}
          <LeftNavbar />
        </div>
        <div className="flex-grow overflow-hidden"> {/* Prev no: overflow-hidden */}
          <Main />
        </div>
      </div>
    </>
  );
}

//Changed page.tsx and global.css
