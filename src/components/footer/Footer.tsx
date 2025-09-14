import Link from "next/link";
import { FluidContainer } from "../FluidContainer/FluidContainer";

export const Footer = () => {
  return (
    <footer className="bg-[#2f2f2f] text-white py-4">
      <FluidContainer>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 lg:h-12 lg:w-12 items-center justify-center rounded bg-primary/90 text-background font-bold">
              K
            </span>
            <span className="text-sm opacity-80">Krea AI</span>
          </div>
          <div className="text-xs opacity-70">
            Curated by <Link target='_blank' href={'https://www.linkedin.com/in/emmanuel-obiora'}>EMMANUEL OBIORA</Link>
          </div>
        </div>
      </FluidContainer>
    </footer>
  );
}
