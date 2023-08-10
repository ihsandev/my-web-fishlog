import CardFeature from "@/components/CardFeature/page";
import CardSection from "@/components/CardSection/page";
import React from "react";

export default function Impact() {
  return (
    <CardSection className="bg-blue-900 text-white" title="Our Impact">
      <div className="md:flex items-center justify-between">
        <CardFeature
          title="+20,000 mT"
          description="dengan lebih dari 45 FishLog Quality Center di seluruh Indonesia"
          titleStyle="text-2xl"
        />
        <CardFeature
          title="+20,000 mT"
          description="dengan lebih dari 45 FishLog Quality Center di seluruh Indonesia"
          titleStyle="text-2xl"
        />
        <CardFeature
          title="+20,000 mT"
          description="dengan lebih dari 45 FishLog Quality Center di seluruh Indonesia"
          titleStyle="text-2xl"
        />
      </div>
    </CardSection>
  );
}
