import { templateData } from "@/static/templatesData";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ template: string }>;
};

export async function generateStaticProps({ params }: Props) {
  const { template: id } = await params;
  const template = templateData.find((template) => template.id === id);
  return {
    props: {
      template,
    },
  };
}

async function TemplatePage({ params }: Props) {
  const { template: id } = await params;

  const template = templateData.find((template) => template.id === id);

  if (!template) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
      <div className="relative">
        <Image
          src={`/marketplace/${template.imageUrl}`}
          alt={template.title}
          width={700}
          height={300}
          className="rounded-lg"
        />
        <div className="absolute left-2 top-2">
          <Image src={template.seobility} alt="" height={64} width={64} />
        </div>
      </div>
      <div>content</div>
    </div>
  );
}

export default TemplatePage;
