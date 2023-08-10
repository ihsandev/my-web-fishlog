"use client";
import Card from "@/components/Card/page";
import CardSection from "@/components/CardSection/page";
import { ICompanion } from "@/types/home";
import Slider from "react-slick";

export default function Companion({
  data,
}: {
  data: ICompanion[] | undefined;
}) {
  return (
    <CardSection className="bg-slate-200" title="Our Companion">
      <div>
        <Slider
          dots={true}
          slidesToShow={5}
          slidesToScroll={5}
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
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: false,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              },
            },
          ]}
        >
          {data?.map((comp, i) => (
            <div key={i} className="pr-6">
              <Card
                cardStyle="p-6 bg-white rounded-lg"
                image={`/images/${comp.src}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </CardSection>
  );
}
