import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";
import { productsData } from "./components/productsData";

function ProductsPage() {
  return <HeroParallax products={productsData} />;
}

export default ProductsPage;
