"use client";
import Slider from "react-slick";
import Image from "next/image";

interface IHeros {
  title?: string;
  src?: any;
}
interface IHeroImage {
  heros?: IHeros[];
}

export default function HeroImage({ heros }: IHeroImage) {
  return (
    <section className="md:min-h-screen overflow-hidden">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        className="w-full"
      >
        {heros?.map((hero, i) => (
          <div key={i} className="relative">
            <div className="max-w-screen-lg mx-auto">
              <h1 className="absolute text-white text-7xl font-bold top-80 max-w-screen-md">
                {hero.title}
              </h1>
            </div>
            <Image
              className="w-full h-full"
              alt="hero"
              src={`/images/${hero.src}`}
              width={800}
              height={800}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
