import { Author } from "@/types/Author";

export const Authors: Author[] = [
  {
    name: "Rahul Sharma",
    id: "rahul-sharma",
    image: "/images/team/rahul-sharma.jpg",
    designation: "Founder & CEO",
    external_link: "#",
  },
  {
    name: "Priya Patel",
    id: "priya-patel",
    image: "/images/team/priya-patel.jpg",
    designation: "Head of Client Services",
    external_link: "#",
  },
  {
    name: "Amit Kumar",
    id: "amit-kumar",
    image: "/images/team/amit-kumar.jpg",
    designation: "Creative Director",
    external_link: "#",
  },
  {
    name: "Neha Gupta",
    id: "neha-gupta",
    image: "/images/team/neha-gupta.jpg",
    designation: "Digital Marketing Head",
    external_link: "#",
  },
  {
    name: "Vikram Singh",
    id: "vikram-singh",
    image: "/images/team/vikram-singh.jpg",
    designation: "Business Development Manager",
    external_link: "#",
  },
  {
    name: "Ananya Reddy",
    id: "ananya-reddy",
    image: "/images/team/ananya-reddy.jpg",
    designation: "Event Strategist",
    external_link: "#",
  },
];

export const getAllAuthorsLinks = () =>
  Authors.map((author) => ({
    name: author.name,
    link: "/team/" + author.id,
  }));
