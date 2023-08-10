"use client";
import Card from "@/components/Card/page";
import CardSection from "@/components/CardSection/page";
import Slider from "react-slick";

export default function Companion() {
  return (
    <CardSection className="bg-slate-200" title="Our Companion">
      <div>
        <Slider dots={true} slidesToShow={5} slidesToScroll={5} arrows={false}>
          {[...new Array(20)].map((_, i) => (
            <div key={i} className="pr-6">
              <Card
                cardStyle="p-6 bg-white rounded-lg"
                image="/images/fishlog-academy.png"
              />
            </div>
          ))}
        </Slider>
      </div>
    </CardSection>
  );
}
