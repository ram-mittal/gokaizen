import { templateData } from "@/static/templatesData";
import React from "react";
import MarketPlaceCard from "./components/marketplace-card";

function MarketPlacePage() {
  return (
    <section className="container min-h-screen pt-28 lg:pt-[135px]">
      <h1 className="text-center font-sans text-3xl font-semibold md:text-4xl lg:text-5xl">
        Ready-to-Go Templates
      </h1>
      <p className="mt-4 text-center text-lg font-normal text-gray-500 dark:text-gray-400 md:mt-3">
        Explore our diverse range of templates to find the perfect fit for your
        project.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {templateData.map((template) => {
          return <MarketPlaceCard key={template.id} {...template} />;
        })}
      </div>
    </section>
  );
}

export default MarketPlacePage;
