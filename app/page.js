// Page-level metadata to hide from sidebar
/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: "Thrivext", // Title displayed in browser tab
  display: "hidden", // Hides this page from sidebar
};

import Image from "next/image";
import Hero from "@/modules/hero";
import Techstack from "@/modules/techstack";
import Contribution from "@/modules/contribution";

export default function Docs() {




  return (
    <div className="min-h-screen w-full   sm:mt-14 md:mt-20  lg:mt-24">
      {/* Hero Section */}
   
      <Hero />
           {/* Technology Stack Section */}

<Techstack/>

      {/* Contribution Guidelines Section */}
      <Contribution/>

    </div>
  );
}

// This will prevent the layout from being applied globally if you need a custom layout
export const useLayout = () => null;
