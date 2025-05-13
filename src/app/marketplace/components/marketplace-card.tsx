import { ShowcaseCardProps } from "@/types/Marketplace";
import { Link as IconLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MarketPlaceCard(props: ShowcaseCardProps) {
  const { id, title, description, imageUrl, price, link, tags, rating } = props;
  return (
    <div className="rounded-xl border border-neutral-700 p-2 ">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={`/marketplace/${imageUrl}`}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg"
        />
      </a>
      <div className="mt-3 flex items-end">
        <h2 className=" flex-1 text-lg font-semibold">{title}</h2>
        <p className="text-right text-3xl font-bold text-primary">{price}</p>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <div className="mb-1 mt-3 flex items-center gap-2">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-3 py-1 text-sm text-white transition-all duration-200 ease-in-out hover:bg-primary/80">
          <IconLink className="size-4" />
          Demo
        </button>
        <Link
          href={`/marketplace/${id}`}
          className="flex flex-1 items-center justify-center rounded-md border border-primary px-3 py-1 text-sm transition-all duration-200 ease-in-out hover:bg-primary/10 hover:text-primary"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}

const Tag = ({ tag }: { tag: string }) => {
  return (
    <span className="rounded-2xl bg-primary/50 px-2 py-1 text-xs">{tag}</span>
  );
};

export default MarketPlaceCard;
