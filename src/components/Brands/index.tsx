"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const Brands = () => {
  const arr = [Logos.butterbytes, Logos.logo, Logos.lure, Logos.pommi_caters];

  return (
    <Marquee>
      {arr.map((Logo, index) => (
        <div
          key={index}
          className="relative dark:text-white text-black h-full w-fit mx-[4rem] flex items-center justify-start"
        >
          <Image
            src={Logo}
            className="scale-110 hover:scale-125 transition-transform duration-200"
            alt={`brand-${index}`}
            width={850}
            height={500}
          />
        </div>
      ))}
    </Marquee>
  );
};

const Logos = {
  butterbytes: "/images/brands/butterbytes.svg",
  logo: "/images/brands/logo.svg",
  lure: "/images/brands/lure.svg",
  pommi_caters: "/images/brands/pommi_caters.svg",
};

export default Brands;
