"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const AboutSectionTwo = () => {
  const [index, setIndex] = useState(0);

  const svgArray = ["bike", "support", "upgrade"];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0 p-6">
              <Image
                src={`/images/about/${svgArray[index]}.svg`}
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src={`/images/about/${svgArray[index]}.svg`}
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px] space-y-3 transition-colors duration-150">
              <div
                className={cn(
                  "cursor-pointer hover:bg-primary/15 p-4 rounded-xl"
                )}
                onClick={() => setIndex(0)}
              >
                <h3
                  className={cn(
                    "mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl",
                    index === 0 && "text-primary"
                  )}
                >
                  Flawless Execution
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our custom solutions are designed to deliver seamless,
                  bug-free performance, ensuring your business operations run
                  smoothly and efficiently.
                </p>
              </div>
              <div
                className={cn(
                  "cursor-pointer hover:bg-primary/15 p-4 rounded-xl"
                )}
                onClick={() => setIndex(1)}
              >
                <h3
                  className={cn(
                    "mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl",
                    index === 1 && "text-primary"
                  )}
                >
                  Dedicated Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  With our expert team by your side, we provide unmatched
                  support to help your business overcome challenges and achieve
                  success effortlessly.
                </p>
              </div>
              <div
                className={cn(
                  "hover:bg-primary/15 p-4 rounded-xl cursor-pointer"
                )}
                onClick={() => setIndex(2)}
              >
                <h3
                  className={cn(
                    "mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl",
                    index === 2 && "text-primary"
                  )}
                >
                  Tailored Innovation
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Leveraging advanced technologies like AI, IoT, and SaaS, we
                  craft solutions tailored to meet your unique business needs
                  and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
