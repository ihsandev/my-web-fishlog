"use client";
import Card from "@/components/Card";
import CardFeature from "@/components/CardFeature";
import CardSection from "@/components/CardSection";
import Slider from "react-slick";
import { FiHome } from "react-icons/fi";
import { ISummary } from "@/types/home";

export default function MiddleSection({
  summary,
}: {
  summary: ISummary | undefined;
}) {
  return (
    <CardSection
      className="relative"
      title={summary?.title}
      withContainer={false}
    >
      <div>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex md:flex-row flex-col items-center justify-between mb-24 gap-6">
            {summary?.about.map((item) => (
              <Card key={item.id} image={item.image} title={item.title} />
            ))}
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-6 justify-between relative">
          <div />
          <div>
            <div className="w-full md:w-[650px] md:absolute md:top-20 md:-left-[150px] mb-10 md:mb-0">
              <Slider
                dots={false}
                slidesToShow={2}
                slidesToScroll={2}
                arrows={false}
                infinite={true}
                autoplay={true}
                speed={500}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1,
                    },
                  },
                ]}
              >
                {summary?.feature.map((feat, i) => (
                  <div className="pr-4" key={i}>
                    <CardFeature
                      className="bg-slate-200"
                      title={feat.title}
                      description={feat.description}
                      icon={feat.icon}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="bg-blue-900 text-white max-w-screen-lg md:p-24 p-6 min-h-[500px] md:rounded-tl-xl md:rounded-bl-xl">
              <h2 className="mb-8 text-3xl font-bold md:pl-52 pr-60">
                {summary?.mainFeature.title}
              </h2>
              <div
                className="flex flex-col gap-6 md:pl-52"
                dangerouslySetInnerHTML={{
                  __html: summary?.mainFeature.description || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </CardSection>
  );
}
