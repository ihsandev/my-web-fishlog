import CardFeature from "@/components/CardFeature/page";
import CardSection from "@/components/CardSection/page";
import { IImpact } from "@/types/home";
import React from "react";

export default function Impact({ data }: { data: IImpact[] | undefined }) {
  return (
    <CardSection className="bg-blue-900 text-white" title="Our Impact">
      <div className="md:flex items-center justify-between">
        {data?.map((impact, i) => (
          <CardFeature
            key={i}
            title={impact.title}
            description={impact.description}
            titleStyle="text-2xl"
          />
        ))}
      </div>
    </CardSection>
  );
}
