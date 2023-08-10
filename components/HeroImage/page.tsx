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
    <section className="md:min-h-screen h-[70vh] overflow-hidden hero">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        autoplay={true}
        slidesToShow={1}
        slidesToScroll={1}
        className="md:min-h-screen h-[70vh]"
      >
        {heros?.map((hero, i) => (
          <div key={i} className="relative">
            <div className="max-w-screen-lg mx-auto px-6 md:px-0">
              <h1 className="absolute text-white text-5xl md:text-7xl font-bold top-32 md:top-64 max-w-screen-md">
                {hero.title}
              </h1>
            </div>
            <Image
              className="w-full object-cover md:h-screen h-[70vh]"
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
