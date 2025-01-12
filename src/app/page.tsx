import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AahrbitX°",
  description:
    "We are a cutting-edge tech company dedicated to empowering small-scale industries with innovative AI solutions, software development, and online training programs. Our mission is to revolutionize how businesses grow by equipping them with the tools and expertise needed to succeed in the digital age.",
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "AarbhitX",
    description:
      "We are a cutting-edge tech company dedicated to empowering small-scale industries with innovative AI solutions, software development, and online training programs. Our mission is to revolutionize how businesses grow by equipping them with the tools and expertise needed to succeed in the digital age.",
    siteName: "AarbhitX",
    images: [
      {
        url: "https://example.com/og.png",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
